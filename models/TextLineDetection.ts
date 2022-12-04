import { TextStructureElementType } from "./TextStructureElement"

export default class TextLineDetection {
  type: TextStructureElementType
  text?: string

  constructor(
    type: TextStructureElementType,
    text?: string
  ) {
    this.type = type
    this.text = text
  }

  static detect(line: string): TextLineDetection {
    return TextLineDetection.detectHeadline(line)
      || TextLineDetection.detectHorizon(line)
      || TextLineDetection.detectLineBreak(line)
      || new TextLineDetection(TextStructureElementType.P, line)
  }

  isLineBreak(): boolean {
    return this.type == TextStructureElementType.BR
  }

  isSingleLineComposition(): boolean {
    switch (this.type) {
      case TextStructureElementType.H1:
      case TextStructureElementType.H2:
      case TextStructureElementType.H3:
      case TextStructureElementType.H4:
      case TextStructureElementType.H5:
      case TextStructureElementType.H6:
      case TextStructureElementType.HR:
        return true
      default:
        return false
    }
  }

  isParagraphingComposition(): boolean {
    return !this.isLineBreak() && !this.isSingleLineComposition()
  }

  private static detectHeadline(line: string): TextLineDetection | null {
    if (line.match(/^#{1} /)) return new TextLineDetection(TextStructureElementType.H1, line.substring(2))
    if (line.match(/^#{2} /)) return new TextLineDetection(TextStructureElementType.H2, line.substring(3))
    if (line.match(/^#{3} /)) return new TextLineDetection(TextStructureElementType.H3, line.substring(4))
    if (line.match(/^#{4} /)) return new TextLineDetection(TextStructureElementType.H4, line.substring(5))
    if (line.match(/^#{5} /)) return new TextLineDetection(TextStructureElementType.H5, line.substring(6))
    if (line.match(/^#{6} /)) return new TextLineDetection(TextStructureElementType.H6, line.substring(7))
    return null
  }

  private static detectHorizon(line: string): TextLineDetection | null {
    if (line.match(/^\*\*\*/)) return new TextLineDetection(TextStructureElementType.HR)
    if (line.match(/^---/)) return new TextLineDetection(TextStructureElementType.HR)
    if (line.match(/^___/)) return new TextLineDetection(TextStructureElementType.HR)
    if (line.match(/^\* \* \*/)) return new TextLineDetection(TextStructureElementType.HR)
    if (line.match(/^- - -/)) return new TextLineDetection(TextStructureElementType.HR)
    if (line.match(/^_ _ _/)) return new TextLineDetection(TextStructureElementType.HR)
    return null
  }

  private static detectLineBreak(line: string): TextLineDetection | null {
    if (line.trim().length === 0) return new TextLineDetection(TextStructureElementType.BR)
    return null
  }
}
