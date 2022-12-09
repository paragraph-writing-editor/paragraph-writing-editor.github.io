export function ifNotNull<T, R>(value: T | null | undefined, fn: (value: T) => R): R | null {
  return (value != null) ? fn(value) : null
}
