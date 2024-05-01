import 'reflect-metadata'
import express, {Request, Response}from 'express'
import {postg} from './postgraphilerc'
import bodyParser from 'body-parser'
import {AppDataSource} from './data-source'

const app=express()
app.use(bodyParser.json())
app.use(postg)
AppDataSource.initialize()
  .then(()=>{
    console.log('Database connected')
  })
  .catch((error)=>{
    console.log(error)
  })
  
  app.listen(5000, ()=>{
    console.log('App is running on port 5000')
  })


