import express from 'express'
import { app } from './app'


var nodemonComand = 'yarn nodemon --inspect distJSC/server.js'
var typescriptComp = 'yarn tsc -w'

const port = 3003

//needed for body modification.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
