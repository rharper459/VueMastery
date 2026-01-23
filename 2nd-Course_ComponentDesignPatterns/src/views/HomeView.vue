<script setup>
import BaseButton from '@/components/BaseButton.vue';
import IconCommunity from '@/components/icons/IconCommunity.vue';
</script>

<template>
  <main>
    <div class="butttons">
    
      <BaseButton label="left-Icon" >
        <template #icon-left>
          <IconCommunity />
        </template>
      </BaseButton>
    
      <BaseButton label="Double-Icon" >
        <template #icon-left>
          <IconCommunity />
        </template>
        <template #icon-right>
          <IconCommunity />
        </template>
      </BaseButton>
    
      <BaseButton label="right-Icon" >
        <template #icon-right>
          <IconCommunity />
        </template>
      </BaseButton>
    
    </div>
    
  </main>
</template>

<style scoped>
.butttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
  
}
</style>