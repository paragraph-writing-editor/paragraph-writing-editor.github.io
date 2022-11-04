<script setup lang="ts">
const text = ref("")
// DEBUG:
watchEffect(() => console.log(text.value))
</script>

<template>
  <NuxtLayout>
    <DoubleSpread>
      <template v-slot:left-page>
        <WriteDownArea v-model="text" />
      </template>
      <template v-slot:right-page>
        right
      </template>
    </DoubleSpread>
  </NuxtLayout>
</template>
