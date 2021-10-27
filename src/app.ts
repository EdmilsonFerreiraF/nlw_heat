import "dotenv/config"
import express from 'express'

const app = express()

app.get("/github", (request, response) => {
    response.redirect(
        `https://github.com/login/oauth/authorize?client_id=
        ${process.env.GITHUB_CLIENT_ID}
    `)
})

app.get("/signin/callback", (request, response) => {
    const { code } = request.query

    return response.json(code)
})

const PORT = 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))