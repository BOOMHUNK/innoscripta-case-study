import { FetchTagsHandler, Tag } from "@/types";
import { NewsApiSources_Request, NewsApiSources_Response } from "../dto";
import axios from "axios";


const fetchSourcesHandler: FetchTagsHandler = async (clientName, baseUrl, endpoint, apiToken, prefix) => {

    const body: NewsApiSources_Request = {
        prefix,
        apiKey: apiToken,
    };

    const response = await axios.post<NewsApiSources_Response>(baseUrl + endpoint, body, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    if (!response.data || !Array.isArray(response.data)) return [];


    return response.data.map((rawSource) => ({
        displayName: rawSource.title.toLowerCase(),
        clientsCompatibleValues: { [clientName]: [rawSource.uri] },
    } as Tag));
}

export default fetchSourcesHandler;