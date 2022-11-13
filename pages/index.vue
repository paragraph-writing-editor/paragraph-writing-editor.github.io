<script setup lang="ts">
const text = ref('')
const menu = ref('')
const structure = computed(() => {
  return text.value
    // sections
    .trim()
    .replace(/\n\n+/g, '\n\n')
    .split('\n\n')
    // sentences
    .map((it) => {
      return it
        .replace(/(。|\U+ff0e)/g, '$1\n')
        // NOTE: \U+ff0e (full-width dot)
        .replace(/(\.[\"\']? )/g, '$1\n')
        // NOTE: `."` is also end of sentence
        .trim()
        .split('\n')
        .filter((s) => s.length)
    })
})

const clearText = () => {
  text.value = ''
}

const resetWithClipboard = async () => {
  const clipboard = await navigator.clipboard.readText()
  if (clipboard.trim().length > 0)
    text.value = clipboard.replace(/\r\n/g, '\n').trim()
}

const copyText = () => {
  if (text.value.trim().length > 0)
    navigator.clipboard.writeText(text.value)
      .then(() => window.alert("text was copied to clipboard"))
}

const undoStack = ref([text.value])
const redoStack = ref([] as string[])
watch(text, (newText, oldText) => {
  const textChange = () => newText.trim() != oldText.trim()
  const stackUpToDate = () => undoStack.value[undoStack.value.length - 1] == newText
  if (textChange() && !stackUpToDate()) {
    if (undoStack.value.length > 12) undoStack.value.shift()
    undoStack.value.push(newText)
    redoStack.value.splice(0)
  }
})

const canUndo = computed(() => undoStack.value.length > 1)
const undo = () => {
  if (!canUndo.value) return
  const extractedText = undoStack.value.pop()
  redoStack.value.push(extractedText)
  text.value = undoStack.value[undoStack.value.length - 1]
}

const canRedo = computed(() => redoStack.value.length > 0)
const redo = () => {
  if (!canRedo.value) return
  const extractedText = redoStack.value.pop()
  undoStack.value.push(extractedText)
  text.value = undoStack.value[undoStack.value.length - 1]
}
</script>

<template>
  <DoubleSpread>
    <template v-slot:left-page>
      <ToolBar :can-undo="canUndo" :can-redo="canRedo" @new-click="clearText" @clipboard-click="resetWithClipboard"
        @copy-click="copyText" @undo-click="undo" @redo-click="redo">
        <WriteDownAreaLite v-model="text" />
      </ToolBar>
    </template>
    <template v-slot:right-page>
      <ViewMenu v-model:menu="menu">
        <StatusIndicator :structure="structure">
          <ReviewArea :structure="structure" :style="menu" />
        </StatusIndicator>
      </ViewMenu>
    </template>
  </DoubleSpread>
</template>
