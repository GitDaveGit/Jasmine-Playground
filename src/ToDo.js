
function ToDo(){
	this.todo = [];
}

let ERROR_INVALID_ITEM_ID 		= 1

// C r e a t e

ToDo.prototype.addItem = function(item){
	// JIRA TODO-201: Check for existence of item id
    if (item.id == undefined) {
    	return self.ERROR_INVALID_ITEM_ID;
    }
	this.todo.push(item);
	return true;
};


// R e a d

ToDo.prototype.getItems = function(){ 
  return this.todo;
};

ToDo.prototype.getItemById = function(id){
	return this.todo.filter(item => item.id == id);
};

ToDo.prototype.getItemByTitle = function(title){
	return this.todo.filter(item => item.title == title);
};


// U p d a t e

ToDo.prototype.markIncomplete = function(id){
	this.todo.find(item => item.id == id).complete = false;
};

ToDo.prototype.markComplete = function(id){
  this.todo.find(item => item.id == id).complete = true;
};


// D e l e t e

ToDo.prototype.deleteItemById = function(id){
  this.todo = this.todo.filter(item => item.id !== id);
};



