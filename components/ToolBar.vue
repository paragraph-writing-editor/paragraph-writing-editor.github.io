<script setup lang="ts">
import ClipboardFile from 'vue-material-design-icons/ClipboardFileOutline.vue';
import ContentCopy from 'vue-material-design-icons/ClipboardEditOutline.vue';
import Dots from 'vue-material-design-icons/DotsHorizontal.vue';
import FileOutline from 'vue-material-design-icons/FileOutline.vue';
import Folder from 'vue-material-design-icons/FolderOutline.vue';
import Redo from 'vue-material-design-icons/Redo.vue';
import Save from 'vue-material-design-icons/ContentSaveOutline.vue';
import Undo from 'vue-material-design-icons/Undo.vue';

const props = defineProps<{
  textEmpty: boolean
  canUndo: boolean
  canRedo: boolean
}>()

const etcMenus = ref(false)
const toggleEtcMenus = (fn?: (_: void) => void) => {
  etcMenus.value = !etcMenus.value
  if (fn && typeof fn === 'function') fn()
}
</script>

<template>
  <div class="toolbar-window">
    <div class="toolbar">
      <IconPartition />
      <IconButton aria-label="new text" data-balloon-pos="down" @click="$emit('new-click')">
        <FileOutline />
      </IconButton>
      <IconPartition />
      <IconButton aria-label="text in clipboard" data-balloon-pos="down" @click="$emit('clipboard-click')">
        <ClipboardFile />
      </IconButton>
      <IconButton aria-label="copy to clipboard" data-balloon-pos="down" :disabled="textEmpty"
        @click="$emit('copy-click')">
        <ContentCopy />
      </IconButton>
      <IconPartition />
      <IconButton aria-label="texts in local storage" data-balloon-pos="down" @click="$emit('folder-click')">
        <Folder />
      </IconButton>
      <IconButton aria-label="save to local storage" data-balloon-pos="down" :disabled="textEmpty"
        @click="$emit('save-click')">
        <Save />
      </IconButton>
      <IconPartition />
      <IconButton aria-label="undo" data-balloon-pos="down" :disabled="!canUndo" @click="$emit('undo-click')">
        <Undo />
      </IconButton>
      <IconButton aria-label="redo" data-balloon-pos="down" :disabled="!canRedo" @click="$emit('redo-click')">
        <Redo />
      </IconButton>
      <IconPartition />
      <div class="etc-menus">
        <IconButton @click="toggleEtcMenus">
          <Dots />
        </IconButton>
        <div class="boundary" v-if="etcMenus">
          <section>
            <div class="title">Text formatting</div>
            <div class="item" @click="toggleEtcMenus(() => $emit('format-ospl-click'))">One sentence per line</div>
            <div class="item" @click="toggleEtcMenus(() => $emit('format-oppl-click'))">One paragraph per line</div>
          </section>
        </div>
      </div>
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

.etc-menus {
  position: relative;

  .boundary {
    position: absolute;
    top: 24px;
    left: 24px;
    white-space: nowrap;
    box-shadow: 2px 2px 4px gray;
    border-radius: 2px;
    font-size: small;
    background-color: white;

    section {
      .title {
        padding: 4px 12px;
        font-weight: bold;
      }

      .item {
        padding: 4px 16px;
        cursor: pointer;

        &:hover {
          background-color: #efefef;
        }
      }
    }
  }
}
</style>
