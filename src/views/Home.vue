<template>
    <div>
        <div class="cardgroup">
            <b-card-group columns>
                <item-preview v-for="item in storedItems" v-bind:key="item.id" v-bind:item="item"></item-preview>
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
        },
        mounted() {
            const params = {
                startRange: 0,
                endRange: 9
            };
            this.$http
                .get("/items/getrange", { params })
                .then((response) => {
                    this.storedItems = response.data
                })
        },
        data() {
            return {
                storedItems: Object
            }
        }
    }
</script>

<style scoped>
    .cardgroup {
        max-width: 66%;
        margin: auto;
    }
</style>