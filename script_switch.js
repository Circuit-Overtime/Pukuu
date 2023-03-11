
var root = document.querySelector(":root");
var curr_state = "Timer";
background_lst = ["back_0", "back_1", "back_2", "back_3","back_5"];
root.style.setProperty('--background', "url('" + "back_src/" + localStorage.getItem("defBgImg") + ".jpg"+"')")

document.getElementById("imgChange").addEventListener("click", () => {
    const background_ind = Math.floor(Math.random() * background_lst.length);
    background  = background_lst[background_ind];
    root.style.setProperty('--background', "url('" + "back_src/" + background + ".jpg"+"')")
    localStorage.setItem("defBgImg",  background);
})


document.getElementById("music_range").addEventListener("change", (self) => {
    updated_val = (((document.getElementById("music_range").value) / 100) * 100) -3 + "%";
    document.getElementById("musiczone").style.width = updated_val;
    document.getElementById("music").currentTime = document.getElementById("music_range").value;

    console.log(updated_val)
})
setTimeout(() => {
    audio_length = (document.getElementById("music").duration);
    
    setInterval(() => {
       
        document.getElementById("music_range").setAttribute("max", audio_length); 
        document.getElementById("current_time_unit").innerHTML = Math.floor(document.getElementById("music").currentTime / 60)+ ":" + Math.floor(document.getElementById("music").currentTime % 60);
        document.getElementById("total_time_unit").innerHTML = Math.floor(document.getElementById("music").duration / 60) + ":" + Math.floor(document.getElementById("music").duration % 60);
        
        if ((document.getElementById("music").paused ==  true) && (document.getElementById("stats").innerHTML != "Hey!"))
        {
            document.getElementById("play_button").style.opacity = "1";
            document.getElementById("play_button").style.pointerEvents = "all";
            
            document.getElementById("pause_button").style.opacity = "0";
            document.getElementById("pause_button").style.pointerEvents = "none";
        }
       else if ((document.getElementById("music").paused ==  false) && (document.getElementById("stats").innerHTML != "Hey!"))
        {
            document.getElementById("play_button").style.opacity = "0";
            document.getElementById("play_button").style.pointerEvents = "none";
            
            document.getElementById("pause_button").style.opacity = "1";
            document.getElementById("pause_button").style.pointerEvents = "all";
        }
        
      
    }, 100);

 

}, 100);

function play_aud()
{
    document.getElementById("music").play();
}
function pause_aud()
{
    document.getElementById("music").pause();
}





document.getElementById("normaltime").addEventListener("click", () => {
   document.getElementById("normaltime").style.color = "#fff";
   localStorage.setItem("defaultClkType" , "clock");
   document.getElementById("stwatch").style.color = "#666666";
   document.getElementById("clocktimer").style.color = "#666666";


})

document.getElementById("stwatch").addEventListener("click", () => {
    document.getElementById("stwatch").style.color = "#fff";    
    localStorage.setItem("defaultClkType" , "stopclock");
    document.getElementById("normaltime").style.color = "#666666";
    document.getElementById("clocktimer").style.color = "#666666";
 
 
 })

 document.getElementById("clocktimer").addEventListener("click", () => {
    document.getElementById("clocktimer").style.color = "#fff";
    localStorage.setItem("defaultClkType" , "timer");
    document.getElementById("normaltime").style.color = "#666666";
    document.getElementById("stwatch").style.color = "#666666";
 
 
 })
 
setInterval(() => {
    
  
    if(localStorage.getItem("defaultClkType") == undefined)
{
    localStorage.setItem("defaultClkType" , "clock");
}
else
{
    defaultClkType = localStorage.getItem("defaultClkType");


     if (defaultClkType == "clock")
    {
    document.getElementById("normaltime").style.color = "#fff";
    initiateClock();
   document.getElementById("stwatch").style.color = "#666666";
   document.getElementById("clocktimer").style.color = "#666666";
    }

   else if (defaultClkType == "stopclock")
    {
        document.getElementById("stwatch").style.color = "#fff";    
        initiateStopClock();
        document.getElementById("normaltime").style.color = "#666666";
        document.getElementById("clocktimer").style.color = "#666666";
    }

   else if (defaultClkType == "timer")
    {
    document.getElementById("clocktimer").style.color = "#fff";
    initiateTimer();
    document.getElementById("normaltime").style.color = "#666666";
    document.getElementById("stwatch").style.color = "#666666";
    }  



}
}, 100)


setInterval(() => {
    
    


}, 100);





 


function initiateStopClock()
{
    document.getElementById("stopclockMain").style.display = "flex";

    document.getElementById("pomodoro").style.display = "none";
    document.getElementById("container_layout").style.display = "none";
    

}

function initiateClock()
{
    document.getElementById("stopclockMain").style.display = "none";

    document.getElementById("pomodoro").style.display = "none";
    document.getElementById("container_layout").style.display = "block";
    

}


function initiateTimer()
{
    document.getElementById("stopclockMain").style.display = "none";

    document.getElementById("pomodoro").style.display = "block";
    document.getElementById("container_layout").style.display = "none";
    

}


document.getElementById("navBarSt").addEventListener("click", () => {
    localStorage.setItem("defaultClkType" , "stopclock");
    console.log("click")
})


document.getElementById("lapZone").addEventListener("click", () => {
    document.getElementById("lapZone").classList.toggle("active");
    document.addEventListener("mousedown", (e) => {
        //[enable this on next patch]
        
        // if(e.target != '<div class="lapZone" id="lapZone"></div>')
        // {
        //     if(document.getElementById("lapZone").classList.contains("active"))
        //     {
        //         document.getElementById("lapZone").classList.toggle("active");
        //     }
        // }
    })
})

document.addEventListener("keydown", (e) => {
    
 if(e.key  === "Escape")
 {
    if(document.getElementById("lapZone").classList.contains("active"))
    {
        document.getElementById("lapZone").classList.toggle("active");
    }
 }


})
