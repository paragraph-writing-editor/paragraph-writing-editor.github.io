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
  'topic-sentences-only',
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
      <RoundedButton @click="changeMenu">
        <SwapHorizontal /><span class="label">{{ label }}</span>
      </RoundedButton>
    </div>
    <div class="workspace">
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

    .material-design-icon {
      opacity: 25%;

      &+.label {
        margin-left: 4px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }

    &>*:hover .material-design-icon {
      opacity: 80%;
    }
  }

  .workspace {
    height: calc(100% - 48px);
  }
}
</style>
