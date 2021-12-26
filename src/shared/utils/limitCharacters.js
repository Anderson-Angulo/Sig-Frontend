const limitCharacters = (text, limit = 20) => {
  if (text === undefined || text === null) return '';
  if (text.length < limit) return text;
  else return text.slice(0, limit) + '...';
};

export default limitCharacters;
