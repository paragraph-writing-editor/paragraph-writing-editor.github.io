<template>
  <div class="layout">
    <div class="title">
      <h1 class="name">Paragraph Writing Editor</h1>
      <span class="description">A tool for improving your writing.</span>
    </div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;

  .main {
    height: calc(100vh - 48px);
  }

  .title {
    box-sizing: border-box;
    height: 48px;
    padding: 8px;
    display: inline-flex;
    align-items: center;
    color: white;
    background-color: lightgray;

    .name {
      margin: 0;
      font-size: inherit;
      font-weight: bold;
      letter-spacing: 1px;
      font-style: oblique;
    }

    .description {
      margin-left: 20px;
      font-size: small;
    }
  }
}
</style>
