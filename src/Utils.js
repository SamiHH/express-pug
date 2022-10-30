
// format of the date 
const dateParser = (num) => {
    let options = {
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        };
    
        let date = new Date(num).toLocaleDateString("en-US", options);

        return date.toString();
}
module.exports.dateParser = dateParser;
