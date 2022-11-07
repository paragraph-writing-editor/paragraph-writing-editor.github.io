<script setup lang="ts">
const text = ref('')

const structure = computed(() => {
  return text.value
    // sections
    .trim()
    .replace(/\n\n+/g, '\n\n')
    .split('\n\n')
    // sentences
    .map((it) => {
      return it
        .replace(/。/g, '。\n')
        .trim()
        .split('\n')
        .filter((s) => s.length)
    })
})

const clearText = () => {
  text.value = ''
}

const pasteText = async () => {
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

// DEBUG:
//watchEffect(() => console.log(text.value))
//watchEffect(() => console.log(structure.value))
</script>

<template>
  <NuxtLayout>
    <DoubleSpread>
      <template v-slot:left-page>
        <ToolBar :can-undo="canUndo" :can-redo="canRedo" @new-click="clearText" @paste-click="pasteText" @copy-click="copyText"
          @undo-click="undo" @redo-click="redo">
          <WriteDownArea v-model="text" />
        </ToolBar>
      </template>
      <template v-slot:right-page>
        <TopicSentenceHighlightView :model-value="structure" />
      </template>
    </DoubleSpread>
  </NuxtLayout>
</template>
