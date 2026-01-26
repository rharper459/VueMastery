<script setup>
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'
</script>

<template>
    <div class="todo-app">
        <h1>To Do List</h1>
        <TodoForm />
        <TodoList />
    </div>
</template>

<style scoped>
    .todo-app {
        padding: 5vh;
        min-height: 100vh;
        width: 30vh;
        background-color: #332f2f;
        color: white;
    }
</style>