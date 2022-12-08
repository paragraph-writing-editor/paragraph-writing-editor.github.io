import { Ref } from 'vue';

export default function useClipboardText(text: Ref<string>): {
  loadFromClipboard: () => Promise<void>
  saveToClipboard: () => Promise<void>
} {
  const loadFromClipboard = async () => {
    const clipboard = await navigator.clipboard.readText()
    if (clipboard.trim().length > 0)
      text.value = clipboard.replace(/\r\n/g, '\n').trim()
  }

  const saveToClipboard = async () => {
    await navigator.clipboard.writeText(text.value)
  }

  return {
    loadFromClipboard,
    saveToClipboard
  }
}
