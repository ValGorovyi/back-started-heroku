import express, { Express, Request, Response } from "express";
import { db, dbType} from "../dataBase/dataBase";
import { RequestDeleteById, RequestGetByAllCategory, RequestGetByIdCategory, RequestPostToAll, RequestPutByIdCategory, } from '../type/typeModules'


export const getDeleteRouters = (db:dbType[]) => {
  const deleteRouterTest = express.Router()  
  deleteRouterTest.delete('/data', (req, res) => {
        db = []
        res.sendStatus(204)
    })
    return deleteRouterTest
}

export const getWorkedRouters = (app: Express, db:dbType[]) => {
    const forestRouter = express.Router()
    forestRouter.get('/', (req, res) => {
    res.json(db)
  })
  
  forestRouter.get('/', (req: Request<RequestGetByAllCategory>, res) => {  
    if (req.query.category) {
      let filteredData: dbType[] = db.filter(value => value.category


        // ass string as

        
        .indexOf(req.query.category as string) > -1
      )
        res.json(filteredData)
    }
    res.json(db)
  })
  
  forestRouter.get('/:id', (req:Request<RequestGetByIdCategory> , res) => {
    let resultOFFound = db.find(artist => artist.id === req.params.id)
   
    if(!resultOFFound){
      res.sendStatus(404)
      return
    }
      res.json(resultOFFound)
  })
  
  forestRouter.put('/:id', (req: Request<RequestPutByIdCategory>, res) => {
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
  
  forestRouter.delete('/:id', (req: Request<RequestDeleteById>, res) => {
    db = db.filter(artist => artist.id !== req.params.id as string)
  
      res.sendStatus(204)
  })
  // fetch('http://localhost:3003/artists/2', {method: 'DELETE'})
  //    .then(res => res.json())
  //     .then(json => console.log(json))
  
  forestRouter.post('/', (req: Request<RequestPostToAll>, res) => {
    if(!req.body.title) {
      res.sendStatus(401)
    }
    let createdStuf = {id: 'idShit'+new Date(), superName: '', category: req.body.category}
  
    db = [...db, createdStuf ]
    res.status(201).json(createdStuf)
  })
  return forestRouter
}