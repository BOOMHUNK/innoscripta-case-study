import { FetchTagsHandler, Tag } from "@/types";
import { NewsApiCategories_Request, NewsApiCategories_Response } from "./dto";
import axios from "axios";
import { convertCategoryLabelToDisplayName } from "../utils";


const fetchCategoriesHandler: FetchTagsHandler = async (clientName, baseUrl, endpoint, apiToken, prefix) => {

    const body: NewsApiCategories_Request = {
        prefix,
        page: 1,
        count: 20,
        articleBodyLen: -1,
        apiKey: apiToken
    };
    const response = await axios.post<NewsApiCategories_Response>(baseUrl + endpoint, body, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    if (!response.data || !Array.isArray(response.data)) return [];


    return response.data.map((rawCategory) => ({
        displayName: convertCategoryLabelToDisplayName(rawCategory.label),
        clientsCompatibleValues: { [clientName]: [rawCategory.uri] },
    } as Tag));
}

export default fetchCategoriesHandler;