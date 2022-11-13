export function insertText(text: string) {
  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  range.deleteContents()
  const node = document.createTextNode(text)
  range.insertNode(node)
  selection.collapseToEnd()
}

export function extractText() {
  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const contents = range.extractContents()
  navigator.clipboard.writeText(contents.textContent)
}

export function moveCursor(node: Node, offset: number) {
  const range = document.createRange()
  const selection = window.getSelection()
  range.setStart(node, offset)
  range.collapse()
  selection.removeAllRanges()
  selection.addRange(range)
}
