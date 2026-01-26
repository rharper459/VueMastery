<script setup>
import { useTodoListStore } from '../stores/todoList'
import { storeToRefs } from 'pinia'

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>

<template>
    <div v-for="item in todoList" :key="item.id" class="item">
        <div class="content">
            <span :class="{ completed: item.completed }">{{ item.todo }}</span>
            <div>    
                <span style="cursor: pointer;" @click.stop="toggleCompleted(item.id)">&#10004;</span>
                <span style="cursor: pointer;" @click.stop="deleteTodo(item.id)" class="x">&#10006;</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    span {
        margin: 0 10px;
        cursor: pointer;
    }
    .item {
        display: flex;
        justify-content: center;
    }
    .content {
        display: flex;
        font-size: 1.5em;
        justify-content: space-between;
        width: 80vw;
        padding: 5px;
    }
    .completed {
        text-decoration: line-through;
    }
</style>