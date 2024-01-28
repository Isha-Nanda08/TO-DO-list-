const todoList =[{
    name:'make dinner',
    date:'2022-12-22'
    },
    {name:'wash dishes',
    date:'2024-1-14'}];
// let todo;
// let html;
showList();
function showList(){
    let todoListHTML='' ;
    // let name;
    // let date;
    todoList.forEach((todoObject)=>{
        // const todoObject=todoList[index];
    const name=todoObject.name;
    const date=todoObject.date;
    const html=`<div>
    ${name}</div>
    <div> ${date}</div>
    <button class="delete js-delete">Delete</button>
    </div>`;
    // console.log(todo);
    // let con=document.querySelector();
    todoListHTML+=html;})

console.log(todoListHTML);
document.querySelector('.show-list').innerHTML=todoListHTML;

document.querySelectorAll('.js-delete').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
        todoList.splice(index,1);
        showList();
    })
})

}
// showList();
// let toDoname;
// let name;
// let toDodate;

document.querySelector('.js-add').addEventListener('click',()=>{
    addTodo();
})

function addTodo() {
    const toDoname=document.querySelector('.js-input-todo');
    const toDodate=document.querySelector('.js-date-todo');
    const name=toDoname.value;
    const date=toDodate.value;
    todoList.push({name,date});
    // console.log(todoList);
    toDoname.value='';
    toDodate.value='';
    showList();
}