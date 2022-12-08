const SETTING_PREFIX = 'setting'

export function getSettings<T>(category: string, defaultSettings: T): T {
  const categoryPrefix = `${SETTING_PREFIX}.${category}`
  const ret = { ...defaultSettings }
  Object.keys(localStorage)
    .filter((key: string) => key.startsWith(categoryPrefix))
    .forEach((key) => {
      if (typeof ret[key.substring(categoryPrefix.length + 1)] === 'boolean')
        ret[key.substring(categoryPrefix.length + 1)] = isTrue(localStorage.getItem(key))
      else
        ret[key.substring(categoryPrefix.length + 1)] = localStorage.getItem(key)
    })
  return ret
}

export function setSettings(category: string, settings: object) {
  for (const item in settings)
    localStorage.setItem(`${SETTING_PREFIX}.${category}.${item}`, settings[item])
}

export function objectSettingsToArray(settings: object): string[] {
  return Object.keys(settings).filter((item) => settings[item])
}

export function arraySettingsToObject<T>(settings: string[], src: T): T {
  const ret = { ...src } as object
  for (const item in ret) ret[item] = settings.includes(item)
  return ret as T
}

function isTrue(value: boolean | string): boolean {
  if (value === true) return true
  if (value === 'true') return true
  return false
}
