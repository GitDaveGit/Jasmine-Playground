
function ToDo(){
	this.todo = [];
}


ToDo.prototype.addItem = function(item){
  this.todo.push(item);
};

ToDo.prototype.deleteItemById = function(id){
  this.todo = this.todo.filter(item => item.id !== id);
};


ToDo.prototype.getItems = function(){ 
  return this.todo;
};

ToDo.prototype.getItemById = function(id){
	return this.todo.filter(item => item.id == id);
};

ToDo.prototype.getItemByTitle = function(title){
	return this.todo.filter(item => item.title == title);
};



ToDo.prototype.markIncomplete = function(id){
	this.todo.find(item => item.id == id).complete = false;
};

ToDo.prototype.markComplete = function(id){
  this.todo.find(item => item.id == id).complete = true;
};

ToDo.prototype.hoser = function(){
	return false;
};
