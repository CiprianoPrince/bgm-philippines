const updateResource = (key, newData) => {
  const jsonValue = window.localStorage.getItem(key)
  if (jsonValue != null) {
    window.localStorage.setItem(key, JSON.stringify(newData))
    return newData
  }
}

export default updateResource
