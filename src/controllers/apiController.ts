import {Request, Response} from 'express'
import { Phrase } from '../models/Phrase'

 export const ping = (req:Request, res:Response)=>{
    res.json({pong:true})
 }

 export const random = (req:Request,res:Response)=>{
    let rRand: number = Math.floor(Math.random()*100)
    res.json({
        number:rRand
    })}

export const nome = (req:Request,res:Response)=>{
        let nome:string=req.params.nome
        res.json({name:nome})
    
    }

export const createPhrase = async(req:Request,res:Response)=>{
    let author : string = req.body.author
    let txt : string = req.body.txt

    let newNewPhrase = await Phrase.create({author,txt})
    res.json({id: newNewPhrase.id,author,txt})

}