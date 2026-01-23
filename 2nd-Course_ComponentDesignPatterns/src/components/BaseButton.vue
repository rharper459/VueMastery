<script setup>

defineProps({
    label: {
        type: String,
        required: true,
    },
})

</script>

<template>
    <div>
        <button class="button">
            <slot name="icon-left"></slot>
            {{ label }}
            <slot name="icon-right"></slot>
        </button>
    </div>
</template>

<style scoped>
    .button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 30px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        background-color: #1b58a9;
        border: 2px solid #fff;
        border-radius: 10px;
        cursor: pointer;
        
    }   
</style>