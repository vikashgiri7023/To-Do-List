const container=document.querySelector('.todo-container');
const input=document.querySelector('#input');
const button=document.getElementById('addbutton');
const text=document.querySelector(".text");

function addTask() {
  const newTask=document.createElement("li");
  const deleteButton=document.createElement('button');
  newTask.textContent=input.value;
  newTask.className='todo-item';
  deleteButton.textContent='Delete';
  deleteButton.className='delete-button';
  newTask.appendChild(deleteButton);
  text.appendChild(newTask);
  deleteButton.addEventListener('click',()=> {
    newTask.remove();
  });
  input.value='';
}

button.addEventListener('click',()=> {
  if(input.value.trim().length===0) {
    alert("You must write something in the to-do");
  } else {
    addTask();
  }
});
