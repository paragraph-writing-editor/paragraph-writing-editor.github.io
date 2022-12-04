import TextLineDetection from "./TextLineDetection"
import TextStructureElement from "./TextStructureElement"
import TextStructureStatusAction from "./TextStructureStatusAction"

export default class TextStructureComposer {
  status: TextStructureStatus
  elements: TextStructureElement[]
  action: TextStructureStatusAction

  constructor() {
    this.status = TextStructureStatus.BEGIN
    this.elements = []
    this.action = new TextStructureStatusAction()
  }

  compose(line: string) {
    const detection = TextLineDetection.detect(line)
    const nextStatus = this.nextStatus(detection)
    this.doAction(nextStatus, detection)
    this.status = nextStatus
  }

  private nextStatus(detection: TextLineDetection): TextStructureStatus {
    return detection.isLineBreak()
      ? TextStructureStatus.BEGIN
      : detection.isSingleLineComposition()
        ? TextStructureStatus.SINGLE_LINE_COMPOSITION
        : TextStructureStatus.PARAGRAPHING_COMPOSITION
  }

  private doAction(nextStatus: TextStructureStatus, detection: TextLineDetection) {
    if (this.status != nextStatus)
      this.action.entry(this.elements, detection)
    else
      this.action.do(this.elements, detection)
  }
}

export enum TextStructureStatus {
  BEGIN = 'BEGIN',
  SINGLE_LINE_COMPOSITION = 'SINGLE_LINE_COMPOSITION',
  PARAGRAPHING_COMPOSITION = 'PARAGRAPHING_COMPOSITION',
}
