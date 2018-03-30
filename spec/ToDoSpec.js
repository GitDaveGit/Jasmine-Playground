describe('Testing the functionality, this is the checklist:', ()=>{

	let todo, item1, item2;

	beforeEach(function(){
		todo = new ToDo();

		item1 = { id: 1, title: "get milk", complete: false };
		item2 = { id: 2, title: "get eggs", complete: false };

		todo.addTodo(item1);
		todo.addTodo(item2);

	});

	it('Should be able to add items', ()=>{
		expect(todo.getItems().length).toBe(2);
	});


	it('Should be able to delete an item', ()=>{
		expect(todo.getItems().length).toBe(2);

		todo.delete(2);
		expect(todo.getItems().length).toBe(1);
		expect(todo.getItems()[0].id).toBe(1);
	});


	it('Should be able to mark an item complete', ()=>{
		expect(todo.getItems().find(item => item.id == 1).complete).toBe(false);
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(false);

		todo.markComplete(2);

		expect(todo.getItems().find(item => item.id == 1).complete).toBe(false);
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(true);

	});

})


