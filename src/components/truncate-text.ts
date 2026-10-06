const truncateText = (text: string, length = 160): string => {
  const truncationPoint = text.indexOf(" ", length);

  return truncationPoint === -1 ? text : `${text.slice(0, truncationPoint)}...`;
};

export default truncateText;
