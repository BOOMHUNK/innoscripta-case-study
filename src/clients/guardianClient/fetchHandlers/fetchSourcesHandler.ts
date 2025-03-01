import { FetchTagsHandler, Tag } from "@/types";

const fetchSourcesHandler: FetchTagsHandler = (clientName, baseUrl, endpoint, apiToken, prefix) => {
    baseUrl; endpoint; apiToken;
    const SourceName = "the guardian";
    if (SourceName.includes(prefix.trim().toLowerCase()))
        return Promise.resolve([{
            displayName: SourceName,
            clientsCompatibleValues: { [clientName]: [SourceName] },
        }] as Tag[])
    return Promise.resolve([]);
}

export default fetchSourcesHandler;