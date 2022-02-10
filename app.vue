<template>
  <div id="db-wrapper">
    <HeaderSidebar />
    <div id="page-content">
      <HeaderTopBar />
      <NuxtWelcome />
    </div>
  </div>
</template>

<script>
// https://stackoverflow.com/q/44959753/5078874
  import feather from 'feather-icons'

  export default {
    name: 'app',
    mounted() {
      feather.replace();
    }
  }

</script>