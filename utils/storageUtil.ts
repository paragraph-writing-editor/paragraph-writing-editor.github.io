const DOC_SNAPSHOT_PREFIX = 'doc.snapshot'
const DOC_SNAPSHOT_SEPARATOR = '#'

export function getLatestDocSnapshotKey(): string | null {
  const snapshotKeys = Object.keys(localStorage)
    .filter((key: string) => key.startsWith(DOC_SNAPSHOT_PREFIX))
    if (snapshotKeys.length === 0) return null
  const latestTime = snapshotKeys
    .map((key: string) => Number(key.split('#')[1]))
    .sort((a: number, b: number) => b - a)[0]
  return DOC_SNAPSHOT_PREFIX + DOC_SNAPSHOT_SEPARATOR + latestTime
}

export function getDocSnapshot(key: string): string | null {
  if (!validateDocSnapshotKey(key)) return null
  return localStorage.getItem(key)
}

export function postDocSnapshot(text: string) {
  const time = new Date().getTime()
  localStorage.setItem(DOC_SNAPSHOT_PREFIX + DOC_SNAPSHOT_SEPARATOR + time, text);
}

export function deleteDocSnapshots(keys: string[]) {
  keys.forEach((key: string) => {
    if (validateDocSnapshotKey(key)) localStorage.removeItem(key)
  })
}

function validateDocSnapshotKey(key: string): boolean {
  return key.startsWith(DOC_SNAPSHOT_PREFIX + DOC_SNAPSHOT_SEPARATOR)
}
