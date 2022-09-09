//todos.js

const { firestore_db } = require('../util/admin');

exports.getAllTodos = (request, response) => {
	firestore_db
		.collection('todos')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let todos = [];
			data.forEach((doc) => {
				todos.push({
                    todoId: doc.id,
                    title: doc.data().title,
					body: doc.data().body,
					createdAt: doc.data().createdAt,
				});
			});
			console.log(response)
			//response.set('Access-Control-Allow-Origin', '*');
			return response.json(todos);
		})
		.catch((err) => {
			console.log(response)
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};