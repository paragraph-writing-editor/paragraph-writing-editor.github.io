<script setup lang="ts">
const text = ref("")
// DEBUG:
watchEffect(() => console.log(text.value))
</script>

<template>
  <NuxtLayout>
    <Spread>
      <template v-slot:left-page>
        <WriteDownPage v-model:text="text" />
      </template>
      <template v-slot:right-page>
        right
      </template>
    </Spread>
  </NuxtLayout>
</template>
