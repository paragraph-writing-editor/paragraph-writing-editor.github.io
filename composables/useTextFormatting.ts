import { Ref } from 'vue';
import TextLineDetection from '~~/models/TextLineDetection';
import { LineDetectionSettings } from './useLineDetectionSettings';
import { SentenceBoundaryDetectionSettings } from './useSentenceBoundaryDetectionSettings';

export default function useTextFormatting(
  text: Ref<string>,
  config: {
    sentenceBoundaryDetectionSettings: Ref<SentenceBoundaryDetectionSettings>,
    lineDetectionSettings: Ref<LineDetectionSettings>
  }
): {
  oneSentencePerLine: () => void
  oneParagraphPerLine: () => void
} {
  const oneSentencePerLine = () => {
    const detections = [
      config.sentenceBoundaryDetectionSettings.value.halfwidthDotSpace
        ? (text: string) => text.replace(/(\.) ([^\n])/g, '$1\n$2') : (text: string) => text,
      config.sentenceBoundaryDetectionSettings.value.halfwidthDotDoubleQuotationSpace
        ? (text: string) => text.replace(/(\.\") ([^\n])/g, '$1\n$2') : (text: string) => text,
      config.sentenceBoundaryDetectionSettings.value.halfwidthDotSingleQuotationSpace
        ? (text: string) => text.replace(/(\.\') ([^\n])/g, '$1\n$2') : (text: string) => text,
      config.sentenceBoundaryDetectionSettings.value.fullwidthDot // NOTE: U+ff0e (full-width dot)
        ? (text: string) => text.replace(/(\uff0e)([^\n])/g, '$1\n$2') : (text: string) => text,
      config.sentenceBoundaryDetectionSettings.value.fullwidthSmallCircle
        ? (text: string) => text.replace(/(。)([^\n])/g, '$1\n$2') : (text: string) => text,
    ]
    text.value = text.value
      .split('\n')
      .map((line) => TextLineDetection
        .config(config.lineDetectionSettings.value)
        .detect(line)
        .isParagraphingComposition()
        ? detections.reduce((acc, fn) => fn(acc), line)
        : line
      )
      .join('\n')
  }

  const oneParagraphPerLine = () => {
    var textResult: string = ''
    var textBuffer: string = ''
    text.value
      .split('\n')
      .forEach((line) => {
        if (TextLineDetection
          .config(config.lineDetectionSettings.value)
          .detect(line)
          .isParagraphingComposition()
        ) {
          textBuffer += `${line}\n`
        } else {
          textResult += paragraph(textBuffer)
          textBuffer = ''
          textResult += `${line}\n`
        }
      })
    text.value = (textResult + paragraph(textBuffer)).trimEnd()

    function paragraph(textBuffer: string): string {
      const detections = [
        // NOTE: half-width
        (text: string) => text.replace(/([ -~]) ?\n([^\n])/g, '$1 $2'),
        // NOTE: full-width (excluding line breaks)
        (text: string) => text.replace(/([^ -~\n]) ?\n([^\n])/g, '$1$2')
      ]
      return detections.reduce((acc, fn) => fn(acc), textBuffer)
    }
  }

  return {
    oneSentencePerLine,
    oneParagraphPerLine
  }
}
