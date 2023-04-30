<template lang="">
  <n-modal :show="showModal">
    <n-card
      style="width: 600px"
      title="Modal"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header>
        <n-grid x-gap="12" :cols="5">
          <n-grid-item span="4">
            <n-space vertical>
              <n-select
                v-model:value="selectedValue"
                filterable
                placeholder="Кому:"
                :options="options"
              />
              <n-input
                placeholder="Тема:"
              />
            </n-space>
          </n-grid-item>

          <n-grid-item span="1">
            <n-button 
              @click="closeModal"
              quaternary 
              circle
            >
              <template #icon>
                <n-icon>
                  <close-outlined/>
                </n-icon>
              </template>
            </n-button>
          </n-grid-item>
        </n-grid>
      </template>

      <n-input
        v-model:value="value"
        type="textarea"
        placeholder="Напишите что-нибудь"
        bordered="false"
        :autosize="{
          minRows: 3
        }"
      />
      
      <template #footer>
        <n-button>
          Отправить
        </n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<script>
  import { ref } from 'vue'
  import {
    CloseOutlined
  } from '@vicons/antd'

  export default {
    components: {
      CloseOutlined,
    },

    props: {
      showModal: Boolean
    },

    methods: {
      showTest() {
        this.$emit('showT', this.showModal)
      },

      closeModal() {
        this.$emit('close-modal')
      }
    },

    setup () {
      return {
        selectedValue: ref(null),
        selectedValues: ref(null),
        value: ref(null),
        options: [
          {
            label: 'Email 1',
            value: 'user1'
          },
          {
            label: 'Email 2',
            value: 'user2'
          }
        ]
      }
    }
  }
</script>

<style lang="">
    
</style>