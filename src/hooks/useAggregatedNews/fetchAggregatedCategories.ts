import { ClientFactory } from "@/clients";
import { Tag } from "@/types";

/**
 * Fetches suggested categories from multiple APIs.
*/
export const fetchAggregatedCategories = async (
    clients: ClientFactory[], // List of API clients
    prefix: string,
): Promise<Tag[]> => {
    console.log("start");
    // Create fetch promises for each client
    const fetchPromises = clients.map((client) =>
        client.getCategories(prefix)
    );

    // Wait for all clients to return results
    const results = await Promise.all(fetchPromises);


    // Flatten the results to a single array.
    const flatTags: Tag[] = results.flat();

    // Create a map to merge tags by displayName.
    const mergedTagsMap: { [displayName: string]: Tag } = {};

    flatTags.forEach((tag) => {
        if (!mergedTagsMap[tag.displayName]) {
            // If this is the first occurrence, add it to the map.
            mergedTagsMap[tag.displayName] = {
                displayName: tag.displayName,
                clientsCompatibleValue: { ...tag.clientsCompatibleValue },
            };
        } else {
            // Otherwise, merge the clientsCompatibleValue fields.
            const existing = mergedTagsMap[tag.displayName];
            for (const clientName in tag.clientsCompatibleValue) {
                // This will override any previous value from a client with the same name.
                // Alternatively, you could decide to only set it if it is not already defined.
                existing.clientsCompatibleValue[clientName as keyof typeof existing.clientsCompatibleValue] = tag.clientsCompatibleValue[clientName as keyof typeof tag.clientsCompatibleValue];
            }
        }
    });

    // Convert the map to an array.
    const allTags = Object.values(mergedTagsMap);
    console.log("allTags", allTags);

    return allTags;
};