const myLabel = document.getElementById("myLabel");
const myLabel1 = document.getElementById("myLabel1");

update();//Call the update function
setInterval(update, 1000);//To repeat time continously like how time moves continously

update1();//Call the update1 function
setInterval(update1, 1000);//To repeat date continously like how date moves continously

//A nested function
function update(){//This function is to update time that is display clock time continously
    let date = new Date();//to create a date object
    myLabel.innerHTML = formatTime(date);//To place the time in a html document

    function formatTime(){//This function will format the time like to get the hours, minutes, seconds and to add am and pm to the time
        let hours = date.getHours();//get the hour in your system
        let minutes = date.getMinutes();//get the minuutes in your system
        let seconds = date.getSeconds();//get the seconds in your system
        let amOrpm = hours >= 12 ? "pm" : "am";//To add am and pm to the time
    
        hours = (hours % 12) || 12;//covert time from military time to standard time

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
    
        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }
    function formatZeroes(time){//This function is to add zero to the hours minutes and seconds if the numbers are single
        time = time.toString();//This toString() method return a string
        return time.length < 2 ? "0" + time : time;//if hours and minutes and seconds are in a single number it will add zero to it
    }
}

//A nested function
function update1(){
    let date1 = new Date();
    myLabel1.innerHTML = formatDate(date1);//To place the date in a html document

    function formatDate(){//This function will format the date like to get the day of the month, month, year.
        let day = date1.getDate();
        let month = date1.getMonth() + 1;
        let year = date1.getFullYear();

        day = formatZeroes1(day);
        month = formatZeroes1(month);
        year = formatZeroes1(year);
        
        return `${day}/${month}/${year}`;
    }

    function formatZeroes1(time){//This function is to add zero to the day of the month, month and year if the numbers are single
        time = time.toString();//This toString() method return a string
        return time.length < 2 ? "0" + time : time;//if day of the month and month and year are in a single number it will add zero to it
    }

}

