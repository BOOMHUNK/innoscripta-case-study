import { FetchTagsHandler, Tag } from "@/types";
import { NewsApiAuthors_Request, NewsApiAuthors_Response } from "./dto";
import axios from "axios";


const fetchAuthorsHandler: FetchTagsHandler = async (clientName, baseUrl, endpoint, apiToken, prefix) => {

    const body: NewsApiAuthors_Request = {
        prefix,
        apiKey: apiToken,
    };

    const response = await axios.post<NewsApiAuthors_Response>(baseUrl + endpoint, body, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    if (!response.data || !Array.isArray(response.data)) return [];


    return response.data.map((rawSource) => ({
        displayName: rawSource.name,
        clientsCompatibleValues: { [clientName]: [rawSource.uri] },
    } as Tag));
}

export default fetchAuthorsHandler;