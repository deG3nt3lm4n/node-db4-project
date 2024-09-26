const server = require('./api/server');

const PORT = process.env.PORT || 1337;

server.listen(PORT, () => {
  console.log(`server running on :${PORT}`)
})