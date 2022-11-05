<script setup lang="ts">
import { useDebounceFn } from '@vueuse/shared';

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

/* NOTE:
 * innerText: 変更の有無を判定するためのテキスト
 * applyText: 変更を画面に反映するためのテキスト
 * applyKey:  変更を画面に反映するためのキー
 * areaRef:   反映後にフォーカスするための参照
 */
const innerText = ref(props.modelValue)
const applyText = ref(props.modelValue)
const applyKey = ref(Math.random())
const areaRef = ref(null)
watchEffect(() => {
  if (innerText.value != props.modelValue) {
    innerText.value = props.modelValue
    applyText.value = props.modelValue
    applyKey.value = Math.random()
    nextTick(() => { 
      areaRef.value.focus()
      if (props.modelValue.length > 0) {
        const range = document.createRange()
        const selection = window.getSelection()
        range.setStart(areaRef.value.firstChild, props.modelValue.length)
        range.collapse()
        selection.removeAllRanges()
        selection.addRange(range)
      }
    })
  }
})

const inputText = useDebounceFn(({ target }: Event) => {
  if (!(target instanceof HTMLDivElement)) return
  innerText.value = target.innerText
  emit('update:modelValue', target.innerText)
})
</script>

<template>
  <div class="textarea" ref="areaRef" contentEditable="true" v-text="applyText" :key="applyKey" @input="inputText">
  </div>
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
