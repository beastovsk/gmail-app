<template lang="">
  <n-modal :show="this.$store.state.open">
    <n-card
      style="width: 600px"
      title="Modal"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      on-mask-click="this.$store.commit('setClose')"
      :mask-closable="true"
      :close-on-esc="true"
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
              <n-input placeholder="Тема:" />
            </n-space>
          </n-grid-item>

          <n-grid-item span="1">
            <n-button @click="$store.state.open = false" quaternary circle>
              <template #icon>
                <n-icon>
                  <close-outlined />
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
        <n-button> Отправить </n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<script>
import { CloseOutlined } from '@vicons/antd'

export default {
  components: {
    CloseOutlined
  },
  setup() {
    return {
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

<style lang=""></style>
