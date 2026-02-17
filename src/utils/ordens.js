export function sortOrdensByNewest(ordens) {
  return [...ordens].sort((a, b) => {
    const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;

    if (aTime !== bTime) {
      return bTime - aTime;
    }

    return String(b.id).localeCompare(String(a.id));
  });
}
