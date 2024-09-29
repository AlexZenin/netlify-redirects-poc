const BASE_URL = "https://main--netlify-redirects-poc.netlify.app"
const NUMBER_OF_REQUESTS = 20

async function calculateAverageResponseTime() {
    let totalResponseTime = 0
    for (let i = 0; i < NUMBER_OF_REQUESTS; i++) {
        const now = performance.now()
        const randomNumber = Math.floor(Math.random() * 20_000)
        console.log(`Fetching product number: ${randomNumber}`)
        await fetch(`${BASE_URL}/my-products/${randomNumber}`, {
            // Do not follow the redirect
            redirect: "manual"
        })
        const timeTaken = performance.now() - now
        console.log(timeTaken)
        totalResponseTime += timeTaken
    }

   return totalResponseTime / NUMBER_OF_REQUESTS
}

const timeTaken = await calculateAverageResponseTime()
console.log(`Average response time: ${timeTaken} ms`)
