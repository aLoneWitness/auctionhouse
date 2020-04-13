<template>
    <div>
        <div class="cardgroup">
            <b-card-group columns>
                <item-preview v-bind:id="1"></item-preview>
                <item-preview v-bind:id="2"></item-preview>
                <item-preview v-bind:id="3"></item-preview>
                <item-preview v-bind:id="4"></item-preview>
                <item-preview v-bind:id="5"></item-preview>
                <item-preview v-bind:id="6"></item-preview>
                <item-preview v-bind:id="7"></item-preview>
                <item-preview v-bind:id="8"></item-preview>
                <item-preview v-bind:id="9"></item-preview>
                <item-preview v-bind:id="10"></item-preview>
            </b-card-group>
        </div>
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
    .cardgroup {
        max-width: 66%;
        margin: auto;
    }
</style>