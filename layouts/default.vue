<script setup lang="ts">
import Cog from 'vue-material-design-icons/CogOutline.vue';
import InformationVariant from 'vue-material-design-icons/InformationVariant.vue';

const informationDialog = ref(false)
const openInformationDialog = () => {
  informationDialog.value = true
}

const configurationDialog = ref(false)
const openConfigurationDialog = () => {
  configurationDialog.value = true
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
          <IconButton aria-label="Configuration" data-balloon-pos="up" small transparent @click="openConfigurationDialog">
            <Cog fillColor="white" />
          </IconButton>
          <IconButton aria-label="Informations" data-balloon-pos="left" small transparent
            @click="openInformationDialog">
            <InformationVariant fillColor="white" />
          </IconButton>
        </span>
      </div>
      <div class="main">
        <slot></slot>
      </div>
    </div>
    <InformationDialog v-model:dialog="informationDialog" />
    <ConfigurationDialog v-model:dialog="configurationDialog" />
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

      button+button {
        margin-left: 8px;
      }
    }
  }
}
</style>
