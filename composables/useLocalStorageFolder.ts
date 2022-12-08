import { Ref, ComputedRef } from 'vue'
import {
  getDocSnapshotKeys,
  docSnapshotKeyToDate,
  deleteDocSnapshots,
  getDocSnapshot
} from '../utils/docsAccess';

export default function useLocalStorageFolder(): {
  docs: Ref<string[]>
  selectedDocs: Ref<string[]>
  selectedAll: ComputedRef<boolean>
  getDateTime: (_: string) => string
  getText: (_: string) => string
  initialize: () => void
  selectAll: () => void
  remove: () => void
} {
  const docs = ref([] as string[])
  const selectedDocs = ref([] as string[])
  const selectedAll = computed(() => selectedDocs.value.length == docs.value.length)

  const texts = computed(() => {
    const ret = {}
    docs.value.forEach((key) => ret[key] = getDocSnapshot(key))
    return ret
  })

  const getDateTime = (doc: string) =>
    docSnapshotKeyToDate(doc).toLocaleString().replace(/([^\d])([\d])([^\d])/g, '$10$2$3')

  const getText = (doc: string) => texts.value[doc] as string

  const initialize = () => {
    docs.value = getDocSnapshotKeys()
    selectedDocs.value = []
  }

  const selectAll = () => {
    if (selectedAll.value) selectedDocs.value = []
    else selectedDocs.value = docs.value
  }

  const remove = () => {
    deleteDocSnapshots(selectedDocs.value)
    initialize()
  }

  return {
    docs,
    selectedDocs,
    selectedAll,
    getDateTime,
    getText,
    initialize,
    selectAll,
    remove,
  }
}
