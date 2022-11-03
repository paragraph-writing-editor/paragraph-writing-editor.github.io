<script setup lang="ts">
import { useDebounceFn } from '@vueuse/shared';

const props = defineProps<{
  text: string
}>()

const emit = defineEmits<{
  (e: 'update:text', value: string): void
}>()

/* NOTE:
 * innerText: 変更の有無を判定するためのステート
 * displayText: 変更を画面に反映するためのステート
 */
const innerText = ref(props.text)
const displayText = ref(props.text)
watchEffect(() => {
  if (innerText.value != props.text) {
    innerText.value = props.text
    displayText.value = props.text
  }
})

const inputText = useDebounceFn(({ target }: Event) => {
  if (!(target instanceof HTMLDivElement)) return
  innerText.value = target.innerText
  emit('update:text', target.innerText)
})
</script>

<template>
  <div class="textarea" contentEditable="true" v-text="displayText" @input="inputText"></div>
</template>

<style scoped lang="scss">
.textarea {
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  overflow-y: scroll;

  &:empty::before {
    content: "Write down here.";
    color: lightgray;
  }

  &:focus {
    outline: 0;
  }
}

.textarea {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>