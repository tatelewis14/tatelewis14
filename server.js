const fs = require('fs')
const http = require('http').createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    fs.readFile('index.html', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.end(data)
        }
    })
}).listen(3000, () => {
    console.log('Server running')
})