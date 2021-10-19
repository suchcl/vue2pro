<template>
  <div class="user-center">
    <h2>{{ username }}</h2>
    <h3>{{ $store.state.counter }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
};
</script>
