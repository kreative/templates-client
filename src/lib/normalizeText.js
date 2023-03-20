const normalizeText = (text) => {
  const words = text.split("-");
  const transformedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return transformedWords.join(" ");
};

export default normalizeText;
