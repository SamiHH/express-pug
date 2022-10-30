const { dateParser } = require('../src/Utils')

//  -------------- Middleware  ------------------------------

// Create a custom middleware to verify the time of the request :
module.exports.timeWork = (req, res, next) => {

    const error = {}
    const dateWork = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    let day = days[dateWork.getDay()];
    let hour = dateWork.getHours();
    let minutes = dateWork.getMinutes()
    let min = minutes < 10 ? '0'+ minutes : minutes
    
    // 
    if( day === "Saturday" || day === "Sunday" ){
      error.day = `We are Close, be good weekend on ${day} at : ${hour}h${min}min`
      }
      
      if(error.day === "" && hour < 9 || hour >= 19){
        error.hour = `The service is aviable(from 9 to 19) not on ${hour}h${min}min`
      } 
      // if == true  they stop program & return ERROR_MESSAGE on pages
      return res.render('errCountdown', { error, dateWork : dateParser(dateWork) })  

}
