export const generateButtons = (currentPage: number, totalCount: number): number[] => {
  const firstPage = 1;
  const lastPage = totalCount;
  const prevPage = Math.max(currentPage - 1, firstPage);
  const nextPage = Math.min(currentPage + 1, lastPage);
  const displayedPages: number[] = [];

  displayedPages.push(firstPage);
  prevPage > firstPage + 1 && displayedPages.push(-1);
  prevPage !== firstPage && displayedPages.push(prevPage);
  displayedPages.push(currentPage);
  nextPage !== lastPage && displayedPages.push(nextPage);
  nextPage < lastPage - 1 && displayedPages.push(-1);
  displayedPages.push(lastPage);

  const uniqueDisplayedPages = displayedPages.filter((page, index, array) => {
    return page === -1 ? true : array.indexOf(page) === index;
  });

  return uniqueDisplayedPages;
};
