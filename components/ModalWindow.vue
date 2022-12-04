<script setup lang="ts">
import WindowClose from 'vue-material-design-icons/WindowClose.vue';

const props = defineProps<{
  dialog: boolean
}>()

const emit = defineEmits<{
  (e: 'update:dialog', value: boolean): void
}>()

const close = () => {
  emit('update:dialog', false)
}
</script>

<template>
  <div v-if="dialog" class="modal-background" @click="close">
    <div class="modal-window" @click.stop>
      <slot></slot>
      <div class="close-button" @click="close">
        <IconButton>
          <WindowClose />
        </IconButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  overflow-y: scroll;

  .modal-window {
    position: relative;
    background-color: white;
    box-sizing: border-box;
    margin: 48px auto;
    padding: 16px;
    max-width: 600px;
    width: calc(100% - 16px);
    border-radius: 8px;

    .close-button {
      position: absolute;
      top: -18px;
      right: -18px;
    }
  }
}

.modal-background {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
