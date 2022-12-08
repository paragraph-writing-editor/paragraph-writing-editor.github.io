import { Ref, ComputedRef } from 'vue';

export default function useTextEditHistory(text: Ref<string>): {
  canUndo: ComputedRef<boolean>
  canRedo: ComputedRef<boolean>
  undo: () => void
  redo: () => void
} {
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

  return {
    canUndo,
    canRedo,
    undo,
    redo
  }
}
