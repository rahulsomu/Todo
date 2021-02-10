let todoItem=document.querySelectorAll('.todo-item');
let todoList=document.querySelector('.todo-list');
// let checked=false;
let todoBtn=document.querySelector('.todo-btn');
let dummy=document.querySelector('.dummy');
let inputField=document.querySelector('.input-field');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ':'+today.getSeconds();





// if(window.localStorage.getItem('todo')){
// // console.log(window.localStorage.getItem('todo'));
// let tmp=window.localStorage.getItem('todo');
// tmp=tmp.split('#');
// console.log(tmp);
todoItem.forEach(item=>{
    console.log(item);
    todoList.insertAdjacentHTML('afterbegin',`
    <div class="todo-item" onclick="test(this)"><p>${item}</p>
    </div>`);
})


function test(item){
// console.log(e);
if(!item.classList.contains('checked')){
    item.classList.add('checked');
    item.style.backgroundColor='#0C7C59';
    
   
    
    // checked=true;
    // console.log('color changed');
}
else{
//    let tmp=window.localStorage.getItem('todo');
//    tmp=tmp.split('#');

//    let str=item.getElementsByTagName('p')[0].innerText;

// let arr=tmp.filter(em=>em!=str.toString());
//    window.localStorage.setItem('todo',arr.join('#'));
item.style.transform='translateX(500px)';
console.log(item.innerText);
item.style.height='0px';
item.innerText='';
item.style.marginBottom='0';
item.style.marginTop='0';

item.style.opacity='0';
item.style.transform='scale(0)';
item.style.padding='0';
// item.remove();
    
    
   

}
}

window.addEventListener('keypress',function(e){
    var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ':'+today.getSeconds();
    
    if(inputField.value!=''){
        if(e.keyCode==13){
            // dummy.classList.add('hide');
            todoList.insertAdjacentHTML('afterbegin',`
            <div class="todo-item" onclick="test(this)"><p> ${inputField.value}</p><p class='time'>${time}</p>
            </div>`);
            inputField.value='';
        }

    }
    


})

todoBtn.addEventListener('click',function(){
    var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ':'+today.getSeconds();
   

    

    todoBtn.classList.toggle('rotate');
    if(inputField.value!=""){
        // dummy.classList.add('hide');
        todoList.insertAdjacentHTML('afterbegin',`
        <div class="todo-item" onclick="test(this)"><p>${inputField.value}</p><p class='time'>${time}</p>
        </div>`);
       
        // if(window.localStorage.getItem('todo')){
        //     let tmp=window.localStorage.getItem('todo');
        //     tmp=tmp+'#'+inputField.value;
        //     window.localStorage.setItem('todo',tmp);
        //     console.log(tmp);
    
        // }
        // else{
        //     window.localStorage.setItem('todo',inputField.value);
    
            
        // }
        inputField.value='';


    }
   
   
   

})






