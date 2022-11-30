<script setup lang="ts">
const props = defineProps<{
  structure: string[][]
  style: string
}>()

const sentenceClasses = (s: string) => [
  'sentence',
  s[s.length - 1].match(/[ -~]/) ? 'sentence--half-width' : 'sentence--full-width'
]
</script>

<template>
  <div :class="['review-window', style].join(' ')">
    <div class="section">
      <p v-for="paragraph in structure" class="paragraph">
        <span v-for="sentence in paragraph" :class="sentenceClasses(sentence).join(' ')">{{ sentence }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topic-sentence-highlights {
  .sentence {
    &:first-child {
      color: darkred;
      font-weight: bold;
    }

    &--half-width+.sentence {
      margin-left: 0.5em;
    }
  }
}

.bulleted-topic-sentences {
  p {
    display: list-item;
    list-style: inside;
    padding-left: 1em;
    text-indent: -1em;

    .sentence:not(:first-child) {
      display: none;
    }
  }
}

.review-window {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  // section
  &>*:first-child {
    margin-top: 0;

    // paragraph
    &>*:first-child {
      margin-top: 0;
    }
  }
}

.review-window {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
