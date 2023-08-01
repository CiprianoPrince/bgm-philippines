const formatSentenceCaseSingular = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length - 1)
}

export default formatSentenceCaseSingular
