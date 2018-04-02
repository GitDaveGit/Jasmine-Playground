describe('Testing ToDo.js functionality:', ()=>{

	let todo, item1, item2, item3;

	beforeEach(function(){
		todo = new ToDo();

		item1 = { id: 1, title: "get milk", complete: false };
		item2 = { id: 2, title: "get eggs", complete: false };
		item3 = { id: 3, title: "get cheese", complete: false };

		todo.addItem(item1);
		todo.addItem(item2);

	});

	// C R E A T E

	it('Should be able to add items', ()=>{
		spyOn(todo, 'getItems').and.callThrough();

		expect(todo.getItems().length).toBe(2);

		expect(todo.getItems().find(item => item.id == 1).id).toEqual(1);
		expect(todo.getItems().find(item => item.id == 1).title).toEqual("get milk");
		expect(todo.getItems().find(item => item.id == 1).complete).toEqual(false);

		expect(todo.getItems().find(item => item.id == 2).id).toBe(2);
		expect(todo.getItems().find(item => item.id == 2).title).toBe("get eggs");
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(false);

		expect(todo.getItems()).toContain(item1);
		expect(todo.getItems()).toContain(item2);

		expect(todo.getItems()).not.toContain(item3);

		expect(todo.getItems).toHaveBeenCalled();
	});

	it('Should not add a duplicate item', function(){
		spyOn(todo, 'addItem').and.callThrough();

		dup_item1 = { id: 1, title: "get ready to rock and roll", complete: false };
		let rc = todo.addItem(dup_item1);
		expect(rc).toEqual(todo.ERROR_ITEM_ALREADY_EXISTS);

		expect(todo.addItem).toHaveBeenCalled();
		expect(todo.addItem).toHaveBeenCalledWith(dup_item1);
		expect(todo.addItem).not.toHaveBeenCalledWith(undefined);
	});

	it('Should not add an item without an id', function(){
		item = { something: 1, somethingElse: "whatever" };
		let rc = todo.addItem(item);
		expect(rc).toEqual(todo.ERROR_INVALID_ITEM_ID); 
	});


	// R E A D 

	// U P D A T E
	it('Should be able to mark an item complete', ()=>{
		expect(todo.getItems().find(item => item.id == 1).complete).toBe(false);
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(false);

		todo.markComplete(2);

		expect(todo.getItems().find(item => item.id == 1).complete).toBe(false);
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(true);
	});


	// D E L E T E

	it('Should be able to delete an item', ()=>{
		expect(todo.getItems().length).toBe(2);

		todo.deleteItemById(2);
		expect(todo.getItems().length).toBe(1);
		expect(todo.getItems()[0].id).toBe(1);

		todo.deleteItemById(55);
	});


	// O T H E R 

	it('Should throw exception when appropriate', ()=>{
		expect(function(){ todo.markComplete(1);  }).not.toThrow();
		expect(function(){ todo.markComplete(55); }).toThrow();
		expect(function(){ todo.markComplete(55); }).toThrowError(TypeError);
	});

});


