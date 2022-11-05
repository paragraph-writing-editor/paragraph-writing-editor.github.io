<script setup lang="ts">
import FileOutline from 'vue-material-design-icons/FileOutline.vue';
</script>

<template>
  <div class="toolbar-window">
    <div class="toolbar">
      <IconPartition />
      <IconButton aria-label="new file" data-balloon-pos="right" @click="$emit('new-click')">
        <FileOutline />
      </IconButton>
    </div>
    <div class="workspace">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.toolbar-window {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .toolbar {
    height: 48px;
    display: flex;
  }

  .workspace {
    flex-grow: 1;
  }
}
</style>
