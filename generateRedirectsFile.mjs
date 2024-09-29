import fs from "node:fs"

const FILE_PATH = './netlify.toml'

function generateRedirectForProductNumber(number) { return (`
[[redirects]]
  from = "/my-products/${number}"
  to = "/products/${number}"
  status = 307
  force = false
`)}


for (let i = 1; i <= 10; i++) {
    const content = generateRedirectForProductNumber(i)

    fs.appendFile(FILE_PATH, content, (err) => {
        if (err) {
            console.error('Error appending file:', err);
        }
    })
}

console.log("Done!")
