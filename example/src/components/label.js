import React from "react"

export default function Label({ children, className, htmlFor, ...props }) {
  return (
    <label
      {...props}
      className={`font-bold text-gray-700 ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
