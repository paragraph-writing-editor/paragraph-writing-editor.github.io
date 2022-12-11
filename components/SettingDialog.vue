<script setup lang="ts">
const props = defineProps<{
  dialog: boolean
}>()

const emit = defineEmits<{
  (e: 'update:dialog', value: boolean): void
}>()

const { settingsSelection: sentenceBoundaryDetection } = useSentenceBoundaryDetectionSettings()
const { settingsSelection: lineDetection } = useLineDetectionSettings()
</script>

<template>
  <ModalWindow :dialog="props.dialog" @update:dialog="(v: boolean) => emit('update:dialog', v)">
    <section>
      <h1>Configuration</h1>
      <section>
        <h2>Sentence Boundary Detection</h2>
        <p>
          <label>
            <input type="checkbox" value="halfwidthDotSpace" v-model="sentenceBoundaryDetection" />
            <span class="code">.&nbsp;</span> <span class="note">(half-width dot followed a space)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="halfwidthDotDoubleQuotationSpace" v-model="sentenceBoundaryDetection" />
            <span class="code">."&nbsp;</span> <span class="note">(half-width dot followed a double quotation and a
              space)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="halfwidthDotSingleQuotationSpace" v-model="sentenceBoundaryDetection" />
            <span class="code">.'&nbsp;</span> <span class="note">(half-width dot followed a single quotation and a
              space)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="fullwidthDot" v-model="sentenceBoundaryDetection" />
            <span class="code">&#xff0e</span> <span class="note">(full-width dot)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="fullwidthSmallCircle" v-model="sentenceBoundaryDetection" />
            <span class="code">。</span> <span class="note">(full-width small circle)</span>
          </label>
        </p>
      </section>
      <section>
        <h2>Line Detection</h2>
        <p>
          <label>
            <input type="checkbox" value="latexStyle" v-model="lineDetection" />
            LaTeX/TeX style <span class="note">(such as <span class="code">\section{<i>headline</i>}</span>)</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="markdonwStyle" v-model="lineDetection" />
            Markdown style <span class="note">(such as <span class="code"># <i>headline</i></span>)</span>
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
