import { Ref, ComputedRef } from 'vue';

export default function useFlatText(): {
  text: Ref<string>
  textEmpty: ComputedRef<boolean>
  clearText: () => void
} {
  const text = ref('')
  const textEmpty = computed(() => !text.value.trim().length)

  const clearText = () => { text.value = '' }

  return {
    text,
    textEmpty,
    clearText
  }
}
