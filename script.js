
let reddiv = document.getElementById('red');
let greendiv = document.getElementById('green');
let yellowdiv = document.getElementById('yellow');
let uchoicediv = document.getElementById('uchoice');
let cchoicediv = document.getElementById('cchoice');
let result = document.getElementById('result');
let uresult = document.getElementById('uresult');
let cresult = document.getElementById('cresult');

let redtext = document.getElementById('rtext');
let greentext = document.getElementById('gtext');
let yellowtext = document.getElementById('ytext');

let urslt = 0;
let crslt = 0;
let round = 0;

// rock

reddiv.onclick = () => {

  uchoicediv.innerHTML = `<img src='./images/rock.png' style="height: 200px;width: 200px">`

  uchoicediv.style.color='brown';

  let computerchoice = Math.ceil(Math.random()*3);

  round ++;
  result.innerText = `Round : ${round}`;

  if (round == 10) {
    if (urslt > crslt) {
      result.innerText = 'You Win';
      result.style.color='green';
    }else if(crslt > urslt) {
      result.innerText = 'You Lose';
      result.style.color='red';
    }else {
      result.innerText = 'Tie';
      result.style.color='grey';
    }
  }else if(round === 11){
    window.location.reload();
    result.innerText = `New Game`;
  }

  if (computerchoice == 1) {
    computerchoice = 'ROCK';
    cchoicediv.innerHTML=`<img src='./images/rock.png' style="height: 200px;width: 200px">`
  }else if (computerchoice == 2) {
    computerchoice = 'PAPER';
    cchoicediv.style.color='green';
    cchoicediv.innerHTML=`<img src='./images/paper.png' style="height: 200px;width: 200px">`
  }else {
    computerchoice = 'SCISSOR';
    cchoicediv.style.color='yellow';
    cchoicediv.innerHTML=`<img src='./images/scissor.png' style="height: 200px;width:200px">`
  }

  if (computerchoice === 'SCISSOR'){
    urslt ++;
    uresult.innerText = `Your Score : ${urslt}`;
  }else if(computerchoice === 'PAPER'){
    crslt ++;
    cresult.innerText = `Computer : ${crslt}`;
  }else {
    if (urslt > 0) {
      urslt --;
      uresult.innerText = `Your Score : ${urslt}`;
    }
    if(crslt > 0){
      crslt --;
      cresult.innerText = `Computer : ${crslt}`;
    }
  }
}

// paper

greendiv.onclick = () => {

  uchoicediv.innerHTML = `<img src='./images/paper.png' style='height:200px;width:200px'>`

  uchoicediv.style.color='green';

  let computerchoice = Math.ceil(Math.random()*3);

  round ++;
  result.innerText = `Round : ${round}`;

  if (round == 10) {
    if (urslt > crslt) {
      result.innerText = 'You Win';
      result.style.color='green';
    }else if(crslt > urslt) {
      result.innerText = 'You Lose';
      result.style.color='red';
    }else {
      result.innerText = 'Tie';
      result.style.color='grey';
    }
  }else if(round === 11){
    window.location.reload();
    result.innerText = `New Game`;
  }

  if (computerchoice == 1) {
    computerchoice = 'ROCK';
    cchoicediv.innerHTML=`<img src='./images/rock.png' style="height: 200px;width: 200px">`
  }else if (computerchoice == 2) {
    computerchoice = 'PAPER';
    cchoicediv.style.color='green';
    cchoicediv.innerHTML=`<img src='./images/paper.png' style="height: 200px;width: 200px">`
  }else {
    computerchoice = 'SCISSOR';
    cchoicediv.style.color='yellow';
    cchoicediv.innerHTML=`<img src='./images/scissor.png' style="height: 200px;width: 200px">`
  }

  if (computerchoice === 'ROCK') {
    urslt ++;
    uresult.innerText = `Your Score : ${urslt}`;
  }else if(computerchoice === 'SCISSOR'){
    crslt ++;
    cresult.innerText = `Computer : ${crslt}`;
  }else {
    if (urslt > 0) {
      urslt --;
      uresult.innerText = `Your Score : ${urslt}`;
    }
    if(crslt > 0){
      crslt --;
      cresult.innerText = `Computer : ${crslt}`;
    }
  }  
}

// scissor

yellowdiv.onclick = () => {

  uchoicediv.innerHTML = `<img src='./images/scissor.png' style='height:200px;width:200px'>`

  uchoicediv.style.color='yellow';

  let computerchoice = Math.ceil(Math.random()*3);

  round ++;
  result.innerText = `Round : ${round}`;

  if (round == 10) {
    if (urslt > crslt) {
      result.innerText = 'You Win';
      result.style.color='green';
    }else if(crslt > urslt) {
      result.innerText = 'You Lose';
      result.style.color='red';
    }else {
      result.innerText = 'Tie';
      result.style.color='grey';
    }
  }else if(round === 11){
    window.location.reload();
    result.innerText = `New Game`;
  }

  if (computerchoice == 1) {
    computerchoice = 'ROCK';
    cchoicediv.innerHTML=`<img src='./images/rock.png' style="height: 200px;width: 200px">`
  }else if (computerchoice == 2) {
    computerchoice = 'PAPER';
    cchoicediv.style.color='green';
    cchoicediv.innerHTML=`<img src='./images/paper.png' style="height: 200px;width: 200px">`
  }else {
    computerchoice = 'SCISSOR';
    cchoicediv.style.color='yellow';
    cchoicediv.innerHTML=`<img src='./images/scissor.png' style="height: 200px;width: 200px">`
  }

  if (computerchoice === 'PAPER') {
    urslt ++;
    uresult.innerText = `Your Score : ${urslt}`;
  }else if(computerchoice === 'ROCK'){
    crslt ++;
    cresult.innerText = `Computer : ${crslt}`;
  }else {
    if (urslt > 0) {
      urslt --;
      uresult.innerText = `Your Score : ${urslt}`;
    }
    if(crslt > 0){
      crslt --;
      cresult.innerText = `Computer : ${crslt}`;
    }
  }
}

let button = document.getElementById('btn');

button.onclick = () => {
  uchoicediv.innerText="Your Choice :";
  cchoicediv.innerText="Computer Choice :";
  window.location.reload();
}

if (round == 10) {
  if (urslt > crslt) {
    result.innerText = 'You Win';
  }else if(crslt > urslt) {
    result.innerText = 'You Lose';
  }else {
    result.innerText = 'Tie';
  }
}
