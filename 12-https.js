const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    if(req.url === '/about'){
        res.end("This is About Page")
    }

    res.end(`
            <h1>Oops!</h1>
            <p>I did it again!</p>
            <a href="/">Back home</a>
        `)
    
})

server.listen(5500)