<script setup lang="ts">
const props = defineProps<{
  structure: string[][]
}>()

const status = computed(() => {
  const paragraphs = props.structure.length
  const sentences = props.structure.reduce((acc, p) => acc + p.length, 0)
  const characters = props.structure.reduce((acc, p) =>
    acc + p.reduce((acc, s) => acc + s.length, 0), 0)
  return {
    paragraphs: Math.min(paragraphs, sentences),
    sentences,
    characters,
  }
})
</script>

<template>
  <div class="status-indicator-window">
    <div class="status-indicator">
      {{ status.paragraphs.toLocaleString() }} paragraphs.
      {{ status.sentences.toLocaleString() }} sentences.
      {{ status.characters.toLocaleString() }} characters.
    </div>
    <div class="view-space">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.status-indicator-window, .view-space {
  width: 100%;
  height: 100%;
}

.status-indicator-window {
  position: relative;

  .status-indicator {
    position: absolute;
    top: -36px;
    right: 0;
    height: 36px;
    line-height: 36px;
    font-size: small;
    color: gray;
  }
}
</style>
