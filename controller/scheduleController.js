const schedule = require('node-schedule')
const Message = require('../models/Message');

//question 6 i.e. task 2, 2 question
const scheduleInsertion = async (req, res) => {
    const { message, day, time } = req.body;

    if(!message){
        return res.status(400).send('message is required!');
    }

   if(!day){
    return res.status(400).send('day is required!');
   }

   if(!time){
    return res.status(400).send('time is required!');
   }
   const dateTimeString = `${day} ${time}`;

   const date = new Date(dateTimeString);

   // Check if the date is valid
   if (isNaN(date.getTime())) {
       throw new Error('Invalid date format');
   }

  const cronJob = schedule.scheduleJob(date,async()=>{
    await Message.create({
        message: message,
        createdAt: new Date(),
    })
    cronJob.cancel()
  })
  //second things as mentioned above
//   await Message.create({
//     message: message,
//     createdAt: date,
//   })
}

module.exports = scheduleInsertion;
