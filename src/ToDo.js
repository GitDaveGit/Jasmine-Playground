
function ToDo(){
	this.todo = [];
}

let ERROR_INVALID_ITEM_ID 		= 1
let ERROR_ITEM_ALREADY_EXISTS 	= 2


// C r e a t e

ToDo.prototype.addItem = function(item){
	// JIRA TODO-201: Check for existence of item id
    if (item.id == undefined) {
    	return self.ERROR_INVALID_ITEM_ID;
    }

    // JIRA TODO-213: Check for duplicate item id
	let dup_item = this.getItemById(item.id);
	if (dup_item.length > 0) {
		return self.ERROR_ITEM_ALREADY_EXISTS;
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


ToDo.prototype.deleteCompletedItems = function(){		
// JIRA TODO-239: Delete completed items
	this.todo = this.todo.filter(item => item.complete == false);
};


