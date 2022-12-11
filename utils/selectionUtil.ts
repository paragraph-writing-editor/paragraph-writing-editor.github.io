export function insertText(text: string) {
  ifNotNull(window.getSelection(), (selection) => {
    const range = selection.getRangeAt(0)
    range.deleteContents()
    const node = document.createTextNode(text)
    range.insertNode(node)
    selection.collapseToEnd()
  })
}

export function extractText() {
  ifNotNull(window.getSelection(), (selection) => {
    const range = selection.getRangeAt(0)
    const contents = range.extractContents()
    ifNotNull(contents.textContent, (textContent) => navigator.clipboard.writeText(textContent))
  })
}

export function moveCursor(node: Node | null, offset: number) {
  if (node == null) return
  ifNotNull(window.getSelection(), (selection) => {
    const range = document.createRange()
    range.setStart(node, offset)
    range.collapse()
    selection.removeAllRanges()
    selection.addRange(range)
  })
}
