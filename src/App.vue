
<script lang="ts">
import Header from '@/components/Header/Header.vue'
import Sidebar from './components/Sidebar/Sidebar.vue';

export default {
  setup() {
    components: {
      Header,Sidebar
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: { Header }
}
</script>

<template>
  <Header />
  <Sidebar/>
</template>

<style scoped></style>

