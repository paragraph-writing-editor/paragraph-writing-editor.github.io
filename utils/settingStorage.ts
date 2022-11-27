const SETTING_PREFIX = 'setting'

export function getSettings(category: string, defaultSettings: object = {}): object {
  const categoryPrefix = `${SETTING_PREFIX}.${category}`
  const ret = { ...defaultSettings }
  Object.keys(localStorage)
    .filter((key: string) => key.startsWith(categoryPrefix))
    .forEach((key) => ret[key.substring(categoryPrefix.length + 1)] = localStorage.getItem(key))
  return ret
}

export function setSettings(category: string, settings: object) {
  for (const item in settings)
    localStorage.setItem(`${SETTING_PREFIX}.${category}.${item}`, settings[item])
}

export function objectSettingsToArray(settings: object): string[] {
  return Object.keys(settings).filter((item) => isTrue(settings[item]))
}

export function arraySettingsToObject(settings: string[], src: object = {}): object {
  const ret = { ...src }
  for (const item in ret) ret[item] = settings.includes(item)
  return ret
}

function isTrue(value: boolean | string): boolean {
  if (value === true) return true
  if (value === 'true') return true
  return false
}
