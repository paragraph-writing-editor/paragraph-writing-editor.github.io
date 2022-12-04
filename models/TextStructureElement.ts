export default class TextStructureElement {
  type: TextStructureElementType
  contents: string[]

  constructor(type: TextStructureElementType, text?: string) {
    this.type = type
    this.contents = text ? [text] : []
  }

  append(text: string) {
    this.contents.push(text)
  }

  isParagraph(): boolean {
    return this.type == TextStructureElementType.P
  }

  countSentences(): number {
    return this.contents.length
  }

  countCharacters(): number {
    return this.contents.reduce((acc, s) => acc + s.length, 0)
  }
}

export enum TextStructureElementType {
  BR = 'br',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  HR = 'hr',
  P = 'p',
}
