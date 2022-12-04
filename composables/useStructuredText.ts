import { Ref, ComputedRef } from 'vue';
import TextStructureComposer from '~~/models/TextStructureComposer';
import TextStructureElement from '~~/models/TextStructureElement';
import { SentenceBoundaryDetectionSettings } from './useSentenceBoundaryDetectionSettings';

export default function useStructuredText(
  text: Ref<string>,
  settings: Ref<SentenceBoundaryDetectionSettings>
): {
  structure: ComputedRef<TextStructureElement[]>
} {
  const structure = computed(() => {
    const composer = new TextStructureComposer()
    text.value
      .trim()
      .replace(/\n\n+/g, '\n\n')
      .split('\n')
      .forEach((it) => {
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
        detections
          .reduce((acc, fn) => fn(acc), it)
          .trim()
          .split('\n')
          .map((s) => s.trim())
          .forEach((s) => composer.compose(s))
      })
    return composer.elements
  })

  return { structure }
}
