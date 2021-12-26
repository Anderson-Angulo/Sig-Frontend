const pluralOrSingularText = ({ cant, textPlural, textSingular }) => {
  if (cant === 1) return textSingular;
  else if (cant > 1) return textPlural;
};

export default pluralOrSingularText;
