import { Router } from "express";

const router = Router();

router.get('/ping',(req,res)=>{
res.json({pong:true})
})

router.get('/random',(req,res)=>{
    let rRand: number = Math.floor(Math.random()*100);
    res.json({
        number:rRand
    });
})

router.get('/nome/:nome', (req,res)=>{
    let nome:string=req.params.nome
    res.json({name:nome})

})

export default router;