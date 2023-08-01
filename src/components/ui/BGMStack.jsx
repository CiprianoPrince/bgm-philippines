import React from "react"

const BGMStack = ({
  children,
  className = "",
  direction = "vertical",
  gap = 1,
}) => {
  return (
    <div
      className={`${className} ${
        direction === "vertical" ? "v" : "h"
      }stack gap-${gap === 1 ? 1 : gap}`}
    >
      {children}
    </div>
  )
}

export default BGMStack
