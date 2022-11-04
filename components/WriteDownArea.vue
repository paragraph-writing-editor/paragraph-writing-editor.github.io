<script setup lang="ts">
import { useDebounceFn } from '@vueuse/shared';

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

/* NOTE:
 * innerText: 変更の有無を判定するためのステート
 * displayText: 変更を画面に反映するためのステート
 */
const innerText = ref(props.modelValue)
const displayText = ref(props.modelValue)
watchEffect(() => {
  if (innerText.value != props.modelValue) {
    innerText.value = props.modelValue
    displayText.value = props.modelValue
  }
})

const inputText = useDebounceFn(({ target }: Event) => {
  if (!(target instanceof HTMLDivElement)) return
  innerText.value = target.innerText
  emit('update:modelValue', target.innerText)
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
