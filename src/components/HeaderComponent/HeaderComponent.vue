<template>
  <div class="container">
    <div class="logo">
      <h2>Not Gmail</h2>
      <n-input suffix="fdsf" type="text" placeholder="Поиск" class="input"
        ><template #suffix>
          <n-icon class="search-icon" size="18" :component="SearchOutlined" /> </template
      ></n-input>
    </div>
    <div class="accounts">
      <div v-for="creator in creatorsList" class="creator">
        <n-icon size="32" :component="GithubFilled" />
        <p>{{ creator.label }}</p>
      </div>
    </div>

    <n-popover class="popover" trigger="click">
      <template #trigger>
        <div class="profile">
          <p>Profile</p>
          <div class="image"></div>
        </div>
      </template>
      <div class="body">
        <div class="current-profile">
          <div class="image"></div>
          <div class="info">
            <p class="name">Name Surname</p>
            <p class="email">surname@yandex.ru</p>
          </div>
        </div>
        <div class="add-profile">
          <div class="add-icon"><n-icon size="30" :component="UserAddOutlined" /></div>
          <div class="info">
            <p class="name">Добавить пользователя</p>
          </div>
        </div>
      </div>
    </n-popover>
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from 'vue'
import { NPopover, NInput, NIcon } from 'naive-ui'

import { SearchOutlined, GithubFilled, UserAddOutlined } from '@vicons/antd'

export default {
  components: {
    NPopover,
    NInput,
    NIcon
  },
  setup() {
    return { SearchOutlined, GithubFilled, UserAddOutlined }
  },
  data() {
    return {
      creatorsList: [
        { id: 0, label: 'TimTi01' },
        { id: 1, label: 'beastovsk' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  // justify-content: space-between;
  padding: 10px 40px;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  margin-right: 50px;

  h2 {
    margin-right: 30px;
    font-size: 24px;
    width: 40%;
    white-space: nowrap;
  }
}
.input {
  background-color: rgba(107, 135, 175, 0.15) !important;
  padding: 5px 20px;
  border: none;
  font-size: 16px;
  border-radius: 30px;
}
.search-icon {
  cursor: pointer;
}
.accounts {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.creator {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile {
  width: 30%;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  p {
    font-size: 18px;
  }
}
.image {
  background: #000;
  border-radius: 100%;
  width: 50px;
  height: 50px;
}
.body {
  width: 400px;
  padding: 10px 30px;
}
.current-profile {
  display: flex;
  align-items: center;
  gap: 20px;
}
.info {
  gap: 10px;

  p {
    font-size: 16px;
  }
}
.name {
  font-weight: bold;
}
.email {
  color: rgb(108, 108, 108);
}
.add-profile {
  cursor: pointer;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.add-icon {
  padding: 10px;
  background: rgb(236, 236, 236);
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
</style>
