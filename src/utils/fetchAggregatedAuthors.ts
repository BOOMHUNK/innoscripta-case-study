import { ClientFactory } from "@/clients";
import { Tag } from "@/types";
import MakeTagsArrayUnique from "./makeTagsArrayUnique";

/**
 * Aggregates suggested Authors from multiple APIs.
*/
const fetchAggregatedAuthors = async (
    clients: ClientFactory[], // List of API clients
    prefix: string,
): Promise<Tag[]> => {
    // Create fetch promises for each client
    const fetchPromises = clients.map((client) =>
        client.getAuthors(prefix)
    );

    // Wait for all clients to return results
    const results = await Promise.all(fetchPromises);

    // Flatten the results to a single array.
    const flatTags: Tag[] = results.flat();

    // Remove duplicates from the array.
    return MakeTagsArrayUnique(flatTags);
};
export default fetchAggregatedAuthors;