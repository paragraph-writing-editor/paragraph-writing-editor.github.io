import { Ref, ComputedRef } from 'vue';
import TextLineDetection from '~~/models/TextLineDetection';
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
    text.value
      .trim()
      .replace(/\n\n+/g, '\n\n')
      .split('\n')
      .map((line) => TextLineDetection.detect(line).isParagraphingComposition()
        ? detections.reduce((acc, fn) => fn(acc), line)
        : line
      )
      .flatMap((block) => block.trim().split('\n'))
      .map((s) => s.trim())
      .forEach((s) => composer.compose(s))
    return composer.elements
  })

  return { structure }
}
