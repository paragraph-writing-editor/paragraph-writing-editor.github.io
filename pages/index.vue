<script setup lang="ts">
import Snackbar from 'node-snackbar';

const { text, textEmpty, clearText } = useFlatText()
const { loadFromClipboard, saveToClipboard } = useClipboardIO(text)
const { loadFromLocalStorage, saveToLocalStorage } = useStoredText(text)
const { canUndo, canRedo, undo, redo } = useUndoRedoHistory(text)

const { settings } = useSentenceBoundaryDetectionSettings()
const { oneSentencePerLine, oneParagraphPerLine } = useTextFormatting(text, settings)
const { structure } = useStructuredText(text, settings)

const folder = ref(false)
const openFolder = () => { folder.value = true }

const viewMenu = ref('')

const saveToClipboardToNotify = async () => {
  if (textEmpty.value) return
  await saveToClipboard()
  Snackbar.show({
    pos: 'bottom-center',
    text: 'text was copied to clipboard',
    actionText: 'OK'
  })
}

const saveToLocalStorageToNotify = () => {
  if (textEmpty.value) return
  saveToLocalStorage()
  Snackbar.show({
    pos: 'bottom-center',
    text: 'text was saved to local storage',
    actionText: 'OK'
  })
}

const formatOspl = () => {
  if (textEmpty.value) return
  oneSentencePerLine()
}

const formatOppl = () => {
  if (textEmpty.value) return
  oneParagraphPerLine()
}
</script>

<template>
  <DoubleSpread>
    <template v-slot:left-page>
      <ToolBar :text-empty="textEmpty" :can-undo="canUndo" :can-redo="canRedo" @new-click="clearText"
        @clipboard-click="loadFromClipboard" @copy-click="saveToClipboardToNotify" @folder-click="openFolder"
        @save-click="saveToLocalStorageToNotify" @undo-click="undo" @redo-click="redo" @format-ospl-click="formatOspl"
        @format-oppl-click="formatOppl">
        <WriteDownAreaLite v-model="text" />
      </ToolBar>
      <FolderDialog v-model:dialog="folder" @load="loadFromLocalStorage" />
    </template>
    <template v-slot:right-page>
      <ViewMenu v-model:menu="viewMenu">
        <StatusIndicator :structure="structure">
          <ReviewArea :structure="structure" :style="viewMenu" />
        </StatusIndicator>
      </ViewMenu>
    </template>
  </DoubleSpread>
</template>

<style>
@import 'node-snackbar/dist/snackbar.min.css';
</style>
