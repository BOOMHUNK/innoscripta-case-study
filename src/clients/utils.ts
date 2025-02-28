import { Tag } from "@/types";

export const MakeCategoriesArrayUnique = (tags: Tag[]) => {
    // Create a map to merge tags by displayName.
    // This will ensure that we don't have duplicate tags with the same displayName.
    // Also it will merge all the clientsCompatibleValues arrays for each client.
    const mergedTagsMap: { [displayName: string]: Tag } = {};

    tags.forEach((tag) => {
        if (!mergedTagsMap[tag.displayName]) {
            // If this is the first occurrence, add it to the map.
            mergedTagsMap[tag.displayName] = {
                displayName: tag.displayName,
                clientsCompatibleValues: { ...tag.clientsCompatibleValues },
            };
        } else {
            // Otherwise, merge the clientsCompatibleValue fields.
            const existing = mergedTagsMap[tag.displayName];
            for (const clientName in tag.clientsCompatibleValues) {

                if (!Array.isArray(existing.clientsCompatibleValues[clientName as keyof typeof existing.clientsCompatibleValues])) {
                    existing.clientsCompatibleValues[clientName as keyof typeof existing.clientsCompatibleValues] = [];
                }

                existing.clientsCompatibleValues[clientName as keyof typeof existing.clientsCompatibleValues] = Array.from(
                    new Set([
                        ...existing.clientsCompatibleValues[clientName as keyof typeof existing.clientsCompatibleValues],
                        ...(tag.clientsCompatibleValues[clientName as keyof typeof existing.clientsCompatibleValues] || []),
                    ]));
            }
        }
    });

    // Convert the map to an array.
    return Object.values(mergedTagsMap);
}