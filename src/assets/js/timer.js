const display=document.querySelector(".time"),som=document.getElementById("som"),btnPauseAlarm=document.getElementById("alarm"),buttonTimerRight=document.querySelector(".buttonTimerRight"),buttonTimerLeft=document.querySelector(".buttonTimerLeft"),btnStart=document.querySelector(".time");let whachTime=1e3,defaultTime=30,time=60*defaultTime,running=!1,interval,alarmActive=!0,alarmPaused=!1,boy,timePulse;function toDecrease(){return!running&&defaultTime>=10&&(display.textContent=defaultTime-=5),defaultTime}function increase(){return!running&&defaultTime<=85&&(display.textContent=defaultTime+=5),defaultTime}function start(){boy=setInterval(animationBoy,250),timePulse=setInterval(animationTimer,500),running||(running=!0,time=60*defaultTime+59,watch(),interval=setInterval(watch,whachTime))}function stop(){clearInterval(interval),clearInterval(boy),clearInterval(timePulse),time=0,running=!1}function watch(){if(time>=0){let{minutes:e,seconds:t}=getTimeComponents(time);time>=60?display.textContent=formatTime(e):display.textContent=0}time<=60?(stop(),showAlert()):time--}function getTimeComponents(e){let t=Math.floor(e%7200/60),n=e%60;return console.log(t,n),{minutes:t,seconds:n}}function formatTime(e){return String(e).padStart(1,"0")}function showAlert(){alarmActive&&(som.play(),setTimeout(()=>{let e=document.querySelector(".columnLeft h6");display.innerHTML=defaultTime,e.innerHTML=toy[0],data.cleanTodoData(document.querySelector(".list")),data.getTodoData(document.querySelector(".list")),load()},(Math.ceil(som.duration)+1)*1e3))}function toggleAlarm(){(alarmPaused=!alarmPaused)&&(som.volume=1e-16)}function changeColor(){let e=document.querySelector(".time");time%2==0?e.style.backgroundColor="#ce5454":e.style.backgroundColor="#de2e2e"}buttonTimerLeft.addEventListener("click",toDecrease),buttonTimerRight.addEventListener("click",increase),btnStart.addEventListener("click",start),btnPauseAlarm.addEventListener("click",toggleAlarm);