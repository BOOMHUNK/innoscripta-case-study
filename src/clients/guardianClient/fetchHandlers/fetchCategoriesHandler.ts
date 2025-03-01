import axios from "axios";
import { FetchTagsHandler, Tag } from "@/types";
import { GuardianCategories_Request, GuardianCategories_Response, } from "./dto";


const fetchCategoriesHandler: FetchTagsHandler = async (clientName, baseUrl, endpoint, apiToken, prefix) => {

    const headers = {
        Accept: "application/json",
        ["X-Api-Key"]: apiToken
    };


    // build request data
    const reqData: GuardianCategories_Request = {
        ...((prefix?.trim() || "") && ({ q: prefix })),
        "api-key": (apiToken || "test"),

    }
    const params = new URLSearchParams({ ...reqData });
    const url = `${baseUrl + endpoint}?${params.toString()}`;

    const response = await axios.get<GuardianCategories_Response>(url, {
        headers,
    });


    if (!Array.isArray(response.data?.response.results)) return [];

    return response.data.response.results
        .map((category) => ({
            displayName: category.webTitle.toLowerCase(),
            clientsCompatibleValues: { [clientName]: [category.id] },
        } as Tag));
};




export default fetchCategoriesHandler;