export function ifNotNull<T, R>(value: T | null | undefined, fn: (value: T) => R): R | null {
  return (value != null) ? fn(value) : null
}

export function notNull<T, R>(value: T | null | undefined, fn: (value: T) => R): R | null {
  if (value == null) throw new Error('value must be not null')
  return fn(value)
}
