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
  navigator.clipboard.writeText(text.value)
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
