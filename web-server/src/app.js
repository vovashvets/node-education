import express from 'express'

const app = express()
app.use(express.static('public'))

app.get('/about', (req, res) => {
    res.send('About page!')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})