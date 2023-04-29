<!-- Позже нужно переделать этот компонент -->

<template lang="">
    <n-space justify="center">
      <n-button>
        <template #icon>
          <n-icon>
              <book-outlined/>
          </n-icon>
        </template>
      </n-button>
      <n-button>
        <template #icon>
          <div class="circle"></div>
        </template>
      </n-button>
    </n-space>
</template>

<script lang="ts">
    import {
        BookOutlined
    } from '@vicons/antd'
    export default {
        components: {
            BookOutlined
        }
    }
</script>

<style scoped>
    .circle {
        width: 10px;
        height: 10px;
        background-color: gold;
        border-radius: 50px;
    }
</style>