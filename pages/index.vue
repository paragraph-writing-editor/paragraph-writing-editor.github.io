<script setup lang="ts">
const text = ref('')

const clearText = () => {
  text.value = ''
}

const pasteText = async () => {
  text.value +=
    (text.value.trim() == '' ? '' : '\n\n') +
    await navigator.clipboard.readText()
}

const copyText = () => {
  if (text.value.trim().length > 0)
    navigator.clipboard.writeText(text.value)
      .then(() => window.alert("text was copied to clipboard"))
}

// DEBUG:
watchEffect(() => console.log(text.value))
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
        right
      </template>
    </DoubleSpread>
  </NuxtLayout>
</template>
