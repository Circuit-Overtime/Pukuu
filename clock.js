window.onload
{
    localStorage.setItem("clock_view_mode", "dark");
}
const deg = 6;
const hr = document.getElementById("hr")
const mn = document.getElementById("mn")
const sc = document.getElementById("sc")

setInterval(() => {
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`
mn.style.transform = `rotateZ(${mm}deg)`
sc.style.transform = `rotateZ(${ss}deg)`
}, 100)

setInterval(() => {
if(localStorage.getItem("clock_view_mode") == "light")
{
    
    // document.documentElement.style.setProperty('--background_before', 'linear-gradient(45deg, rgb(0, 60, 255), #00ff73 50%, #00ff80 50%, #00ae09)');
    // document.documentElement.style.setProperty('--background_after', 'linear-gradient(160deg, #ff9100, #ff4400 50%, transparent 50%, transparent)');
    document.documentElement.style.setProperty('--hour_hand', 'rgb(8, 0, 255)');

    

}
if(localStorage.getItem("clock_view_mode") == "dark")
{
        // document.documentElement.style.setProperty('--background_before', 'linear-gradient(45deg, #004766, #004766 50%, #0092d1 50%, #0092d1)');
        // document.documentElement.style.setProperty('--background_after', 'linear-gradient(160deg, #012433, #012433 50%, transparent 50%, transparent)');
        document.documentElement.style.setProperty('--hour_hand', '#00ffb3');
}
}, 100)


document.getElementById("clock").addEventListener("click", () => {

    if(localStorage.getItem("clock_view_mode") == "dark")
    {   
       
        document.getElementById("clock").style.transform = "translateY(550px)";
        document.getElementById("box").style.opacity = "0";
        // document.documentElement.style.setProperty('--background_before', 'linear-gradient(45deg, #e91e63, #e91e63 50%, #ffc107 50%, #ffc107);');
        // document.documentElement.style.setProperty('--background_after', 'linear-gradient(160deg, #03a9f4, #03a9f4 50%, transparent 50%, transparent);');
        document.getElementById("clock").style.transform = "translateY(0px)";
        document.getElementById("box").style.opacity = "1";
        localStorage.setItem("clock_view_mode", "light");
   

    }

    else if(localStorage.getItem("clock_view_mode") == "light")
    {
       
        localStorage.setItem("clock_view_mode", "dark");
        document.getElementById("box").style.opacity = "0";
        document.getElementById("clock").style.transform = "translateY(550px)";
        // document.documentElement.style.setProperty('--background_before', 'linear-gradient(45deg, #004766, #004766 50%, #0092d1 50%, #0092d1);');
        // document.documentElement.style.setProperty('--background_after', 'linear-gradient(160deg, #012433, #012433 50%, transparent 50%, transparent);');
        document.getElementById("clock").style.transform = "translateY(0px)";
        document.getElementById("box").style.opacity = "1";
     

    }
    

})