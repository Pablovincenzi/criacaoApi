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

export const listPrases = async(req:Request,res:Response)=>{
    let list = await Phrase.findAll();
    res.json({list})

}
export const getPrase = async(req:Request,res:Response)=>{
    let {id} = req.params
    let phrase = await Phrase.findByPk(id)
    if(phrase){
        res.json({phrase})
    }else{
        res.json({error:'FRASE NÃO ENCONTRADA'})
    }

    

}
export const updatePhrase = async(req:Request,res:Response)=>{
    let {id} = req.params
    let{author,txt}=req.body
    
    let phrase = await Phrase.findByPk(id)
    if(phrase){
        phrase.author=author
        phrase.txt=txt
        await phrase.save();
        res.json({phrase})
    }else{
        res.json({error:'FRASE NÃO ENCONTRADA'})
    }

    

}
export const deletePhrase = async(req:Request,res:Response)=>{
    let {id} = req.params
    
    
    let phrase = await Phrase.findByPk(id)
    if(phrase){
        phrase.author=author
        phrase.txt=txt
        await phrase.save();
        res.json({phrase})
    }else{
        res.json({error:'FRASE NÃO ENCONTRADA'})
    }

    

}


