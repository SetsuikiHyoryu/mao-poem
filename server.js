const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
  let uri = path.join(
    __dirname,
    request.url === '/' ? 'index.html' : request.url,
  )

  const omittedExtensionRegex = /(?:\/|\\)[^\/]+(?<!\..*)$/
  omittedExtensionRegex.test(uri) && (uri += '.js')

  const extname = path.extname(uri)

  const contentTypeMap = {
    ['.js']: 'text/javascript',
    ['.css']: 'text/css',
    ['.jpg']: 'image/jpeg',
  }

  fs.readFile(uri, (error, data) => {
    if (error) {
      response.writeHead(500)
      response.end(`同志，获取不到 ${request.url} 文件。`)
      return
    }

    response.writeHead(200, {
      'Content-Type': contentTypeMap[extname] ?? 'text/html',
    })

    response.end(data)
  })
})

const PORT = 8000
server.listen(PORT, () => {
  console.log(`同志，你的程序运行在 http://localhost:${PORT}/ 上。`)
})
