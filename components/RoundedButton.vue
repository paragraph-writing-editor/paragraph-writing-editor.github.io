<template>
  <button class="rounded-button">
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

  &:hover {
    color: inherit;
    box-shadow: 2px 2px 4px gray;
  }

  &:active {
    box-shadow: 1px 1px 2px gray;
  }

  &+.rounded-button {
    margin-left: 4px;
  }
}
</style>
