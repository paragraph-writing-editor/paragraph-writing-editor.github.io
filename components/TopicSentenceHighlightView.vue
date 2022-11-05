<script setup lang="ts">
const props = defineProps<{
  modelValue: string[][]
}>()

const structure = computed(() => {
  return props.modelValue.map((it) => {
    if (it.length < 2) return it
    return [it[0]].concat([it.slice(1).join('')])
  })
})
</script>

<template>
  <div v-for="section in structure">
    <p>
      <span class="topic-sentence" v-if="section[0]">{{ section[0] }}</span>
      <span v-if="section[1]">{{ section[1] }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.topic-sentence {
  color:darkred;
  font-weight: bold;
}
</style>
