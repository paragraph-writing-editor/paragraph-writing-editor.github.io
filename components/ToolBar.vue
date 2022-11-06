<script setup lang="ts">
import ClipboardTextPlay from 'vue-material-design-icons/ClipboardTextPlayOutline.vue';
import ClipboardFile from 'vue-material-design-icons/ClipboardFileOutline.vue';
import FileOutline from 'vue-material-design-icons/FileOutline.vue';
</script>

<template>
  <div class="toolbar-window">
    <div class="toolbar">
      <IconPartition />
      <IconButton aria-label="new file" data-balloon-pos="right" @click="$emit('new-click')">
        <FileOutline />
      </IconButton>
      <IconButton aria-label="paste from clipboard" data-balloon-pos="right" @click="$emit('paste-click')">
        <ClipboardTextPlay />
      </IconButton>
      <IconPartition />
      <IconButton aria-label="copy to clipboard" data-balloon-pos="right" @click="$emit('copy-click')">
        <ClipboardFile />
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
    height: calc(100% - 48px);
  }
}
</style>
