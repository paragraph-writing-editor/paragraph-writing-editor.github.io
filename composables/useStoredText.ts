import { Ref } from 'vue';
import {
  postDocSnapshot,
  getLatestDocSnapshotKey,
  getDocSnapshot,
  deleteDocSnapshots
} from '../operations/docsAccess';

export default function useStoredText(text: Ref<string>): {
  loadFromLocalStorage: (_: string) => void
  saveToLocalStorage: () => void
} {
  const loadFromLocalStorage = (key: string) => {
    text.value = getDocSnapshot(key) || ''
  }

  const saveToLocalStorage = () => {
    const latestKey = getLatestDocSnapshotKey()
    if (latestKey != null && getDocSnapshot(latestKey)?.trim() === text.value.trim()) {
      deleteDocSnapshots([latestKey])
    }
    postDocSnapshot(text.value)
  }

  return {
    loadFromLocalStorage,
    saveToLocalStorage
  }
}
