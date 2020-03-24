<template>
    <div>
        <b-card-group deck>
            <item-preview v-bind:id="4"></item-preview>
        </b-card-group>
    </div>
</template>

<script>
    import ItemPreview from "../components/ItemPreview.vue";
    export default {
        name: "Home.vue",
        components: {
            ItemPreview
        }
    }
</script>

<style scoped>

</style>