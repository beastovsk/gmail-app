<template>
  <div class="container">
    <Sidebar />
    <MailBoxVue />
  </div>
</template>

<script lang="ts">
import MailBoxVue from '../MailBox/MailBox.vue'
import Sidebar from '../Sidebar/SideBar.vue'

export default {
  data() {
    return {}
  },
  components: {
    Sidebar,
    MailBoxVue
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 80vh;
  margin: 10px;
  padding: 20px 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 2px rgba(58, 66, 75, 0.1), 0 2px 4px rgba(58, 66, 75, 0.2);
}
</style>
