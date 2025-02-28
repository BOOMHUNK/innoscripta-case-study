import { FetchTagsHandler, Tag } from "@/types";
import { NewsApiCategories_Request, NewsApiCategories_Response } from "./dto";
import axios from "axios";


const fetchCategoriesHandler: FetchTagsHandler = async (clientName, fullEndpointAddress, apiToken, prefix) => {

    const body: NewsApiCategories_Request = {
        prefix,
        page: 1,
        count: 10,
        articleBodyLen: -1,
        apiKey: apiToken
    };
    const response = await axios.post<NewsApiCategories_Response>(fullEndpointAddress, body, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    //   console.log("categories raw data", response.data);
    if (!response.data || !Array.isArray(response.data)) return [];


    return response.data.map((rawCategory) => ({
        displayName: rawCategory.label,
        clientsCompatibleValue: { [clientName]: rawCategory.uri },
    } as Tag));
}

export default fetchCategoriesHandler;