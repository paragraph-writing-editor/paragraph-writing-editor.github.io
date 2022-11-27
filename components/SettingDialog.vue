<script setup lang="ts">
const props = defineProps<{
  dialog: boolean
}>()

const emit = defineEmits<{
  (e: 'update:dialog', value: boolean): void
}>()

const { settingsSelection } = useSentenceBoundaryDetectionSettings()
</script>

<template>
  <ModalWindow :dialog="props.dialog" @update:dialog="(v: boolean) => emit('update:dialog', v)">
    <section>
      <h1>Settings</h1>
      <section>
        <h2>Sentence Boundary Detection</h2>
        <p>
          <label>
            <input type="checkbox" value="halfwidthDotSpace" v-model="settingsSelection" />
            <span class="code">.&nbsp;</span> <span class="note">(half-width dot followed a space)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="halfwidthDotDoubleQuotationSpace" v-model="settingsSelection" />
            <span class="code">."&nbsp;</span> <span class="note">(half-width dot followed a double quotation and a
              space)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="halfwidthDotSingleQuotationSpace" v-model="settingsSelection" />
            <span class="code">.'&nbsp;</span> <span class="note">(half-width dot followed a single quotation and a
              space)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="fullwidthDot" v-model="settingsSelection" />
            <span class="code">&#xff0e</span> <span class="note">(full-width dot)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="fullwidthSmallCircle" v-model="settingsSelection" />
            <span class="code">。</span> <span class="note">(full-width small circle)</span>
          </label>
        </p>
      </section>
    </section>
  </ModalWindow>
</template>

<style scoped lang="scss">
label {
  cursor: pointer;

  input {
    cursor: pointer;
  }
}

.code {
  margin-left: 4px;
  background-color: #efefef;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
}

.note {
  font-size: small;
}
</style>
