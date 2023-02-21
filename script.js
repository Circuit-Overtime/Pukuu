//localStorage.setItem("currentSession", countS);

$(document).ready(function(){
  var countS = 1;
  $("#session").html(countS);
  var countB = 0;
  $("#break").html(countB);
  var pos = "Hey!";
  var countLama;
  var posLama;
  var count;
  $("#stats").html(pos);
  var clock = $(".timer").FlipClock(0, {
    countdown: true,
    clockFace: 'MinuteCounter',
    autoStart: false,
    callbacks: {
      interval: function(){
        if (clock.getTime() == 0){

    
          if(defaultClkType != "timer")
          {
            document.getElementById("logo").style.top = "-12.5%";
            document.getElementById("clock_pulsing_small").style.top = "5px";
            document.getElementById("alarm").setAttribute("src", "./alarm_src/alarm_1.mp3");
            document.getElementById("alarm").play();
            document.getElementById("clock_pulsing").style.top = "-190%";
            document.getElementById("clock_pulsing").style.opacity = "0";
            clock.setTime(0);
            document.getElementById("music").pause();
            document.getElementById("music").currentTime = 0;
            clock.stop();
            document.getElementById("alarm").addEventListener('ended', function() {
              this.currentTime = 0;
              this.play();
          }, false);


            document.getElementById("clock_pulsing_small").addEventListener("click",() => {
              clock.stop();
              pos = "Hey!";
              clock.setTime(0);
              $("#stats").html(pos);
              document.getElementById("logo").style.top = "2.5%";
              document.getElementById("alarm").pause();
              document.getElementById("alarm").currentTime = 0;
              document.getElementById("clock_pulsing").style.top = "-190%";
              document.getElementById("clock_pulsing").style.opacity = "0";

              document.getElementById("clock_pulsing_small").style.top = "-75px";

              document.getElementById("music").pause();
              document.getElementById("music").currentTime = 0;
              document.getElementById("navBarT").style.top = "-50%";
            })


          }
          else
          {

          
          if (pos == "Best Of Luck"){
            document.getElementById("clock_pulsing_small").style.top = "-75px";
            clock.setTime(count*60);
            console.log("time over"); // message when clock is over
            document.getElementById("alarm").setAttribute("src", "./alarm_src/alarm_1.mp3");
            document.getElementById("alarm").play();
            document.getElementById("clock_pulsing").style.top = "-12%";
            document.getElementById("clock_pulsing").style.opacity = "1";
            clock.setTime(0);
            document.getElementById("music").pause();
            document.getElementById("music").currentTime = 0;
            clock.stop();
            document.getElementById("alarm").addEventListener('ended', function() {
              this.currentTime = 0;
              this.play();
          }, false);

            document.getElementById("clock_pulsing").addEventListener("click",() => {
              clock.stop();
              pos = "Hey!";
              clock.setTime(0);
              $("#stats").html(pos);
              document.getElementById("logo").style.top = "2.5%";
              document.getElementById("alarm").pause();
              document.getElementById("alarm").currentTime = 0;
              document.getElementById("clock_pulsing").style.top = "-190%";
              document.getElementById("clock_pulsing").style.opacity = "0";
              document.getElementById("clock_pulsing_small").style.top = "-75px";
              document.getElementById("music").pause();
              document.getElementById("music").currentTime = 0;
              document.getElementById("navBarT").style.top = "-50%";
            })
          }
            


            
            pos = "Hey!";
            $("#stats").html(pos);
          } 
         
        }        
      }
    }
  })  
  //SESSION
  $("#sessInc").on("click", function(){
    if ($("#session").html() > 0){
      countS = parseInt($("#session").html());
      countS+=1;
      localStorage.setItem("currentSession", countS);
      $("#session").html(countS);
      //clock.setTime(countS*60);
    }
  });
  $("#sessDec").on("click", function(){
    if ($("#session").html() > 1){
      countS = parseInt($("#session").html());
      countS-=1;
      localStorage.setItem("currentSession", countS);
      $("#session").html(countS);
      //clock.setTime(countS*60);
    }
  });



  $("#start").on("click", function(){

    if(clock.getTime()!=0)
    {
      
      document.getElementById("start").style.animationPlayState  = "running";
      
      setTimeout(() => {
        document.getElementById("start").style.animationPlayState  = "paused";
      }, 800);
    }
    else
    {
      if (count != countS || clock.getTime()==0){
        clock.setTime(countS*60); // calculates the clock
        pos="Best Of Luck";
        $("#stats").html(pos);
      } else {
        pos = "Hey!";
        $("#stats").html(pos);
      }
      count = countS;    
      clock.start();    
    }
   
  });
  setInterval(() => {
    
      
      globalThis.min = Math.floor(clock.getTime().time % 60);
      globalThis.sec = Math.floor(clock.getTime().time / 60); 

      if(defaultClkType != "stopclock") 
    {
        if ((document.getElementById("st-sc").innerHTML != "00") || (document.getElementById("st-ms").innerHTML != "000"))
        {   
            document.getElementById("navBarSt").style.top = "110%";
        }
        else
        {
            document.getElementById("navBarSt").style.top = "-50%";
        }
    }
    else
    {
        document.getElementById("navBarSt").style.top = "-50%";
    }

    if(document.getElementById("stats").innerHTML != "Hey!") // timer clock running
    {
        if(defaultClkType != "timer") //another mode working
        {
            if ((document.getElementById("st-sc").innerHTML == "00") || (document.getElementById("st-ms").innerHTML == "000")) //stop watch not working
            {
                document.getElementById("navBarSt").style.top = "-50%";
                document.getElementById("navBarT").style.top = "100%";
                document.getElementById("mn_nav_ct").innerHTML = min;
                document.getElementById("sc_nav_ct").innerHTML = sec;
            }
            else
            {
                document.getElementById("navBarSt").style.top = "50%";
                document.getElementById("navBarT").style.top = "100%";
                document.getElementById("mn_nav_ct").innerHTML = min;
                document.getElementById("sc_nav_ct").innerHTML = sec;
            }
            
        }
        else //inside timer mode
        {
            document.getElementById("navBarSt").style.top = "-50%";
            document.getElementById("navBarT").style.top = "-50%";
        }
    }
      
    }, 100);

  //double pausing problem
  $("#stop").on("click", function(){
    clock.stop();
    countLama = clock.getTime();
    if(countLama == 0)
    {
      document.getElementById("stop").style.animationPlayState  = "running";
      pos = "Hey!";
      setTimeout(() => {
        document.getElementById("stop").style.animationPlayState  = "paused";
      }, 800);
    }
    else
    {
      pos = "Paused...";
      $("#stats").html(pos);
      showResumeBtn();

    
    }
   
});

$("#stop_over").on("click", function(){
  clock.start();
  countLama = clock.getTime();
  pos = "Best Of Luck";
  $("#stats").html(pos);
  hideResumeBtn();

});



  $("#clear").on("click", function(){
    clock.stop();
    pos = "Hey!";
    $("#stats").html(pos);
    clock.setTime(0);
    hideResumeBtn();
    document.getElementById("navBarT").style.top = "-50%";
    document.getElementById("logo").style.top = "2.5%";
    
              pos = "Hey!";
              clock.setTime(0);
              $("#stats").html(pos);
              document.getElementById("alarm").pause();
              document.getElementById("alarm").currentTime = 0;
              document.getElementById("clock_pulsing").style.top = "-190%";
              document.getElementById("clock_pulsing").style.opacity = "0";
              document.getElementById("clock_pulsing_small").style.top = "-75px";
              document.getElementById("music").pause();
              document.getElementById("music").currentTime = 0;
              document.getElementById("navBarT").style.top = "-50%";

  });
});



