<script setup lang="ts">
const props = withDefaults(defineProps<{
  disabled?: boolean
  destroy?: boolean
}>(), {
  disabled: false,
  destroy: false
})

const classes = computed(() => {
  const list = ['rounded-button']
  if (props.destroy) list.push('rounded-button--destroy')
  return list
})
</script>

<template>
  <button :class="classes.join(' ')" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.rounded-button {
  height: 36px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border-radius: 18px;
  outline: 0;
  border: 0;
  padding: 0 16px;
  background-color: #fcfcfc;
  box-shadow: 1px 1px 2px lightgray;
  cursor: pointer;

  &--destroy {
    background-color: crimson;
    color: white;
  }

  &[disabled] {
    cursor: default;
    opacity: 0.2;
  }

  &:not([disabled]) {
    &:hover {
      box-shadow: 2px 2px 4px gray;
    }

    &:active {
      box-shadow: 1px 1px 2px gray;
    }
  }

  &+.rounded-button {
    margin-left: 4px;
  }
}
</style>
