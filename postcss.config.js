module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production"
      ? [
          require("@fullhuman/postcss-purgecss")({
            content: ["./src/**/*.{js,jsx}"],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
    require("postcss-preset-env"),
    // require("autoprefixer")
  ],
}
