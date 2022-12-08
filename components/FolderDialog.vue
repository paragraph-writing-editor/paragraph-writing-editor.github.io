<script setup lang="ts">
const props = defineProps<{
  dialog: boolean
}>()

const emit = defineEmits<{
  (e: 'update:dialog', value: boolean): void
  (e: 'load', value: string): void
}>()

const {
  docs,
  selectedDocs,
  selectedAll,
  getDateTime,
  getText,
  initialize,
  selectAll,
  remove
} = useStoredDocs()

const { dialog } = toRefs(props)
watch(dialog, (newDialog, oldDialog) => {
  if (newDialog && !oldDialog) {
    initialize()
  }
})

const load = (e: Event) => {
  const key = (e.target as HTMLAnchorElement).dataset['key']
  emit('load', key)
  emit('update:dialog', false)
}
</script>

<template>
  <ModalWindow :dialog="props.dialog" @update:dialog="(v: boolean) => emit('update:dialog', v)">
    <section>
      <h2>Local Storage</h2>
      <div v-if="!docs.length">
        <p>no texts exist</p>
      </div>
      <div v-if="docs.length">
        <p>
          <RoundedButton destroy :disabled="!selectedDocs.length" @click="remove">Remove selected items</RoundedButton>
        </p>
        <p>
          <a @click="selectAll">
            <input type="checkbox" :checked="selectedAll" />
            Select all
          </a>
        </p>
        <div>
          <div class="item" v-for="key in docs" :key="key">
            <div class="operation">
              <a @click="load" :data-key="key">Load from this</a>
            </div>
            <p>
              <label>
                <input type="checkbox" :value="key" v-model="selectedDocs" />
                {{ getDateTime(key) }}
              </label>
            </p>
            <p class="text">{{ getText(key) }}</p>
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

.item {
  .operation {
    float: right;
    visibility: hidden;

    a {
      text-decoration: underline;
      color: blue;
    }
  }

  .text {
    padding-left: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
    height: calc(1.3em * 2);
  }

  &:hover {
    .operation {
      visibility: visible;
    }
  }
}
</style>
