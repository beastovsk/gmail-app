<template lang="">
  <n-space justify="center">
    <n-button 
      round 
      type="warning"
      @click="showModal = true"
    >
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

  <modal-component 
    :show="showModal" 
    @close-modal="showModal = false" 
  />
  
</template>

<script lang="ts">
  import ModalComponent from '../Modal/ModalComponent.vue'
  import { defineComponent, ref } from 'vue'
  import {
      ReloadOutlined,
      SendOutlined,
  } from '@vicons/antd'

  export default defineComponent ({
    components: {
      ReloadOutlined,
      SendOutlined,
      ModalComponent,
    },

    setup () {
      const showModal = ref(false)

      return {
        showModal,
      }
    },
  })


</script>

<style lang="">
    
</style>