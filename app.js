let todoItem = document.querySelectorAll('.todo-item');
let todoList = document.querySelector('.todo-list');

let todoBtn = document.querySelector('.todo-btn');
let dummy = document.querySelector('.dummy');
let inputField = document.querySelector('.input-field');
var today = new Date();
var time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var complete = document.querySelector('.time');
let togglebtn = document.querySelector('.toggle-btn');
let todoContainer = document.querySelector('.todo-container');
let body = document.querySelector('body');
let theme = document.querySelector('.theme');

todoItem.forEach(item => {
  console.log(item);
  todoList.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="todo-item" onclick="test(this)"><p>${item}</p>
    </div>`
  );
});

function test(item) {
  if (!item.classList.contains('checked')) {
    item.classList.add('checked');
    item.style.backgroundColor = '#0C7C59';

    console.log(time);
  } else {
    item.style.transform = 'translateX(500px)';
    console.log(item.innerText);
    item.style.height = '0px';
    item.innerText = '';
    item.style.marginBottom = '0';
    item.style.marginTop = '0';

    item.style.opacity = '0';
    item.style.transform = 'scale(0)';
    item.style.padding = '0';
  }
}

window.addEventListener('keypress', function (e) {
  var today = new Date();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  if (inputField.value != '') {
    if (e.keyCode == 13) {
      todoList.insertAdjacentHTML(
        'beforeend',
        `
            <div class="todo-item" onclick="test(this)"><p> ${inputField.value}</p><p class='time'>${time}</p>
            </div>`
      );
      inputField.value = '';
    }
  }
});

todoBtn.addEventListener('click', function () {
  var today = new Date();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  todoBtn.classList.toggle('rotate');
  if (inputField.value != '') {
    todoList.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="todo-item" onclick="test(this)"><p>${inputField.value}</p><p class='time'>${time}</p>
        </div>`
    );

    inputField.value = '';
  }
});

togglebtn.addEventListener('click', () => {
  todoContainer.classList.toggle('light');
  if (todoContainer.classList.contains('light')) {
    theme.innerHTML = '<i class="fas fa-moon"></i>';
    body.style.backgroundColor = '#0C7C59';
    theme.style.color = '#F383A6';
  } else {
    theme.innerHTML = '<i class="fas fa-sun"></i>';
    body.style.backgroundColor = '#BAC1B8';
    theme.style.color = 'rgba(255, 255, 255, 0.329)';
  }
});
