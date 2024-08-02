import express from 'express'
import { schedule_mail } from '../modal/schedule_modal.js'
import { DBConnect } from '../DBconnect.js';
import { scheduleJob } from 'node-schedule';
import nodeMailer from 'node-mailer';
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
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'krunalpabar11@gmail.com',
                pass: 'Krunal@@@123'
            }
        });
        
        // Email content
        let mailOptions = {
            from: 'krunalpabari11@gmail.com',
            to: recipient,
            subject:subject,
            text: content
        };
        
        // Send email
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        scheduleJob.scheduleJob('59 23 * * *',function(){
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'krunalpabar11@gmail.com',
                    pass: 'Krunal@@@123'
                }
            });
            
            // Email content
            let mailOptions = {
                from: 'krunalpabari11@gmail.com',
                to: recipient,
                subject:subject,
                text: content
            };
            
            // Send email
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        })        
        res.status(200).json({success:"email has been scheduled"})
    }
    catch(e)
    {
        console.log("Error in scheduling mail controller file",e);
    }
}