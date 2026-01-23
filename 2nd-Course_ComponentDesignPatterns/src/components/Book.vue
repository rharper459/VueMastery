<script setup>
import { ref } from 'vue'

const bookTitle = ref('Child Component using Slot Props')
</script>

<template>
    <div class="book">
        <slot name="title" :bookTitle="bookTitle"></slot>
    </div>
</template>

<style scoped>
    .book {
        border: 2px solid #1b58a9;
        padding: 20px;
            padding-top: 30px;
            padding-bottom: 450px;
        border-radius: 10px;
        max-width: 400px;
        margin: 50px auto;
        text-align: center;
    }
</style>