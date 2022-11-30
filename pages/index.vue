<script setup lang="ts">
import Snackbar from 'node-snackbar';
import {
  postDocSnapshot,
  getLatestDocSnapshotKey,
  getDocSnapshot,
  deleteDocSnapshots
} from '../utils/documentStorage';

const { settings } = useSentenceBoundaryDetectionSettings()

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
      const detections = [
        settings.value.halfwidthDotSpace
          ? (text: string) => text.replace(/(\. )/g, '$1\n') : (text: string) => text,
        settings.value.halfwidthDotDoubleQuotationSpace
          ? (text: string) => text.replace(/(\.\" )/g, '$1\n') : (text: string) => text,
        settings.value.halfwidthDotSingleQuotationSpace
          ? (text: string) => text.replace(/(\.\' )/g, '$1\n') : (text: string) => text,
        settings.value.fullwidthDot // NOTE: U+ff0e (full-width dot)
          ? (text: string) => text.replace(/(\uff0e)/g, '$1\n') : (text: string) => text,
        settings.value.fullwidthSmallCircle
          ? (text: string) => text.replace(/(。)/g, '$1\n') : (text: string) => text,
      ]
      return detections
        .reduce((acc, fn) => fn(acc), it)
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

const folder = ref(false)
const openFolder = () => {
  folder.value = true
}

const load = (key: string) => {
  text.value = getDocSnapshot(key)
}

const textEmpty = computed(() => !text.value.trim().length)
const saveText = () => {
  if (!textEmpty.value) {
    const latestKey = getLatestDocSnapshotKey()
    if (latestKey != null && getDocSnapshot(latestKey)?.trim() === text.value.trim()) {
      deleteDocSnapshots([latestKey])
    }
    postDocSnapshot(text.value)
    Snackbar.show({
      pos: 'bottom-center',
      text: 'text was saved to local storage',
      actionText: 'OK'
    })
  }
}

const copyText = () => {
  if (!textEmpty.value)
    navigator.clipboard.writeText(text.value)
      .then(() => Snackbar.show({
        pos: 'bottom-center',
        text: 'text was copied to clipboard',
        actionText: 'OK'
      }))
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

const formatOspl = () => {
  if (text.value.trim().length == 0) return
  const detections = [
    settings.value.halfwidthDotSpace
      ? (text: string) => text.replace(/(\.) ([^\n])/g, '$1\n$2') : (text: string) => text,
    settings.value.halfwidthDotDoubleQuotationSpace
      ? (text: string) => text.replace(/(\.\") ([^\n])/g, '$1\n$2') : (text: string) => text,
    settings.value.halfwidthDotSingleQuotationSpace
      ? (text: string) => text.replace(/(\.\') ([^\n])/g, '$1\n$2') : (text: string) => text,
    settings.value.fullwidthDot // NOTE: U+ff0e (full-width dot)
      ? (text: string) => text.replace(/(\uff0e)([^\n])/g, '$1\n$2') : (text: string) => text,
    settings.value.fullwidthSmallCircle
      ? (text: string) => text.replace(/(。)([^\n])/g, '$1\n$2') : (text: string) => text,
  ]
  text.value = detections.reduce((acc, fn) => fn(acc), text.value)
}

const formatOppl = () => {
  if (text.value.trim().length == 0) return
  const detections = [
    // NOTE: half-width
    (text: string) => text.replace(/([ -~]) ?\n([^\n])/g, '$1 $2'),
    // NOTE: full-width (excluding line breaks)
    (text: string) => text.replace(/([^ -~\n]) ?\n([^\n])/g, '$1$2')
  ]
  text.value = detections.reduce((acc, fn) => fn(acc), text.value)
}
</script>

<template>
  <DoubleSpread>
    <template v-slot:left-page>
      <ToolBar :text-empty="textEmpty" :can-undo="canUndo" :can-redo="canRedo" @new-click="clearText"
        @clipboard-click="resetWithClipboard" @folder-click="openFolder" @save-click="saveText" @copy-click="copyText"
        @undo-click="undo" @redo-click="redo" @format-ospl-click="formatOspl" @format-oppl-click="formatOppl">
        <WriteDownAreaLite v-model="text" />
      </ToolBar>
      <FolderDialog v-model:dialog="folder" @load="load" />
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

<style>
@import 'node-snackbar/dist/snackbar.min.css';
</style>
