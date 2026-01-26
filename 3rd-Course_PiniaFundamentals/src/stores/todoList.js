import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
    state: () => ({
        todoList: [],
        id: 0,
    }),
    actions: {
        addTodo(todo) {
            this.todoList.push({todo, id: this.id++, completed: false});
        },
        deleteTodo(itemID) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemID;
            });
        },
        toggleCompleted(itemID) {
            const todo = this.todoList.find((object) => object.id === itemID);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    }
});