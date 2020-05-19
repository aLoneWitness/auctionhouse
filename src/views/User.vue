<template>
    <div>

        <b-row>
            <b-col cols=3></b-col>
            <b-col cols=6>
                <div class="userTitle">
                    <h2>{{this.userData.username}}</h2>
                    <h3>{{this.userData.email}}</h3>
                </div>
                <div class="userItems">
                    <h2 v-if="userData.inventory != null && userData.inventory.length === 0">This person has no items in inventory.</h2>
                    <b-card-group columns>
                        <item-preview v-for="item in userData.inventory" v-bind:key="item.id" v-bind:item="item"></item-preview>
                    </b-card-group>
                </div>
            </b-col>
            <b-col cols=3></b-col>
        </b-row>
    </div>
</template>

<script>
    import ItemPreview from "../components/ItemPreview";
    export default {
        name: "User",
        data() {
            return {
                userData : Object
            }
        },
        mounted() {
            this.$http
                .get("/users?username=" + this.$route.params.username)
                .then((response) => {
                    console.log(response.data)
                    this.userData = response.data;
                })

        },
        components: {
            ItemPreview
        }
    }

</script>

<style scoped>
    .userTitle {
        margin-top: 50px;
        height: 100px;
        background-color: #2c3e50;
        color: whitesmoke;
        text-align: left;
        padding: 10px;
    }
    .userItems {
        margin-top: 50px;
        height: auto;
        min-height: 100px;
        background-color: darkgray;
        box-shadow: 2px 2px 5px darkgray;
        font-family: "Lato Light", serif;
        text-align: left;
        padding: 10px;
    }
</style>