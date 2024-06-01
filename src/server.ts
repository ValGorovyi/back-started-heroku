import express from 'express'

const app = express()
const port = process.env.PORT || 3003

//needed for body modification.
const jsonBodyMidleW = express.json()
app.use(jsonBodyMidleW)

let db = [{id:'1', title: 'max paravoz'},{id:'2', title: 'separ men'},{id:'3', title: 'artem china'}]

app.get('/', (req, res) => {
  res.json('loh')
})

app.get('/maxparavoz', (req, res) => {

  res.json(db[0])
})

app.get('/artists/:id', (req, res) => {
  let resultOFFound = db.find(artist => artist.id === req.params.id as string)
 
  if(!resultOFFound){
    res.sendStatus(404)
    return
  }
    res.json(resultOFFound)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


