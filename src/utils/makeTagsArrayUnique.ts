import { Tag } from "@/types";

/**
 * Removes duplicate tags from the provided array by merging tags with the same `displayName` property.
 * The `clientsCompatibleValues` property is also merged for each unique tag.
 *
 * Creates a map to merge tags by displayName.
 * This will ensure that we don't have duplicate tags with the same displayName.
 * Also it will merge all the clientsCompatibleValues arrays for each client.
 * 
 * @param tags - An array of `Tag` objects to be processed.
 * @returns A new array of unique `Tag` objects.
 */
const MakeTagsArrayUnique = (tags: Tag[]) => {
    const mergedTagsMap: { [key: string]: Tag } = {};

    tags.forEach((tag) => {
        const key = tag.displayName.toLowerCase(); // force use lower-case for the key
        if (!mergedTagsMap[key]) {
            // If first occurrence, store it
            mergedTagsMap[key] = {
                displayName: tag.displayName,
                clientsCompatibleValues: { ...tag.clientsCompatibleValues },
            };
        } else {
            // Merge clientsCompatibleValues if the tag already exists.
            const existing = mergedTagsMap[key];
            for (const clientName in tag.clientsCompatibleValues) {
                if (!Array.isArray(existing.clientsCompatibleValues[clientName])) {
                    existing.clientsCompatibleValues[clientName] = [];
                }
                existing.clientsCompatibleValues[clientName] = Array.from(
                    new Set([
                        ...existing.clientsCompatibleValues[clientName],
                        ...(tag.clientsCompatibleValues[clientName] || []),
                    ])
                );
            }
        }
    });


    // Convert the map to an array.
    return Object.values(mergedTagsMap);
};

export default MakeTagsArrayUnique;