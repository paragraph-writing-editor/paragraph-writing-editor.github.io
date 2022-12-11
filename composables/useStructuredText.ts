import { Ref, ComputedRef } from 'vue';
import TextLineDetection from '~~/models/TextLineDetection';
import TextStructureComposer from '~~/models/TextStructureComposer';
import TextStructureElement from '~~/models/TextStructureElement';
import { LineDetectionSettings } from './useLineDetectionSettings';
import { SentenceBoundaryDetectionSettings } from './useSentenceBoundaryDetectionSettings';

export default function useStructuredText(
  text: Ref<string>,
  config: {
    sentenceBoundaryDetectionSettings: Ref<SentenceBoundaryDetectionSettings>,
    lineDetectionSettings: Ref<LineDetectionSettings>
  }
): {
  structure: ComputedRef<TextStructureElement[]>
} {
  const structure = computed(() => {
    const detections = [
      config.sentenceBoundaryDetectionSettings.value.halfwidthDotSpace
        ? (text: string) => text.replace(/(\. )/g, '$1\n') : (text: string) => text,
      config.sentenceBoundaryDetectionSettings.value.halfwidthDotDoubleQuotationSpace
        ? (text: string) => text.replace(/(\.\" )/g, '$1\n') : (text: string) => text,
      config.sentenceBoundaryDetectionSettings.value.halfwidthDotSingleQuotationSpace
        ? (text: string) => text.replace(/(\.\' )/g, '$1\n') : (text: string) => text,
      config.sentenceBoundaryDetectionSettings.value.fullwidthDot // NOTE: U+ff0e (full-width dot)
        ? (text: string) => text.replace(/(\uff0e)/g, '$1\n') : (text: string) => text,
      config.sentenceBoundaryDetectionSettings.value.fullwidthSmallCircle
        ? (text: string) => text.replace(/(。)/g, '$1\n') : (text: string) => text,
    ]
    const composer = new TextStructureComposer(config.lineDetectionSettings.value)
    text.value
      .trim()
      .replace(/\n\n+/g, '\n\n')
      .split('\n')
      .map((line) => TextLineDetection
        .config(config.lineDetectionSettings.value)
        .detect(line)
        .isParagraphingComposition()
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
