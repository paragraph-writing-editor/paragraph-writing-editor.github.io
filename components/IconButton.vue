<template>
  <button class="icon-button">
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
}
</style>
