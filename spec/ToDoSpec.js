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


	it('Should be able to find an item by ID', function(){
		let item = todo.getItemById(2);
		expect(item.id).toBe(2);
		expect(item.title).toBe("get eggs");
		expect(item.complete).toBe(false);
	});


	it('Should be able to find an item by title', function(){
		let item = todo.getItemByTitle("get milk");
		expect(item.id).toBe(1);
		expect(item.title).toBe("get milk");
		expect(item.complete).toBe(false);
	});


	it('Should gracefully fail when it cannot find an item', function(){
		let item = todo.getItemById(999);
		expect(item).toBe(undefined);

		item = todo.getItemByTitle("To Be or Not To Be");
		expect(item).toBe(undefined);
	});


	it('Should be able to delete an item', ()=>{
		expect(todo.getItems().length).toBe(2);

		todo.deleteItemById(2);
		expect(todo.getItems().length).toBe(1);
		expect(todo.getItems()[0].id).toBe(1);

		todo.deleteItemById(55);	// TODO: return true/false if deleted
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


