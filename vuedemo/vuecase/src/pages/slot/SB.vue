<template>
    <div class="slot-b">
        <h3>B组件</h3>
        <slot name="test"></slot>
        <slot name="test2"></slot>
        <slot></slot>
    </div>
</template>
<script>
</script>
<style>
    .slot-b {
        padding: 20px;
        background-color: antiquewhite;
    }
</style>