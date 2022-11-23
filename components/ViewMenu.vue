<script setup lang="ts">
import SwapHorizontal from 'vue-material-design-icons/SwapHorizontal.vue';

const props = defineProps<{
  menu: string
}>()

const emit = defineEmits<{
  (e: 'update:menu', value: string): void
}>()

const menus = [
  'topic-sentence-highlights',
  'bulleted-topic-sentences',
]

onMounted(() => {
  if (props.menu) return
  const defaultMenu = menus[0]
  emit('update:menu', defaultMenu)
})

const label = computed(() => props.menu.replace(/-/g, ' '))

const changeMenu = () => {
  const index = menus.indexOf(props.menu) + 1
  emit('update:menu', menus[index % menus.length])
}
</script>

<template>
  <div class="view-menu-window">
    <div class="view-menu">
      <div class="imitation-button" @click="changeMenu">
        <SwapHorizontal /><span class="label">{{ label }}</span>
      </div>
    </div>
    <div class="view-space">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-menu-window {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .view-menu {
    height: 48px;
    display: flex;

    .imitation-button {
      height: 36px;
      align-items: center;
      display: inline-flex;
      justify-content: center;
      font-size: small;
      cursor: pointer;

      .material-design-icon {
        opacity: 25%;

        &+.label {
          margin-left: 4px;
        }
      }

      .label {
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      &:hover {
        .material-design-icon {
          opacity: 80%;
        }

        .label {
          text-decoration: underline;
        }
      }
    }
  }

  .view-space {
    height: calc(100% - 48px);
  }
}
</style>
