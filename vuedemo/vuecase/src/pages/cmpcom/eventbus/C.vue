<template>
    <div class="wc">
        <h5>C页面</h5>
        <Ca />
        <Cb />
    </div>
</template>

<script>
import Ca from "./A.vue";
import Cb from "./B.vue";
export default {
    data() {
        return {}
    },
    components: {
        Ca, Cb
    }
}
</script>