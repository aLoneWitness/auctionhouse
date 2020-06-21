<template>
    <div>

        <b-row>
            <b-col cols=3></b-col>
            <b-col cols=6>
                <div class="userTitle">
                    <h2>{{this.userData.username}}</h2>
                    <h3>{{this.userData.email}}</h3>
                    <vue-stars
                            v-on:input="this.onRatingSet"
                            name="demo"
                            active-color="#ffdd00"
                            inactive-color="#999999"
                            shadow-color="#ffff00"
                            hover-color="#ffdd00"
                            :max="5"
                            :value="this.rating"
                            :readonly="false"
                            char="★"
                            inactive-char=""
                            class=""
                    />
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
    import AuthService from "../services/auth.service.js"
    import { VueStars } from "vue-stars";
    import UserService from '../services/user.service.js'
    export default {
        name: "User",
        data() {
            return {
                userData : Object,
                originalRating: Number,
                rating: Number
            }
        },
        mounted() {
            let username;
            if(this.$route != null && this.$route.params.username != null) {
                username = this.$route.params.username
            }
            else {
                username = AuthService.getUsername();
            }
            UserService.GetByUsername(username)
                .then((response) => {
                    this.userData = response.data;

                    let totalRateAmount = 0;
                    for (let index in response.data.ratings) {
                        totalRateAmount = totalRateAmount + response.data.ratings[index].stars;
                    }
                    this.rating = Math.round(totalRateAmount / response.data.ratings.length)
                    this.originalRating = this.rating
                })

        },
        components: {
            ItemPreview,
            VueStars
        },
        methods: {
            onRatingSet(value) {
                console.log(this.userData.username)
                this.$http
                    .post("/users/addrating", {
                        stars: value,
                        username: this.userData.username
                    })
                    .then(() => {
                        this.rating = this.originalRating
                        alert("Thanks for your feedback.")
                    })

            }
        }
    }

</script>

<style scoped>
    .userTitle {
        margin-top: 50px;
        height: 135px;
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