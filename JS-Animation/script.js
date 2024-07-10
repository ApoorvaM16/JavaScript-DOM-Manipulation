let question = document.getElementById('button1');
let answer = document.getElementById('answer');
let cancel = document.getElementById('cancel');

question.addEventListener('click', function(){
    answer.style.display = 'block';
})

cancel.addEventListener('click',()=>{
    answer.style.display = 'none';
})

window.addEventListener('click', (e)=>{
   if(e.target === answer){
        answer.style.display = 'none';
    }
})