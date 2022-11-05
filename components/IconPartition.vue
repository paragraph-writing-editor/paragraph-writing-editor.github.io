<template>
  <button class="icon-partition">
      <slot>|</slot>
  </button>
</template>

<style scoped lang="scss">
.icon-partition {
  width: 18px;
  height: 36px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  outline: 0;
  border: 0;
  background-color: white;
  color: gray;
}
</style>
