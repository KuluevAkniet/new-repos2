const currentYear = new Date().getFullYear();

const nextYear =  new Date(`June 6 ${currentYear + 1} 00:00:00`);


function realTime(){
     let time = new Date();
     let getYear = time.getFullYear(); 
     let getMounth = time.getMonth();
     let getHours = time.getHours();
     let getMinutes = time.getMinutes();
     let getSeconds = time.getSeconds();

     console.log("Hello world");
      

     document.getElementById('year').innerHTML = getYear;
     document.getElementById('mounth').innerHTML = getMounth < 10 ? '0' + getMounth : getMounth;
     document.getElementById('hour').innerHTML = getHours < 10 ? '0' + getHours: getHours ;
     document.getElementById('minute').innerHTML = getMinutes;
     document.getElementById('second').innerHTML = getSeconds;
     
}   

realTime();

setInterval(realTime,1000)




function updateCounter(){

const currentTime = new Date();

const diff = nextYear - currentTime; 

const daysleft = Math.floor(diff / 1000 / 60 / 60 /24);

const hoursleft = Math.floor(diff / 1000 / 60 / 60) % 24;

const minutes = Math.floor(diff / 1000 / 60) % 60;

const secondleft = Math.floor(diff / 1000) % 60;

document.getElementById('days').innerHTML = daysleft < 10 ? '0'+ daysleft: daysleft;
document.getElementById('hours').innerHTML = hoursleft ;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = secondleft;


}

updateCounter()


setInterval(() => {
    updateCounter();
},1000);
