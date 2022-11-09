<script setup lang="ts">
import { useDebounceFn } from '@vueuse/shared';
import { endsWithSingleLf, trimTrailingLf } from '../utils/elementUtil';
import { insertText, extractText } from '../utils/selectionUtil';

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

/* NOTE:
 * innerText: to determin if changes have been made
 * applyText: to reflect changes on screen
 * applyKey:  to reflect changes on screen
 * areaRef:   to focus after reflection
 */
const innerText = ref(props.modelValue)
const applyText = ref(props.modelValue)
const applyKey = ref(Math.random())
const areaRef = ref(null)
const { modelValue } = toRefs(props)
watch(modelValue, (newValue, oldValue) => {
  const propsChange = () => newValue != oldValue
  const valueChange = () => innerText.value != newValue
  if (propsChange() && valueChange()) {
    innerText.value = newValue
    applyText.value = newValue
    applyKey.value = Math.random()
    nextTick(() => {
      areaRef.value.focus()
      if (newValue.length > 0) {
        const range = document.createRange()
        const selection = window.getSelection()
        // NOTE: A double LF is for display convenience.
        const lfOffset = newValue.match(/\n\n$/) ? -1 : 0
        range.setStart(areaRef.value.firstChild, newValue.length + lfOffset)
        range.collapse()
        selection.removeAllRanges()
        selection.addRange(range)
      }
    })
  }
})

const inputText = useDebounceFn(({ target }: Event) => {
  if (!(target instanceof HTMLDivElement)) return
  updateText(target)
})

const pasteText = (e: Event) => {
  e.preventDefault()
  const { target } = e
  if (!(e instanceof ClipboardEvent)) return
  if (!(target instanceof HTMLDivElement)) return
  const clipboard = e.clipboardData.getData('text/plain')
  insertText(clipboard.replace(/\r\n/g, '\n'))
  adjustTrailingLf(target, () => trimTrailingLf(target))
}

const cutText = (e: Event) => {
  e.preventDefault()
  const { target } = e
  if (!(e instanceof ClipboardEvent)) return
  if (!(target instanceof HTMLDivElement)) return
  extractText()
  adjustTrailingLf(target, () => insertText('\n'))
}

const keydonwEnter = (e: Event) => {
  e.preventDefault()
  const { target } = e
  if (!(target instanceof HTMLDivElement)) return
  insertText('\n')
  adjustTrailingLf(target, () => insertText('\n'))
}

function updateText(target: HTMLDivElement, keepCaret = true) {
  // NOTE: A double LF requires caret adjustment.
  if (keepCaret) innerText.value = target.innerText
  // NOTE: A single LF is the same as an empty string.
  emit('update:modelValue', target.innerText == '\n' ? '' : target.innerText)
}

function adjustTrailingLf(target: HTMLDivElement, fn: () => void) {
  if (endsWithSingleLf(target)) {
    fn()
    updateText(target, false)
  } else {
    updateText(target)
  }
}
</script>

<template>
  <div class="textarea" ref="areaRef" contentEditable="true" :key="applyKey" v-text="applyText"
    v-on:keydown.enter="keydonwEnter" @input="inputText" @cut="cutText" @paste="pasteText">
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
