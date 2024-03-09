var rand=Math.ceil(Math.random()*6);
if(rand===1) document.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice1.png");
if(rand===2) document.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice2.png");
if(rand===3) document.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice3.png");
if(rand===4) document.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice4.png");
if(rand===5) document.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice5.png");
if(rand===6) document.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice6.png");
// 
// 
var randi=Math.ceil(Math.random()*6);
if(randi===1) document.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice1.png");
if(randi===2) document.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice2.png");
if(randi===3) document.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice3.png");
if(randi===4) document.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice4.png");
if(randi===5) document.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice5.png");
if(randi===6) document.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice6.png");
// 
// 
if(rand>randi){ 
    document.lastElementChild.querySelector("h1").innerHTML="Player1 is the winner!";
    document.lastElementChild.querySelector("p.aftertext").textContent="Refresh to play";
}
if(randi>rand) {
    document.lastElementChild.querySelector("h1").innerHTML="Player2 is the winner!";
    document.lastElementChild.querySelector("p.aftertext").textContent="Refresh to play";

}
if(rand===randi) document.lastElementChild.querySelector("h1").textContent="Draw! Refresh to play";