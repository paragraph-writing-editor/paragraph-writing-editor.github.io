import { Ref, ComputedRef } from 'vue';
import { SentenceBoundaryDetectionSettings } from './useSentenceBoundaryDetectionSettings';

export default function useStructuredText(
  text: Ref<string>,
  settings: Ref<SentenceBoundaryDetectionSettings>
): {
  structure: ComputedRef<string[][]>
} {
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
          .map((s) => s.trim())
          .filter((s) => s.length)
      })
  })

  return { structure }
}
