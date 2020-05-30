

var cursor = true;
        var speed = 500;
        setInterval( function call() {
            if(cursor) {
               
              document.getElementById("cursor").style.opacity = 0;
              cursor = false;
            }else {
              document.getElementById("cursor").style.opacity = 1;
              cursor = true;
            }
          }, speed);

var counter=0;


const menuIcon=document.querySelector('.hamburger-menu');
const navbar=document.querySelector('.nav-links');
 menuIcon.addEventListener('click',() => {
  
navbar.classList.toggle('change');


});

// const skill=document.querySelectorAll('.skills');
// for (let i=0;i<skill.length;i++){
//   skill[i].addEventListener('mouseover',()=> {
//     skill[i].style.backgroundColor = "red";
    
//   })
// }