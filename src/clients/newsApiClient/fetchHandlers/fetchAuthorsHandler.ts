import { FetchTagsHandler, Tag } from "@/types";
import { NewsApiAuthors_Request, NewsApiAuthors_Response } from "../dto";
import axios from "axios";


const fetchAuthorsHandler: FetchTagsHandler = async (clientName, fullEndpointAddress, apiToken, prefix) => {

    const body: NewsApiAuthors_Request = {
        prefix,
        apiKey: apiToken,
    };

    const response = await axios.post<NewsApiAuthors_Response>(fullEndpointAddress, body, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    //   console.log("categories raw data", response.data);
    if (!response.data || !Array.isArray(response.data)) return [];


    return response.data.map((rawSource) => ({
        displayName: rawSource.name,
        clientsCompatibleValues: { [clientName]: [rawSource.uri] },
    } as Tag));
}

export default fetchAuthorsHandler;