import dotenv from 'dotenv'
import { schedule_mail } from '../modal/schedule_modal.js'
import { DBConnect } from '../DBconnect.js'
dotenv.config()
export async function deleteMail(req,res)
{
    DBConnect()
    const {id}=req.params
   const modal= schedule_mail()
  const data=await modal.deleteOne({_id:id})
  res.status(200).json(data) 
}
