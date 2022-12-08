import { Ref } from 'vue'
import { getSettings, setSettings, objectSettingsToArray, arraySettingsToObject } from '../utils/settingsAccess'

export type SentenceBoundaryDetectionSettings = {
  halfwidthDotSpace: boolean
  halfwidthDotDoubleQuotationSpace: boolean
  halfwidthDotSingleQuotationSpace: boolean
  fullwidthDot: boolean
  fullwidthSmallCircle: boolean
}

export default function useSentenceBoundaryDetectionSettings(): {
  settings: Ref<SentenceBoundaryDetectionSettings>
  settingsSelection: Ref<string[]>
} {
  const settings = useState('setting.sentenceBoundaryDetection', () =>
    getSettings('sentenceBoundaryDetection', {
      halfwidthDotSpace: true,
      halfwidthDotDoubleQuotationSpace: true,
      halfwidthDotSingleQuotationSpace: true,
      fullwidthDot: true,
      fullwidthSmallCircle: true,
    } as SentenceBoundaryDetectionSettings)
  )

  const settingsSelection = ref(objectSettingsToArray(settings.value))
  watch(settingsSelection, (newSettings, _) => {
    settings.value = arraySettingsToObject(newSettings, settings.value)
    setSettings('sentenceBoundaryDetection', settings.value)
  })

  return { settings, settingsSelection }
}
