<template>
  <div class="user-center">
    <h2>{{ username }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
};
</script>
