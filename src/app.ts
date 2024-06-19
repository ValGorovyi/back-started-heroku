import express, {Request, Response } from 'express'
import { RequestDeleteById, RequestGetByAllCategory, RequestGetByIdCategory, RequestPostToAll, RequestPutByIdCategory, dbType } from './type/typeModules'
export const app = express()


const jsonBodyMidleW = express.json()
app.use(jsonBodyMidleW)

let db: dbType[] = [
  {id:'1', superName: 'Separ', category: 'friend'},
  {id:'2', superName: 'Paravoz', category: 'friend'},
  {id:'3', superName: 'Bumer', category: 'man'}
]

app.delete('/zeroing/_test', (req, res) => {
  db = []
  res.sendStatus(204)
})

app.get('/', (req, res) => {
  res.json(db)
})

app.get('/forest', (req: Request<RequestGetByAllCategory>, res) => {
  if (req.query.category) {
    let filteredData = db.filter(value => value.category
      .indexOf(req.query.category as string) > -1
    )
      res.json(filteredData)
  }
  res.json(db)
})

app.get('/forest/:id', (req:Request<RequestGetByIdCategory> , res) => {
  let resultOFFound = db.find(artist => artist.id === req.params.id)
 
  if(!resultOFFound){
    res.sendStatus(404)
    return
  }
    res.json(resultOFFound)
})

app.put('/forest/:id', (req: Request<RequestPutByIdCategory>, res) => {
  if (!req.params.id) {
    res.sendStatus(404)
    return
  }
  let resultOFFound = db.find(artist => artist.id === req.params.id as string)
 
  if(!resultOFFound){
    res.sendStatus(404)
    return
  }
  resultOFFound.category = req.body.catecory
    res.sendStatus(200)
})
// fetch('http://localhost:3003/artists/1', {method: 'PUT', body: JSON.stringify({title: 'no war'}),  headers:{'content-type': 'application/json'}})
//    .then(res => res.json())
//     .then(json => console.log(json))

app.delete('/forest/:id', (req: Request<RequestDeleteById>, res) => {
  db = db.filter(artist => artist.id !== req.params.id as string)

    res.sendStatus(204)
})
// fetch('http://localhost:3003/artists/2', {method: 'DELETE'})
//    .then(res => res.json())
//     .then(json => console.log(json))

app.post('/forest', (req: Request<RequestPostToAll>, res) => {
  if(!req.body.title) {
    res.sendStatus(401)
  }
  let createdStuf = {id: 'idShit'+new Date(), superName: '', category: req.body.category}

  db = [...db, createdStuf ]

  res.status(201).json(createdStuf)
})
// fetch('http://localhost:3003/artists', {method: 'POST', body: JSON.stringify({title: 'pidaras'}),  headers:{'content-type': 'application/json'}})
//    .then(res => res.json())
//     .then(json => console.log(json))
