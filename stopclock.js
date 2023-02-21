
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 clockDisp = ` ${h} : ${m} : ${s} : ${ms}`;
 setInterval(() => {
    // console.log(clockDisp)
    
 }, 1);
 

}
setInterval(() => {
    displayTimer()
}, 1);
