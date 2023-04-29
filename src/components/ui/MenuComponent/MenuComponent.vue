<template lang="">
    <n-space vertical>
        <n-menu
            v-model:value="activeKey"
            :collapsed="false"
            :collapsed-width="64"
            :collapsed-icon-size="15"
            :options="menuOptions"
        />
    </n-space>
</template>

<script lang="ts">
    import { defineComponent, h, ref } from 'vue'
    import type { Component } from 'vue'
    import { NIcon } from 'naive-ui'
    import type { MenuOption } from 'naive-ui'
    import {
        MailOutlined,
        MailFilled,
        DeleteOutlined,
        CloseCircleOutlined,
    } from '@vicons/antd'
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
        },
    ]

    export default defineComponent({
        setup() {
            return {
                activeKey: ref<string | null>(null),
                collapsed: ref(true),
                menuOptions
            }
        }
    })
</script>

<style lang="">
    
</style>