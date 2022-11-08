<script setup lang="ts">
const props = defineProps<{
  modelValue: string[][]
}>()
</script>

<template>
  <div class="topic-sentence-highlight-view">
    <div v-for="section in modelValue" class="section">
      <p class="paragraph">
        <span v-for="sentence in section" class="sentence">{{ sentence }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topic-sentence-highlight-view {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  .sentence:first-child {
    color: darkred;
    font-weight: bold;
  }

  // section
  &>*:first-child {
    margin-top: 0;
    // paragraph
    &>*:first-child {
      margin-top: 0;
    }
  }
}

.topic-sentence-highlight-view {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
