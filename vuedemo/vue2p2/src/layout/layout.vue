<template>
  <div class="layout">
    <page-header></page-header>
    <router-view />
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from "./header.vue";
  import PageFooter from "./footer.vue";
  export default {
    name: "Layout",
    components: { PageHeader, PageFooter },
  };
</script>