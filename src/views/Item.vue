<template>
    <div>
        <b-row>
            <b-col cols=2></b-col>
            <b-col cols=5>
                <div class="itemInformation">
                    <h2>{{this.name}}</h2>
                    <img :src="this.image">
                    <p>{{this.description}}</p>
                </div>
            </b-col>
            <b-col cols=3>
                <div class="sellerInformation">
                    <h3>Hansje123</h3>

                </div>
                <div class="biddingArea">
                    <bidding :item-id="this.id"></bidding>
                </div>
            </b-col>
            <b-col cols=2></b-col>
        </b-row>
    </div>
</template>

<script>
    import Bidding from "../components/Bidding";
    export default {
        name: "Item",
        props: {
            id: Number
        },
        data() {
            return {
                name: String,
                price: Number,
                image: String,
                description: String
            }
        },
        components: {
          Bidding
        },
        mounted() {
            this.$http
                .get("/items?id=" + this.id)
                .then((response) => {
                    this.name = response.data.name;
                    this.price = response.data.price.toString();
                    this.image = response.data.image;
                    this.description = response.data.description;
                })
        }
    }
</script>

<style scoped>
    .itemInformation {
        margin-top: 50px;
        height: 700px;
        background-color: darkgray;
        box-shadow: 2px 2px 5px darkgray;
        font-family: "Lato Light", serif;
        text-align: left;
    }
    .itemInformation h2 {
        padding-top: 20px;
        padding-left: 20px;
    }
    .itemInformation p {
        padding-top: 20px;
        padding-left: 20px;
    }
    .itemInformation img {
        width: 95%;
        padding-left: 5%;
    }
    .sellerInformation {
        margin-top: 50px;
        height: 200px;
        background-color: rgb(23, 162, 184);
        box-shadow: 2px 2px 5px rgb(23, 162, 184);
        text-align: left;
    }
    .sellerInformation h3 {
        padding-top: 20px;
        padding-left: 20px;
    }
    img {
        display: block;
        width: auto;
        height: auto;
        max-height: 500px;
        max-width: 300px;
    }
    .biddingArea {
        overflow: auto;
        margin-top: 25px;
        height: 475px;
        background-color: darkslategray;
        box-shadow: 2px 2px 5px rgb(23, 162, 184);
    }


</style>