<template>
  <div class="pages">
    <div class="left-page">
      <slot name="left-page"></slot>
    </div>
    <div class="right-page">
      <slot name="right-page"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pages {
  display: flex;
  height: 100vh;

  &>* {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 8px;
  }
}
</style>