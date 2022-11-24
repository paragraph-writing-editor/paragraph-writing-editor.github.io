<script setup lang="ts">
import { useDebounceFn } from '@vueuse/shared';

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

/* NOTE:
 * innerText: to determin if changes have been made
 * areaRef:   to focus after reflection
 */
const innerText = ref(props.modelValue)
const areaRef = ref(null)
const { modelValue } = toRefs(props)
watch(modelValue, (newValue, oldValue) => {
  const propsChange = () => newValue != oldValue
  const valueChange = () => innerText.value != newValue
  if (propsChange() && valueChange()) {
    innerText.value = newValue
    nextTick(() => areaRef.value.focus())
  }
})

const inputText = useDebounceFn(() => {
  emit('update:modelValue', innerText.value)
})
</script>

<template>
  <div class="lite-textarea">
    <textarea placeholder="Write down here." ref="areaRef" v-model="innerText" @input="inputText"></textarea>
  </div>
</template>

<style scoped lang="scss">
.lite-textarea {
  width: 100%;
  height: 100%;

  textarea {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;

    &::placeholder {
      color: lightgray;
    }
  }
}

textarea {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  padding: 0;
  outline: 0;
  border: 0;
}

textarea {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
