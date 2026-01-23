<script setup>
import Book from '@/components/Book.vue';
</script>

<template>
    <div>
    <book>
        <template #title="slotProps">
            <h2>{{ slotProps.bookTitle }}</h2>
        </template>
    </book>
    </div>
</template>

<style scoped>

</style>