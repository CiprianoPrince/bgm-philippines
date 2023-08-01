const formatSentenceCase = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
}

export default formatSentenceCase
