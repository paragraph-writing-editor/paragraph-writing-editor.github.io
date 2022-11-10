<script setup lang="ts">
const props = withDefaults(defineProps<{
  small?: boolean
  transparent?: boolean
}>(),{
  small: false,
  transparent: false
})

const classes = computed(() => {
  const list = ['icon-button']
  if (props.small) list.push('icon-button--small')
  if (props.transparent) list.push('icon-button--transparent')
  return list
})
</script>

<template>
  <button :class="classes.join(' ')">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.icon-button {
  width: 36px;
  height: 36px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border-radius: 50%;
  outline: 0;
  border: 0;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #fcfcfc;
    box-shadow: 2px 2px 4px gray;
  }

  &:active {
    box-shadow: 1px 1px 2px gray;
  }

  &+.icon-button {
    margin-left: 4px;
  }

  &--small {
    width: 24px;
    height: 24px;

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }

  &--transparent {
    background-color: inherit;
    box-shadow: 0.5px 0.5px 2px gray;

    &:hover {
      background-color: inherit;
    }
  }
}
</style>
