import { ClientFactory, MakeCategoriesArrayUnique } from "@/clients";
import { Tag } from "@/types";

/**
 * Aggregates suggested categories from multiple APIs.
*/
const fetchAggregatedCategories = async (
    clients: ClientFactory[], // List of API clients
    prefix: string,
): Promise<Tag[]> => {
    // Create fetch promises for each client
    const fetchPromises = clients.map((client) =>
        client.getCategories(prefix)
    );

    // Wait for all clients to return results
    const results = await Promise.all(fetchPromises);
    // ToDo: Skip repeating fetch of categories from APIs which we already have values from them.

    // Flatten the results to a single array.
    const flatTags: Tag[] = results.flat();

    // Remove duplicates from the array.
    return MakeCategoriesArrayUnique(flatTags);

};
export default fetchAggregatedCategories;