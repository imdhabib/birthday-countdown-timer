const birth_daydate="6 May 2022"

const daysDiv =document.getElementById("days");
const hoursDiv =document.getElementById("hours");
const minsDiv =document.getElementById("mins");
const secDiv =document.getElementById("sec");

function countdown(){
    const birthday =new Date(birth_daydate);
    const currentday= new Date();

    const totaltime=(birthday- currentday)/1000;
    const days =Math.floor(totaltime /3600 /24);
    const hours =Math.floor(totaltime/3600) %24;
    const mins =Math.floor(totaltime/60) % 60; 
    const sec=Math.floor(totaltime)%60;

    daysDiv.innerText=days;
    hoursDiv.innerText=hours;
    minsDiv.innerText=mins;
    secDiv.innerText=sec;

    console.log(days,hours,mins,sec);
}
countdown();
setInterval(countdown,1000);



