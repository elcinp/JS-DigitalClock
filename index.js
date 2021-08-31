function currentTime(){
    const today = new Date();
    let hours = today.getHours(); // get hours
    let minutes = today.getMinutes(); // get minutes
    let seconds = today.getSeconds(); // get seconds
    let midday = (hours>=12) ? "PM" : "AM" // assigning AM/PM
    hours = (hours == 0) ? 12 : ((hours>12) ? (hours - 12): hours); // assigning hour in 12-hour format
    hours = checkTime(hours)
    minutes = checkTime(minutes);
    seconds = checkTime(seconds)
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" +seconds + "  " + midday

    let months = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let curWeekDay = days[today.getDay()]; // get day
    let curDay = today.getDate(); //get date
    let curMonth = months[today.getMonth()]; // get month
    let curYear = today.getFullYear(); // get year
    document.getElementById("date").innerHTML = curWeekDay + "," + curDay + " " + curMonth + " " + curYear ; // get full date

    setTimeout(currentTime,1000); // setting timer
}

function checkTime(i){
    if(i<10) {
        i="0" + i  //add zero in front of numbers<10
    }
    return i;
}