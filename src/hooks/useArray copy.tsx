import { useState } from "react"

type useArrayType<T> = {
  array: T[]
  set: (elements: T[]) => void
  append: (element: T) => void
  prepend: (element: T) => void
  replace: (oldElement: T, ...newElements: T[]) => void
  remove: (element: T) => void
  removeFirst: () => void
  removeLast: () => void
}

export default function useArray<T>(defaultValue: T[]): useArrayType<T> {
  const [array, setArray] = useState(defaultValue)

  function append(element: T) {
    setArray((array: T[]) => [...array, element])
  }

  function prepend(element: T) {
    setArray((array: T[]) => [element, ...array])
  }

  function replace(oldElement: T, ...newElements: T[]) {
    setArray((array: T[]) => {
      const index = array.indexOf(oldElement)
      if (index === -1) return array
      return [
        ...array.slice(0, index),
        ...(newElements as T[]),
        ...array.slice(index + 1, array.length),
      ]
    })
  }

  function remove(element: T) {
    setArray((array: T[]) => {
      const index = array.indexOf(element)
      if (index === -1) return array
      return [...array.slice(0, index), ...array.slice(index + 1, array.length)]
    })
  }

  function removeFirst() {
    setArray((array: T[]) => [...array.slice(1, array.length)])
  }

  function removeLast() {
    setArray((array: T[]) => [...array.slice(0, -1)])
  }

  return {
    array,
    set: setArray,
    append,
    prepend,
    replace,
    remove,
    removeFirst,
    removeLast,
  }
}
