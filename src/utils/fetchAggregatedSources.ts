import { ClientFactory } from "@/clients";
import { Tag } from "@/types";
import { MakeTagsArrayUnique } from "@/utils";

/**
 * Aggregates suggested sources from multiple APIs.
*/
const fetchAggregatedSources = async (
    clients: ClientFactory[], // List of API clients
    prefix: string,
): Promise<Tag[]> => {
    // Create fetch promises for each client
    const fetchPromises = clients.map((client) =>
        client.getSources(prefix)
    );

    // Wait for all clients to return results
    const results = await Promise.all(fetchPromises);

    // Flatten the results to a single array.
    const flatTags: Tag[] = results.flat();

    // Remove duplicates from the array.
    return MakeTagsArrayUnique(flatTags);
};
export default fetchAggregatedSources;