<template>
  <div id="mine">
    <h1>This is an about page</h1>
    <Footnav propsPage="mine"></Footnav>
  </div>
</template>

<script>
  import Footnav from '../components/f_footNav.vue';

export default {
    name: 'mine',
    components: {
        Footnav
    }
}
</script>
