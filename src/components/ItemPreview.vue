<template>
    <div v-on:click="onClick()" class="preview">
        <b-card shadow-sm
            class="itempreview"
        >
            <b-card-img
                    :src="this.item.image"
                    :img-alt="this.item.name"
                    top
                    class="cardimage"
            >
            </b-card-img>
            <b-card-title id="title">
                {{this.item.name}}
            </b-card-title>
            <b-card-text id="text">
                {{this.item.price + "€"}}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "ItemPreview",
        props: {
            item: Object
        },
        mounted() {

        },
        methods: {
            onClick() {
                this.$router.push({ name: 'Item', params: { id: this.item.id } })
            }
        }
    }
</script>

<style scoped>
    .itempreview{
        max-width: 200px;
        min-width: 200px;
        min-height: 100px;
        max-height: 500px;
    }
    .card-img-top {
        width: 100%;
        height: 15vw;
        object-fit: cover;
    }
    #title {
        font-size: 18px;
        margin-top: 20px;
    }
    #text {
        font-size: 16px;
    }
    .preview {
        cursor: pointer;
        margin-top: 20px;
    }
    .cardimage {
        width: 100%;
        height: inherit;
        object-fit: cover;
        max-height: 300px;
    }

</style>