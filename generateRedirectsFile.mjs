import fs from "node:fs"

const FILE_PATH = './netlify.toml'
const NUMBER_OF_PRODUCTS = 100_000

function generateRedirectForProductNumber(number) { return (`
[[redirects]]
  from = "/my-products/${number}"
  to = "/products/${number}"
  status = 307
  force = false
`)}


for (let i = 1; i <= NUMBER_OF_PRODUCTS; i++) {
    const content = generateRedirectForProductNumber(i)

    fs.appendFile(FILE_PATH, content, (err) => {
        if (err) {
            console.error('Error appending file:', err);
        }
    })
}

console.log("Done!")
