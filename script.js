let start=document.getElementById("Start")
let splashscreen=document.getElementById("splashscreen")
let playscreen=document.getElementById("playscreen")
let gameapp=document.getElementById("gameapp")
let two=document.getElementById("two")
let scoreBox=document.getElementById("scoreBox")
let lifeBox=document.getElementById("lifeBox")
let over=document.getElementById("over")



let score=0;
let life=5;
let sound=document.createElement("audio")
sound.src="mySound.mp3"
start.addEventListener("click",()=>{
   
    splashscreen.classList.add('hidden')
    playscreen.classList.remove('hidden' )
     gameapp.classList.add("color1")

    let main=setInterval(function(){
        let baloon=document.createElement("img")
        baloon.src="baloon.png"
        baloon.classList.add('baloon')
        baloon.style.left = Math.random() * gameapp.offsetWidth + 'px';
        playscreen.appendChild(baloon);
        


          baloon.onclick=function(){
               score+=5;
          sound.currentTime = 0;
          sound.play()
          baloon.remove()
          scoreBox.innerText=score
           clearInterval(set)
          }

          let set=setInterval(function (){
           baloon.style.bottom= parseFloat(baloon.style.bottom ||0) +2+"px"
           if(baloon.offsetTop <= -baloon.offsetHeight){
               clearInterval(set)
            baloon.remove();
          
            life-=1
            lifeBox.innerText = life;
           } 
           if(life==0){
            baloon.remove()
            playscreen.classList.add("hidden")
            over.classList.remove("hidden")
            clearInterval(main)
           }
           
          
          },20 )
          console.log(set);

    },1000)


   
  


})