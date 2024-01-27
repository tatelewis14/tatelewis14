const http = require('http')
const fs = require('fs')
const port = 3001

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})

    fs.readFile('./index.html', (err, data) => {
        if(err) {
            console.error(err)
        } else {
            res.end(data)
        }
    })
})



server.listen(port, err => {
    if(err) {
        console.error(err)
    } else {
        console.log(`Server running on port ${port}`)
    }
})