<template lang="">
  <n-space justify="center">
    <n-button round type="warning">
        <template #icon>
            <n-icon>
                <send-outlined/>
            </n-icon>
        </template>
        Написать
    </n-button>
    <n-button circle type="warning">
      <template #icon>
        <n-icon>
            <reload-outlined/>
        </n-icon>
      </template>
    </n-button>
  </n-space>
</template>

<script lang="ts">
    import {
        ReloadOutlined,
        SendOutlined,
    } from '@vicons/antd'
    export default {
        components: {
            ReloadOutlined,
            SendOutlined,
        }
    }
</script>

<style lang="">
    
</style>