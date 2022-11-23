<script setup lang="ts">
import {
  getDocSnapshotKeys,
  docSnapshotKeyToDate,
  deleteDocSnapshots
} from '../utils/storageUtil';

const props = defineProps<{
  dialog: boolean
}>()

const emit = defineEmits<{
  (e: 'update:dialog', value: boolean): void
}>()

const updateDialog = (dialog: boolean) => {
  emit('update:dialog', dialog)
}

const docs = ref([] as string[])
const checkedDocs = ref([] as string[])
const { dialog } = toRefs(props)
watch(dialog, (newDialog, oldDialog) => {
  if (newDialog && !oldDialog) {
    initialize()
  }
})

const remove = () => {
  deleteDocSnapshots(checkedDocs.value)
  initialize()
}

const selectedAll = computed(() => checkedDocs.value.length == docs.value.length)
const selectAll = () => {
  if (selectedAll.value)
    checkedDocs.value = []
  else
    checkedDocs.value = docs.value
}

function initialize() {
  docs.value = getDocSnapshotKeys()
  checkedDocs.value = []
}
</script>

<template>
  <ModalWindow :dialog="props.dialog" @update:dialog="updateDialog">
    <section>
      <h2>Local Storage</h2>
      <div v-if="!docs.length">
        <p>no texts exist</p>
      </div>
      <div v-if="docs.length">
        <div>
          <RoundedButton destroy :disabled="!checkedDocs.length" @click="remove">Remove selected items</RoundedButton>
        </div>
        <div>
          <a @click="selectAll">
            <input type="checkbox" :checked="selectedAll" />
            Select all
          </a>
        </div>
        <hr />
        <div>
          <div v-for="key in docs" :key="key">
            <label>
              <input type="checkbox" :value="key" v-model="checkedDocs" />
              {{ docSnapshotKeyToDate(key).toLocaleString().replace(/([^\d])([\d])([^\d])/g, '$10$2$3') }}
            </label>
          </div>
        </div>
      </div>
    </section>
  </ModalWindow>
</template>

<style scoped lang="scss">
a,
label {
  cursor: pointer;

  input {
    cursor: pointer;
  }
}
</style>
