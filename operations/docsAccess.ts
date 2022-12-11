const DOC_SNAPSHOT_PREFIX = 'doc.snapshot'
const DOC_SNAPSHOT_SEPARATOR = '#'

export function getLatestDocSnapshotKey(): string | null {
  const snapshotKeys = getDocSnapshotKeys()
  if (snapshotKeys.length === 0) return null
  return snapshotKeys[0]
}

export function getDocSnapshotKeys(): string[] {
  return Object.keys(localStorage)
    .filter((key: string) => key.startsWith(DOC_SNAPSHOT_PREFIX))
    .sort((a: string, b: string) => b.localeCompare(a))
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

export function docSnapshotKeyToDate(key: string): Date {
  const time = Number(key.split(DOC_SNAPSHOT_SEPARATOR)[1])
  const date = new Date()
  date.setTime(time)
  return date
}

function validateDocSnapshotKey(key: string): boolean {
  return key.startsWith(DOC_SNAPSHOT_PREFIX + DOC_SNAPSHOT_SEPARATOR)
}