// =====================================================================================================================================
function hideResumeBtn()
{
  document.getElementById("stop_over").style.opacity = "0";
  document.getElementById("stop_over").style.zIndex = "-2";
}

function showResumeBtn()
{
  document.getElementById("stop_over").style.opacity = "1";
  document.getElementById("stop_over").style.zIndex = "2";
}


// ==========================================================================================================================================
// HIDE NAVBAR ALG 
// document.getElementById("logo").addEventListener("click", () => {

//   if(document.getElementById("stats").innerHTML != "Hey!")
//   {
    

//   document.getElementById("navbar").style.transform = "translateY(0px)";
//       document.getElementById("logo").style.transform = "translateY(0px)";


 
  
// }


  
// });

// let inactivityTime = function () {
//   let time;
//   window.onload = resetTimer;
//   document.onmousemove = resetTimer;
//   document.onkeypress = resetTimer;
//   function logout() {
//     document.getElementById("navbar").style.transform = "translateY(-65px)";
//     document.getElementById("logo").style.transform = "translateY(+20px)";
//   }
//   function resetTimer() {
//     clearTimeout(time);
//     time = setTimeout(logout, 5000)
//   }
// };

setInterval(() => {
  if(document.getElementById("stats").innerHTML == "Hey!")
  {
    // console.log("Stopped")
    document.getElementById("music_range").style.opacity = "0";
    document.getElementById("play_button").style.opacity = "0";
    document.getElementById("pause_button").style.opacity = "0";
    document.getElementById("current_time_unit").style.opacity = "0";
    document.getElementById("total_time_unit").style.opacity = "0";
  }

  else
  {
    // console.log("Stopped")
    document.getElementById("music_range").style.opacity = "1";
    document.getElementById("play_button").style.opacity = "1";
    document.getElementById("pause_button").style.opacity = "1";
    document.getElementById("current_time_unit").style.opacity = "1";
    document.getElementById("total_time_unit").style.opacity = "1";
  }


if(localStorage.getItem("currentSession") == undefined)
{
  localStorage.setItem("currentSession", 1)
}
else
{
  document.getElementById("session").innerHTML = localStorage.getItem("currentSession")
}

}, 500);


