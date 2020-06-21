<template>
    <div>
        <div>
            <b-card-group class="cardgroup" deck>
                <item-preview class='item' v-for="item in storedItems" v-bind:key="item.id" v-bind:item="item"></item-preview>
            </b-card-group>
        </div>
    </div>
</template>

<script>
    import ItemPreview from "../components/ItemPreview.vue";
    import ItemService from '../services/item.service'
    export default {
        name: "Home.vue",
        components: {
            ItemPreview
        },
        mounted() {
            ItemService.GetRange().then((response) => { this.storedItems = response.data })
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