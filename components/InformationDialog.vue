<script setup lang="ts">
const props = defineProps<{
  dialog: boolean
}>()

const emit = defineEmits<{
  (e: 'update:dialog', value: boolean): void
}>()
</script>

<template>
  <ModalWindow :dialog="props.dialog" @update:dialog="(v: boolean) => emit('update:dialog', v)">
    <section>
      <h1>How to use</h1>
      <ol>
        <li>Write on the left page.</li>
        <li>Review on the right page.</li>
        <li>Feedback to the left page.</li>
      </ol>
      <p>Good luck!</p>
    </section>
    <section>
      <h1>Contact me</h1>
      <p>Contact me if you have any questions.</p>
      <ul>
        <li><a href="https://twitter.com/fukuchiharuki">Twitter</a></li>
      </ul>
    </section>
  </ModalWindow>
</template>

<style scoped lang="scss">

</style>
