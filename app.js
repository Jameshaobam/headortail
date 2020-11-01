const btns = document.querySelectorAll('.btn');
let restart_btn = document.querySelector('.restart-btn');
let userSelect = document.querySelector('.players .user-select');
let compSelect = document.querySelector('.players .comp-select');
const winner = document.querySelector('.winner-result');
let  Uscore = document.getElementById('user');
let Cscore = document.getElementById('comp');
let foruser,forcomp,userscore = compscore  = 0;
const img = document.querySelector('.image');

restart_btn.style.display = 'none';

for(let i = 0;i<btns.length;i++){
    btns[i].addEventListener('click',() => {
        console.log(btns[i]);
        let randomchoice = Math.floor(Math.random() * 2);
        let computerPick = Math.floor(Math.random() * 2);
        console.log(randomchoice)
        img.classList.add('flip')
        let userPick;
        if(btns[i].classList.contains('head')){
           userPick = btns[i].innerHTML
           console.log(userPick)
        }
        else{
            userPick = btns[i].innerHTML
            console.log(userPick)
        }
    
    displaySelected(userPick,computerPick);
    score(userPick,computerPick,randomchoice);
    displayRandomImage(randomchoice);

    });
    setInterval(() => {
        img.classList.remove('flip');
    }, 2130);
}

function displaySelected(user,computer) {
      userSelect.innerHTML = user;

      if(computer == 0){
          compSelect.innerHTML = "Tails"
      }
      else{
          compSelect.innerHTML = "Head"
      }
     
      
}
function score(user,computer,random){
   
    if(random === 1){
       foruser = 'Head';
       forcomp = 1;
    }
    else{
        foruser = 'Tails';
        forcomp = 0;
    }
    
    if(user === foruser){
        userscore++;
        console.log('User got');
        Uscore.textContent = userscore;
        userSelect.style.color = 'green';
    }
    else{
        userSelect.style.color = 'red';
    }
    if(computer === forcomp){
        compscore++;
        console.log("Comp got");
        Cscore.textContent = compscore;
        compSelect.style.color = 'green';
    }
    else{
        compSelect.style.color = 'red';
    }
    winnerCheck(userscore,compscore);

}

function winnerCheck(userscore,compscore){
      if(userscore === 10){
          if(compscore === 10){
              console.log('Tie');
              winner.innerHTML = `<h1> It's a Tie </h1>`;
              winner.style.color = 'blue';
              restart();
          }
          else if(compscore < 10){
              console.log('User wins!');
              winner.innerHTML = `<h1> You win!!! </h1>`;
              winner.style.color = 'green';
              restart();
          }
      }
      else if(userscore !== 10 ){
          if(compscore === 10 && userscore < compscore ){
              console.log('Computer wins!')
              winner.innerHTML = `<h1> Computer win!!! </h1>`;
              winner.style.color = 'red';
              restart();
          }
      
    }
}

function restart(){
    for(let i = 0; i < btns.length; i++){
        btns[i].style.display = "none";
    }
    restart_btn.style.display = 'block';

   
}
function displayRandomImage(random){
   if(random === 1){
       img.style.backgroundImage = "url(css/images/head.png)"
   }
   else{
    img.style.backgroundImage = "url(css/images/tail.png)"
   }
}
restart_btn.addEventListener('click',() =>{
    window,location = "index.html";
});

