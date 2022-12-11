import { Ref } from 'vue'
import {
  getSettings,
  setSettings,
  objectSettingsToArray,
  arraySettingsToObject
} from '../operations/settingsAccess'

export type LineDetectionSettings = {
  latexStyle: boolean
  markdonwStyle: boolean
}

export default function useLineDetectionSettings(): {
  settings: Ref<LineDetectionSettings>
  settingsSelection: Ref<string[]>
} {
  const settings = useState('setting.lineDetection', () =>
    getSettings('lineDetection', {
      latexStyle: true,
      markdonwStyle: true,
    } as LineDetectionSettings)
  )

  const settingsSelection = ref(objectSettingsToArray(settings.value))
  watch(settingsSelection, (newSettings, _) => {
    settings.value = arraySettingsToObject(newSettings, settings.value)
    setSettings('lineDetection', settings.value)
  })

  return { settings, settingsSelection }
}
