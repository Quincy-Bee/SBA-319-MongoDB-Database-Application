import express from "express";
import Call from "../models/Call.js";

const router = express.Router();

router.get("/", async (req,res)=>{
    try {
        const calls = await Call.find();
        res.json(calls);
    } catch(error){
        res.status(500).json({
            error:error.message
        });
    }
});

export default router;