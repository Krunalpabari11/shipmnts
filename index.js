import express from 'express'
import { schedule } from './controller/schedule-mail_con.js';
import { getAllMails } from './controller/get_mail.js';
import { getParMail } from './controller/get_mail.js';
import { DBConnect } from './DBconnect.js';
import { deleteMail } from './controller/delete-mail.js';
const app=express();

app.use(express.json())
DBConnect()
app.post('/schedule-email',schedule)
app.get('/scheduled-emails',getAllMails)
app.get('/scheduled-emails/:id',getParMail)
app.delete('/scheduled-emails/:id',deleteMail)
app.listen(5000,()=>{
    console.log("listening on port ")
})