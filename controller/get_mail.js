import dotenv from 'dotenv'
import { schedule_mail } from '../modal/schedule_modal.js'
import { DBConnect } from '../DBconnect.js'
dotenv.config()
export async function getAllMails(req,res)
{
    DBConnect()
   const modal= schedule_mail()
  const data=await modal.find()
  res.status(200).json(data) 
}
export async function getParMail(req,res)
{
    DBConnect()
    const {id}=req.params
    console.log(id)
    const modal=schedule_mail()
    try{
    const data=await modal.find({_id:id})
    console.log(data)
    if(!data)
    {
        res.status(400).json("email not found")
    }
    res.status(200).json(data)
    }
    catch(e)
    {
        res.status(200).json("Error in get particular email")
    }

}