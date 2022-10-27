const todosDB = [
    {
        id: 1,
        title: "Primer Todo",
        description: "haciendo pruebas",
        isComplete: false,
    },
];

const getAlltodos = () => {
    return todosDB
}

const getTodoById = (id) => {
    const data = todosDB.filter((item) => item.id === id);
    return data[0]
}

const createTodo = (data) => {
     const newObj = {
         id: todosDB[todosDB.length - 1].id + 1,
         title: data.title,
         description: data.description,
         isComplete: false,
     };

    todosDB.push(newObj);
    
    return todosDB
}

const deleteTodo = (id) => {
    const index = todosDB.findIndex((item) => item.id === id)
    todosDB.splice(index, 1)
    return 
}

const editTodo = (id, data) => {
    const index = todosDB.findIndex((item) => item.id === id);
    if (index !== -1) {
        todosDB[index] = {
            id,
            title: data.title,
            description: data.description,
            isComplete: data.isComplete
        }
    } else {
        createTodo(data)
    }
    return todosDB
}

module.exports = {
    editTodo,
    deleteTodo,
    getTodoById,
    createTodo,
    getAlltodos,
};
