<script setup lang="ts">
import ClipboardFile from 'vue-material-design-icons/ClipboardFileOutline.vue';
import ContentCopy from 'vue-material-design-icons/ClipboardEditOutline.vue';
import FileOutline from 'vue-material-design-icons/FileOutline.vue';
import Folder from 'vue-material-design-icons/FolderOutline.vue';
import Redo from 'vue-material-design-icons/Redo.vue';
import Save from 'vue-material-design-icons/ContentSaveOutline.vue';
import Undo from 'vue-material-design-icons/Undo.vue';

const props = defineProps<{
  canUndo: boolean
  canRedo: boolean
}>()
</script>

<template>
  <div class="toolbar-window">
    <div class="toolbar">
      <IconPartition />
      <IconButton aria-label="new text" data-balloon-pos="right" @click="$emit('new-click')">
        <FileOutline />
      </IconButton>
      <IconPartition />
      <IconButton aria-label="text in clipboard" data-balloon-pos="right" @click="$emit('clipboard-click')">
        <ClipboardFile />
      </IconButton>
      <IconButton aria-label="copy to clipboard" data-balloon-pos="right" @click="$emit('copy-click')">
        <ContentCopy />
      </IconButton>
      <IconPartition />
      <IconButton aria-label="texts in local storage" data-balloon-pos="right" @click="$emit('folder-click')">
        <Folder />
      </IconButton>
      <IconButton aria-label="save to local storage" data-balloon-pos="right" @click="$emit('save-click')">
        <Save />
      </IconButton>
      <IconPartition />
      <IconButton aria-label="undo" data-balloon-pos="right" :disabled="!canUndo" @click="$emit('undo-click')">
        <Undo />
      </IconButton>
      <IconButton aria-label="redo" data-balloon-pos="right" :disabled="!canRedo" @click="$emit('redo-click')">
        <Redo />
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
