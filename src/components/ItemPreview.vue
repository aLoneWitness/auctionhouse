<template>
    <div>
        <b-card
            :title="this.title"
            :img-src="this.image"
            :img-alt="this.title"
            img-top
            class="itempreview"
        >
            <b-card-text>
                {{this.price + "€"}}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "ItemPreview",
        props: {
            id: Number
        },
        data() {
            return {
                image: "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
                title: "Loading...",
                price: 0
            }
        },
        mounted() {
            this.$http
                .get("/items?id=" + this.id)
                .then((response) => {
                    this.title = response.data.name;
                    this.price = response.data.price.toString()
                })
        }
    }
</script>

<style scoped>
    .itempreview{
        max-width: 15rem;
        margin: 2rem;
    }
</style>