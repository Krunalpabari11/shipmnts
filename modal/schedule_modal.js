import mongoose from "mongoose";
export function schedule_mail(){
const schedule_email = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    sender: {
        type: String,
        required: true,
    },
    recipient: {
        type: String,
        required: true,
    },
    subject:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    schedule: {
        frequency: {
            type: String,
            enum: ['daily', 'weekly', 'monthly'],
            required: true,
        },
        time: {
            type: String, // Store time in HH:mm format
            required: true,
        },
        dayOfWeek: {
            type: String,
            enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            validate: {
                validator: function(value) {
                    return this.schedule.frequency !== 'weekly' || value != null;
                },
                message: 'dayOfWeek is required when frequency is weekly',
            },
        },
        dayOfMonth: {
            type: Number,
            min: 1,
            max: 31,
            validate: {
                validator: function(value) {
                    return this.schedule.frequency !== 'monthly' || value != null;
                },
                message: 'dayOfMonth is required when frequency is monthly',
            },
        },
    },

});
let schedule;
try{
    schedule=mongoose.model('schedule_mails')
}
catch{
 schedule = mongoose.model('schedule_mails', schedule_email);
}
return schedule
}
