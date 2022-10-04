const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Artilce',
        createdAt: Date.now(),
        description: 
    }]
})


app.listen(5000)