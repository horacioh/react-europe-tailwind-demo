import React from "react"
import Layout from "../components/layout"

export default function Index() {
  return (
    <Layout>
      <div className="absolute w-screen h-screen p-12 flex flex-col align-center">
        <h1 className="text-center text-gray-900 text-4xl font-bold">
          Gatsby + Tailwind Form Demo
        </h1>
        <p className="text-center mt-8 text-xl text-gray-600">
          This is a Demo to show how you can use TailwindCSS
        </p>
        <div className="py-8">{/* FORM CODE HERE */}</div>
        <p className="text-center mt-8 text-xl text-body">
          Developed by{" "}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://twitter.com/hhg2288"
            target="_blank"
          >
            Horacio Herrera (@hhg2288)
          </a>
        </p>
      </div>
    </Layout>
  )
}
