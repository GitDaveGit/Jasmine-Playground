describe('Testing the functionality, this is the checklist:', ()=>{

	it('Should know that true is true and false is false', ()=>{
		expect(1==1).toBe(true);
		expect(1==0).toBe(false);
	});


	it('Should be able to add an item', ()=>{
		todo = new ToDo();

		expect(todo.getItems().length).toBe(0);

		item = { id: 1, title: "get milk", complete: false };
		todo.addTodo(item);

		expect(todo.getItems().length).toBe(1);
	});


	it('Should be able to delete an item', ()=>{
		todo = new ToDo();

		item1 = { id: 1, title: "get milk", complete: false };
		item2 = { id: 2, title: "get eggs", complete: false };

		todo.addTodo(item1);
		todo.addTodo(item2);

		expect(todo.getItems().length).toBe(2);

		todo.delete(2);
		expect(todo.getItems().length).toBe(1);
		expect(todo.getItems()[0].id).toBe(1);
	});

})


