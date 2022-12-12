<script setup lang="ts">
import TextStructureElement, { TextStructureElementType } from '~~/models/TextStructureElement';

const props = defineProps<{
  structure: TextStructureElement[]
  style: string
}>()

const sentenceClasses = (s: string) => [
  'sentence',
  s[s.length - 1].match(/[ -~]/) ? 'sentence--half-width' : 'sentence--full-width'
]
</script>

<template>
  <div :class="['review-window', style].join(' ')">
    <template v-for="element in structure" class="paragraph">
      <p v-if="element.type == TextStructureElementType.P"><span v-for="sentence in element.contents"
          :class="sentenceClasses(sentence).join(' ')">{{ sentence }}</span>
      </p>
      <h1 v-else-if="element.type == TextStructureElementType.H1">{{ element.contents[0] }}</h1>
      <h2 v-else-if="element.type == TextStructureElementType.H2">{{ element.contents[0] }}</h2>
      <h3 v-else-if="element.type == TextStructureElementType.H3">{{ element.contents[0] }}</h3>
      <h4 v-else-if="element.type == TextStructureElementType.H4">{{ element.contents[0] }}</h4>
      <h5 v-else-if="element.type == TextStructureElementType.H5">{{ element.contents[0] }}</h5>
      <h6 v-else-if="element.type == TextStructureElementType.H6">{{ element.contents[0] }}</h6>
      <hr v-else-if="element.type == TextStructureElementType.HR" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.topic-sentence-highlights {
  p {
    text-indent: 1em;
  }

  .sentence {
    &:first-child {
      color: darkred;
      font-weight: bold;
    }

    &--half-width+.sentence {
      &::before {
        content: ' ';
      }
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
