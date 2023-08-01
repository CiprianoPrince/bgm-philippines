const fetchResource = (key, defaultValue = []) => {
  const jsonValue = window.localStorage.getItem(key)
  if (jsonValue != null) return JSON.parse(jsonValue)

  if (typeof defaultValue === "function") {
    const value = defaultValue()
    window.localStorage.setItem(key, JSON.stringify(value))
    return value
  } else {
    window.localStorage.setItem(key, JSON.stringify(defaultValue))
    return defaultValue
  }
}

export default fetchResource
