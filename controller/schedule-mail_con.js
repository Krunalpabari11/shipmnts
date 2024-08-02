import express from 'express'
import { schedule_mail } from '../modal/schedule_modal.js'
import { DBConnect } from '../DBconnect.js';
export function schedule(req,res)
{   DBConnect()
    const {sender,recipient,subject,content,schedule}=req.body
    try{
        const model=schedule_mail();
        new model({
            sender:sender,
            recipient:recipient,
            subject:subject,
            content:content,
            schedule:schedule
        }).save()

        
        res.status(200).json({success:"email has been scheduled"})
    }
    catch(e)
    {
        console.log("Error in scheduling mail controller file",e);
    }
}