import React from "react"
export default function Layout({ children }) {
  return <div className={`content-transition duration-200`}>{children}</div>
}
