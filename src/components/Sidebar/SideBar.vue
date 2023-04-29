<template>
  <div class="sidebarWrap">
    <ButtonGroup />
    <MenuComponent />
    <ButtonGroup2 />
  </div>
</template>

<script lang="ts">
import ButtonGroup from '../ui/ButtonGroup/ButtonGroup.vue'
import MenuComponent from '../ui/MenuComponent/MenuComponent.vue'
import ButtonGroup2 from '../ui/ButtonGroup2/ButtonGroup2.vue'
import { defineComponent, h, ref } from 'vue'
import type { Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { MailOutlined, MailFilled, DeleteOutlined, CloseCircleOutlined } from '@vicons/antd'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: 'Входящие',
    key: 'Incoming',
    icon: renderIcon(MailOutlined)
  },
  {
    label: 'Рассылки',
    key: 'Mailing',
    icon: renderIcon(MailFilled)
  },
  {
    label: 'Удалённые',
    key: 'Deleted',
    icon: renderIcon(DeleteOutlined)
  },
  {
    label: 'Спам',
    key: 'Spam',
    icon: renderIcon(CloseCircleOutlined)
  }
]

export default defineComponent({
  components: {
    ButtonGroup,
    MenuComponent,
    ButtonGroup2
  },
  setup() {
    return {
      activeKey: ref<string | null>(null),
      collapsed: ref(true),
      menuOptions
    }
  }
})
</script>

<style scoped>
.sidebarWrap {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
</style>
