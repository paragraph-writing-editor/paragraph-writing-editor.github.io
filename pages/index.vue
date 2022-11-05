<script setup lang="ts">
const text = ref('')

const structure = computed(() => {
  console.log('computed')
  return text.value
    // sections
    .trim()
    .replace(/\n\n+/g, '\n\n')
    .split('\n\n')
    // sentences
    .map((it) => {
      return it
        .replace(/。/g, '。\n')
        .trim()
        .split('\n')
        .filter((s) => s.length)
    })
})

const clearText = () => {
  text.value = ''
}

const pasteText = async () => {
  const clipboard = await navigator.clipboard.readText()
  if (clipboard.trim().length > 0) {
    text.value +=
      (text.value.trim() == '' ? '' : '\n\n') +
      clipboard.replace(/\r\n/g, '\n').trim()
  }
}

const copyText = () => {
  if (text.value.trim().length > 0)
    navigator.clipboard.writeText(text.value)
      .then(() => window.alert("text was copied to clipboard"))
}

// DEBUG:
watchEffect(() => console.log(text.value))
watchEffect(() => console.log(structure.value))
</script>

<template>
  <NuxtLayout>
    <DoubleSpread>
      <template v-slot:left-page>
        <ToolBar @new-click="clearText" @paste-click="pasteText" @copy-click="copyText">
          <WriteDownArea v-model="text" />
        </ToolBar>
      </template>
      <template v-slot:right-page>
        <TopicSentenceHighlightView :model-value="structure" />
      </template>
    </DoubleSpread>
  </NuxtLayout>
</template>
