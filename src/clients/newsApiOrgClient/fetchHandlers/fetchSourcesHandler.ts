import { FetchTagsHandler, Tag } from "@/types";
import { NewsApiOrgSources_Response } from "../dto";
import axios from "axios";


// since the request doesnt support querying we will do a simple cache on the first request
const sourcesCached: { q: string, sources: { name: string, id: string, [key: string]: any }[] } = { q: "", sources: [] };
const fetchSourcesHandler: FetchTagsHandler = async (clientName, baseUrl, endpoint, apiToken, prefix) => {
    if (sourcesCached.q != prefix) {
        const response = await axios.get<NewsApiOrgSources_Response>(baseUrl + endpoint, {
            headers: {
                Accept: "application/json",
                ["X-Api-Key"]: apiToken
            },
        });

        if (response.data?.status != "ok" || !Array.isArray(response.data.sources)) return [];

        sourcesCached.q = prefix;
        sourcesCached.sources = response.data.sources;
    }

    // filter sources by prefix and sort by length then return first 50
    const matches = (sourcesCached.sources
        .reduce((acc, rawSource) => {
            if (rawSource.name.toLowerCase().includes(prefix.toLowerCase())) {
                acc.push({
                    displayName: rawSource.name,
                    clientsCompatibleValues: { [clientName]: [rawSource.name] },
                } as Tag);
            }
            return acc;
        }, [] as Tag[])).sort((a, b) => a.displayName.length - b.displayName.length).slice(0, 50);

    return matches;
}

export default fetchSourcesHandler;