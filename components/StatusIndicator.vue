<script setup lang="ts">
import TextStructureElement from '~~/models/TextStructureElement';

const props = defineProps<{
  structure: TextStructureElement[]
}>()

const status = computed(() => {
  const paragraphs = props.structure
    .filter((it) => it.isParagraph())
    .length
  const sentences = props.structure
    .filter((it) => it.isParagraph())
    .map((it) => it.countSentences())
    .reduce((acc, count) => acc + count, 0)
  const characters = props.structure
    .filter((it) => it.isParagraph())
    .map((it) => it.countCharacters())
    .reduce((acc, count) => acc + count, 0)
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
      <span class="characters">{{ status.characters.toLocaleString() }} characters</span>
      <span class="sentences">{{ status.sentences.toLocaleString() }} sentences</span>
      <span class="paragraphs">{{ status.paragraphs.toLocaleString() }} paragraphs</span>
    </div>
    <div class="view-space">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.status-indicator-window,
.view-space {
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

    span+span::before {
      content: '/';
      padding: 0 2px;
    }
  }
}

@media screen and (max-width: 1120px) {
  .paragraphs {
    display: none;
  }
}

@media screen and (max-width: 920px) {
  .sentences {
    display: none;
  }
}

@media screen and (max-width: 720px) {
  .characters {
    display: none;
  }
}
</style>
