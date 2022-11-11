<script setup lang="ts">
import InformationVariant from 'vue-material-design-icons/InformationVariant.vue';

const dialog = ref(false)
const openDialog = () => {
  dialog.value = true
}
</script>

<template>
  <div>
    <div class="layout">
      <div class="title">
        <h1 class="name">Paragraph Writing Editor</h1>
        <span class="description">A tool for improving your writing.</span>
        <span class="spacer"></span>
        <span class="menu">
          <IconButton aria-label="informations" data-balloon-pos="left" small transparent @click="openDialog">
            <InformationVariant fillColor="white" />
          </IconButton>
        </span>
      </div>
      <div class="main">
        <slot></slot>
      </div>
    </div>
    <ModalWindow v-model:dialog="dialog">
      <section>
        <h2>How to use</h2>
        <ol>
          <li>Write on the left page.</li>
          <li>Review on the right page.</li>
          <li>Feedback to the left page.</li>
        </ol>
        <p>Good luck!</p>
      </section>
      <section>
        <h2>Contact me</h2>
        <p>Contact me if you have any questions.</p>
        <ul>
          <li><a href="https://twitter.com/fukuchiharuki">Twitter</a></li>
        </ul>
      </section>
    </ModalWindow>
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

  &>.main {
    height: calc(100vh - 48px);
  }

  &>.title {
    box-sizing: border-box;
    height: 48px;
    padding: 8px;
    display: inline-flex;
    align-items: center;
    color: white;
    background-color: lightgray;

    &>.spacer {
      flex-grow: 1;
    }

    &>.name {
      margin: 0 0 0 4px;
      font-size: inherit;
      font-weight: bold;
      letter-spacing: 1px;
      font-style: oblique;
    }

    &>.description {
      margin-left: 20px;
      font-size: small;
    }

    &>.menu {
      padding-right: 8px;
    }
  }
}
</style>
