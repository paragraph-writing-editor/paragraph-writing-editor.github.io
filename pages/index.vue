<script setup lang="ts">
const text = ref('')

// handlers
const clearText = () => {
  text.value = ''
}

// DEBUG:
watchEffect(() => console.log(text.value))
</script>

<template>
  <NuxtLayout>
    <DoubleSpread>
      <template v-slot:left-page>
        <ToolBar @new-click="clearText">
          <WriteDownArea v-model="text" />
        </ToolBar>
      </template>
      <template v-slot:right-page>
        right
      </template>
    </DoubleSpread>
  </NuxtLayout>
</template>
