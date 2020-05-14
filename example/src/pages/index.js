import React from "react"
import Layout from "../components/layout"
import Label from "../components/label"

export default function Index() {
  const [toggleErrors, setToggleErrors] = React.useState(false)
  return (
    <Layout>
      <div className="p-12 flex flex-col align-center">
        <h1 className="text-center text-gray-900 text-4xl font-bold">
          Gatsby + Tailwind Form Demo
        </h1>
        <p className="text-center mt-8 text-xl text-gray-600">
          This is a Demo to show how you can use TailwindCSS
        </p>
        <div className="py-8 flex flex-col items-center">
          <button
            className={`m-4  border border-gray-500  px-4 py-2 leading-4 rounded ${
              toggleErrors ? "bg-red-500 text-white" : "bg-white text-gray-700"
            } `}
            onClick={() => setToggleErrors(value => !value)}
          >
            toggle errors
          </button>
          {/* Form Wrapper */}
          <div className="mx-auto w-full md:max-w-md bg-white p-8 rounded-md shadow-md">
            <form>
              {/* form control input */}
              <div className="relative mb-10">
                <Label htmlFor="username">Username</Label>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  id="username"
                  className="mt-2 border border-gray-300 px-3 py-2 rounded w-full"
                />
                {toggleErrors && (
                  <p className="absolute text-red-500 font-semibold text-sm mt-1">
                    username error!
                  </p>
                )}
              </div>
              {/* form control input */}
              <div className="relative mb-10">
                <Label htmlFor="password">Password</Label>
                <input
                  placeholder="password"
                  type="text"
                  name="password"
                  id="password"
                  className="mt-2 border border-gray-300 px-3 py-2 rounded w-full"
                />
                {toggleErrors && (
                  <p className="absolute text-red-500 font-semibold text-sm mt-1">
                    password error!
                  </p>
                )}
              </div>
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded shadow duration-200"
                  type="submit"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
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
