describe('Testing the functionality, this is the checklist:', ()=>{

	let todo, item1, item2;

	beforeEach(function(){
		todo = new ToDo();
		item1 = {
			id: 1,
			title: "\"get milk 1\"",
			complete: false
		};
		item2 = {
			id: 2,
			title: "\"get eggs\"", 
			complete: false
		};
	});


	it('should add an item', ()=>{
	const done = todo.addTodo(item1);
	expect(todo.getItems().length).toBe(1);
	});


	it('should delete an item', ()=>{
		todo.addTodo(item1);
		todo.addTodo(item2);

		expect(todo.getItems().length).toBe(2);
		todo.delete(2);
		expect(todo.getItems()[todo.getItems().length-1].id).toBe(1);
		expect(todo.getItems().length).toBe(1);

	});


	it('should mark an item as complete', ()=>{
		todo.addTodo(item1);
		todo.addTodo(item2);

		todo.markComplete(2);
		expect(todo.getItems().find(item => item.id == 1).complete).toBe(false);
		expect(todo.getItems().find(item => item.id == 2).complete).toBe(true);
	});

})



describe('Testing DOM manipulation', ()=>{

	let Dom, item, todo;

	beforeEach(function(){
		todo = new ToDo();
		Dom = new DomManipulation();

		item = {
			id: 1,
			title: 'some Title',
			complete: false
		};
	});

	it('should initialise HTML', function(){
        const form = document.createElement('form');
        const input = document.createElement('input');
        const ul = document.createElement('ul');
        input.id = "AddItemInput";
        form.id="addItemForm";
        form.appendChild(input);
        expect(Dom.init().form).toEqual(form);
        expect(Dom.init().ul).toEqual(ul);
      });

	it('should create item', function(){
		const element = Dom.displayItem(item);
		const result = document.createElement('li');
		result.innerText = item.title;
		expect(element).toEqual(result);
	});
})
