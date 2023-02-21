let [milliseconds,seconds,minutes,hours] = [000,00,00,00];
let int = null;
document.getElementById("start_sc").addEventListener("click", ()=>{
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    setInterval(() => {
        mili_per = Math.round(milliseconds / 1000) * 100;
        document.documentElement.style.setProperty('--milisec_val', mili_per);

        sec_per = Math.fround(seconds / 60) * 100;
        document.documentElement.style.setProperty('--sec_val', sec_per);

        min_per = Math.fround(minutes / 60) * 100;
        document.documentElement.style.setProperty('--min_val', min_per);

        hour_per = Math.fround(hours / 60) * 100;
        document.documentElement.style.setProperty('--hour_val', hour_per);
    }, 10);
});
document.getElementById("stop_sc").addEventListener("click", ()=>{
    clearInterval(int);
    

});
document.getElementById("reset_sc").addEventListener("click", ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [00,00,00,000];
    document.getElementById("st-hr").innerHTML = "00";
    document.getElementById("st-mn").innerHTML = "00";
    document.getElementById("st-sc").innerHTML = "00";
    document.getElementById("st-ms").innerHTML = "000";

    document.getElementById("hr_nav").innerHTML = "00";
    document.getElementById("min_nav").innerHTML = "00";
    document.getElementById("sc_nav").innerHTML = "00";
    document.getElementById("ms_nav").innerHTML =  "000";
    document.getElementById("lapZone").innerHTML = "";
    if(document.getElementById("lapZone").classList.contains("active"))
    {
        document.getElementById("lapZone").classList.toggle("active");
    }


  
   

});
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
 let h = hours < 10 ? "0"+ hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
 
 document.getElementById("st-hr").innerHTML = h;
    document.getElementById("st-mn").innerHTML = m;
    document.getElementById("st-sc").innerHTML = s;
    document.getElementById("st-ms").innerHTML = ms;
    
     
    document.getElementById("hr_nav").innerHTML = h;
    document.getElementById("min_nav").innerHTML = m;
    document.getElementById("sc_nav").innerHTML = s;
    document.getElementById("ms_nav").innerHTML = ms;
    
    // console.log(h , m , s ,ms)


 
}


document.getElementById("lap_btn").addEventListener("click", () => {
   let h = document.getElementById("st-hr").innerHTML; 
   let m = document.getElementById("st-mn").innerHTML; 
    let s = document.getElementById("st-sc").innerHTML; 
    let ms = document.getElementById("st-ms").innerHTML; 
    console.log(h + ":" + m + ":" + s + ":" + ms);
    lap_tag  = `<p class="lapTimings">${h} : ${m} : ${s} : ${ms}</p>`
    document.getElementById("lapZone").innerHTML += lap_tag;
})