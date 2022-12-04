import { Ref } from 'vue';
import TextLineDetection from '~~/models/TextLineDetection';
import { SentenceBoundaryDetectionSettings } from './useSentenceBoundaryDetectionSettings';

export default function useTextFormatting(
  text: Ref<string>,
  settings: Ref<SentenceBoundaryDetectionSettings>
): {
  oneSentencePerLine: () => void
  oneParagraphPerLine: () => void
} {
  const oneSentencePerLine = () => {
    const detections = [
      settings.value.halfwidthDotSpace
        ? (text: string) => text.replace(/(\.) ([^\n])/g, '$1\n$2') : (text: string) => text,
      settings.value.halfwidthDotDoubleQuotationSpace
        ? (text: string) => text.replace(/(\.\") ([^\n])/g, '$1\n$2') : (text: string) => text,
      settings.value.halfwidthDotSingleQuotationSpace
        ? (text: string) => text.replace(/(\.\') ([^\n])/g, '$1\n$2') : (text: string) => text,
      settings.value.fullwidthDot // NOTE: U+ff0e (full-width dot)
        ? (text: string) => text.replace(/(\uff0e)([^\n])/g, '$1\n$2') : (text: string) => text,
      settings.value.fullwidthSmallCircle
        ? (text: string) => text.replace(/(。)([^\n])/g, '$1\n$2') : (text: string) => text,
    ]
    text.value = text.value
      .split('\n')
      .map((line) => TextLineDetection.detect(line).isParagraphingComposition()
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
        if (TextLineDetection.detect(line).isParagraphingComposition()) {
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
