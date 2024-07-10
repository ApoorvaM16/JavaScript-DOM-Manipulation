const input = document.getElementById('input-task');
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementsByClassName('task-container')[0];


// Creating DOM elements

addTask.addEventListener('click',function(){
    if(input.value === ""){
        alert("Please Enter a Task to continue...")
    }
    else{
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${input.value}`;
    task.appendChild(li);

    // creating check button
    checkButton = document.createElement('button');
    checkButton.classList.add('checkButton');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>' 
    task.appendChild(checkButton);

    // creating delete button
    deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>' 
    task.appendChild(deleteButton);

    
    taskContainer.appendChild(task);
    input.value = "";

    checkButton.addEventListener('click',()=>{
        checkButton.parentElement.style.textDecoration ='line-through';
    });
    
    deleteButton.addEventListener('click',(e)=>{
        e.target.parentElement.parentElement.remove();
    })
    
        
}
})

