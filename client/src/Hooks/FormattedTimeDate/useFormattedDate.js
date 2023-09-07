const useFormattedDate = (dateString) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const formattedDate = formatDate(dateString);

  return formattedDate;
};

export default useFormattedDate;
