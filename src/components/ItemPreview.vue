<template>
    <div v-on:click="onClick()" class="preview">
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
            this.name = "Loading...";
            this.$http
                .get("/items?id=" + this.id)
                .then((response) => {
                    this.title = response.data.name;
                    this.price = response.data.price.toString();
                    this.image = response.data.image;
                })
        },
        methods: {
            onClick() {
                this.$router.push({ name: 'Item', params: { id: this.id } })
            }
        }
    }
</script>

<style scoped>
    .itempreview{
        margin: 20px;
    }
    .card-img-top {
        width: 100%;
        height: 15vw;
        object-fit: cover;
    }
    .preview {
        cursor: pointer;
    }

</style>