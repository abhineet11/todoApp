window.onload = () => {
    document.getElementById('add').addEventListener('click', () => {
        var value = document.getElementById('item').value;
        if(value) {
            addItemTodo(value);
            document.getElementById('item').value = '';
        }
    })
}

function removeItem(e) {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function completeItem(e) {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
    console.log(target)
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0])
}

function addItemTodo(text) {
    console.log(text);
    var list = document.getElementById('todo')

    var item = document.createElement('li');
    item.innerHTML = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    var removeButton = document.createElement('button');
    var removeFont = document.createElement('i');
    removeFont.classList.add('fa','fa-trash','remove');
    removeButton.appendChild(removeFont);

    removeButton.addEventListener('click', removeItem)

    var completeButton = document.createElement('button');
    var completeFont = document.createElement('i');
    completeFont.classList.add('fa','fa-check-circle','complete');
    completeButton.appendChild(completeFont);

    completeButton.addEventListener('click', completeItem)

    buttons.appendChild(removeButton);
    buttons.appendChild(completeButton);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
}