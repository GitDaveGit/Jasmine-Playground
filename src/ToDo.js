
function ToDo(){
	this.todo = [];
}

ToDo.prototype.addTodo = function(item){
	this.todo.push(item);
};

ToDo.prototype.getItems = function(){
	return this.todo;
};

ToDo.prototype.markComplete = function(id){
	this.todo.find(item => item.id == id).complete = true;
};

ToDo.prototype.delete = function(id){
	this.todo = this.todo.filter(item => item.id !== id);
};



function DomManipulation(){
}

DomManipulation.prototype.init = function(){
  const form = document.createElement('form');
  const input = document.createElement('input')
  const ul = document.createElement('ul')
  input.id = "AddItemInput"
  form.id="addItemForm"
  form.appendChild(input);
  return {
    form, ul
  };
};

DomManipulation.prototype.displayItem = function(item){
	const li = document.createElement('li');
	li.innerText = item.title;
	return li;
};