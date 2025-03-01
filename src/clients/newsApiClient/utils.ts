export const convertCategoryLabelToDisplayName = (label: string): string => {
  const parts = label.split('/');
  return parts[parts.length - 1].toLowerCase();
}