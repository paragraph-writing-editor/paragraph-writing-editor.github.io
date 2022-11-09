export function endsWithSingleLf(target: HTMLDivElement) {
  return target.innerText == '\n' || target.innerText.match(/[^\n]\n$/)
}

export function trimTrailingLf(target: HTMLDivElement) {
  target.textContent = target.innerText.replace(/\n$/, '')
}
