describe('Testing ToDo.js functionality:', ()=>{

	let todo, item1, item2;

	beforeEach(function(){
		todo = new ToDo();

		item1 = { id: 1, title: "get milk", complete: false };
		item2 = { id: 2, title: "get eggs", complete: false };

		todo.addItem(item1);
		todo.addItem(item2);

	});


	it('Should be able to add items', ()=>{
		expect(todo.getItems().length).toBe(2);

		expect(todo.getItems().find(item => item.id == 1).id).toEqual(1);
		expect(todo.getItems().find(item => item.id == 1).title).toEqual("get milk");
		expect(todo.getItems().find(item => item.id == 1).complete).toEqual(false);

		expect(todo.getItems().find(item => item.id == 2).id).toBe(2);
		expect(todo.getItems().find(item => item.id == 2).title).toBe("get eggs");
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(false);
	});

	it('Should not add a duplicate item', function(){
		dup_item1 = { id: 1, title: "get milk", complete: false };
		let rc = todo.addItem(dup_item1);
		expect(rc).toEqual(todo.ERROR_ITEM_ALREADY_EXISTS);
	});


	it('Should be able to delete an item', ()=>{
		expect(todo.getItems().length).toBe(2);

		todo.deleteItemById(2);
		expect(todo.getItems().length).toBe(1);
		expect(todo.getItems()[0].id).toBe(1);

		todo.deleteItemById(55);
	});


	it('Should be able to mark an item complete', ()=>{
		expect(todo.getItems().find(item => item.id == 1).complete).toBe(false);
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(false);

		todo.markComplete(2);

		expect(todo.getItems().find(item => item.id == 1).complete).toBe(false);
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(true);
	});


	it('Should throw exception when appropriate', ()=>{
		expect(function(){ todo.markComplete(1);  }).not.toThrow();
		expect(function(){ todo.markComplete(55); }).toThrow();
	});
})


