<script setup lang="ts">
import Cog from 'vue-material-design-icons/CogOutline.vue';
import InformationVariant from 'vue-material-design-icons/InformationVariant.vue';

const informationDialog = ref(false)
const openInformationDialog = () => {
  informationDialog.value = true
}

const settingDialog = ref(false)
const openSettingDialog = () => {
  settingDialog.value = true
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
          <IconButton aria-label="informations" data-balloon-pos="up" small transparent @click="openInformationDialog">
            <InformationVariant fillColor="white" />
          </IconButton>
          <IconButton aria-label="settings" data-balloon-pos="up" small transparent @click="openSettingDialog">
            <Cog fillColor="white" />
          </IconButton>
        </span>
      </div>
      <div class="main">
        <slot></slot>
      </div>
    </div>
    <ModalWindow v-model:dialog="informationDialog">
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
    <ModalWindow v-model:dialog="settingDialog">
      <section>
        <h1>Settings</h1>
        <section>
          <h2>Sentence Boundary Detection</h2>
          <p>
            <label>
              <input type="checkbox" />
              <span class="code">.&nbsp;</span> <span class="note">(half-width dot followed a space)</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span class="code">."&nbsp;</span> <span class="note">(half-width dot followed a double quotation and a
                space)</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span class="code">.'&nbsp;</span> <span class="note">(half-width dot followed a single quotation and a
                space)</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span class="code">&#xff0e</span> <span class="note">(full-width dot)</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span class="code">。</span> <span class="note">(full-width small circle)</span>
            </label>
          </p>
        </section>
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
      padding-right: 24px;

      button+button {
        margin-left: 8px;
      }
    }
  }
}

.code {
  margin-left: 4px;
  background-color: #efefef;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
}

.note {
  font-size: small;
}
</style>
