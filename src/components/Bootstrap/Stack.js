import React from "react"

function Stack({ children, direction, gap }) {
  return (
    <div
      className={`${direction === "horizontal" ? "h" : "v"}stack gap-${
        gap === 0 ? 0 : gap
      }`}
    >
      {children}
    </div>
  )
}

export default Stack
