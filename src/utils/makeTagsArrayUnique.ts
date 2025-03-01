import { Tag } from "@/types";

const MakeTagsArrayUnique = (tags: Tag[]) => {
    // Create a map to merge tags by displayName.
    // This will ensure that we don't have duplicate tags with the same displayName.
    // Also it will merge all the clientsCompatibleValues arrays for each client.
    const mergedTagsMap: { [displayName: string]: Tag } = {};

    tags.forEach((tag) => {
        if (!mergedTagsMap[tag.displayName.toLowerCase()]) {
            // If this is the first occurrence, add it to the map.
            mergedTagsMap[tag.displayName] = {
                displayName: tag.displayName,
                clientsCompatibleValues: { ...tag.clientsCompatibleValues },
            };
        } else {
            // Otherwise, merge the clientsCompatibleValue fields.
            const existing = mergedTagsMap[tag.displayName];
            for (const clientName in tag.clientsCompatibleValues) {

                if (!Array.isArray(existing.clientsCompatibleValues[clientName])) {
                    existing.clientsCompatibleValues[clientName] = [];
                }

                existing.clientsCompatibleValues[clientName] = Array.from(
                    new Set([
                        ...existing.clientsCompatibleValues[clientName],
                        ...(tag.clientsCompatibleValues[clientName] || []),
                    ]));
            }
        }
    });

    // Convert the map to an array.
    return Object.values(mergedTagsMap);
}
export default MakeTagsArrayUnique;