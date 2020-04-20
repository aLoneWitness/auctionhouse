<template>
    <div v-on:click="onClick()" class="preview">
        <b-card
            :img-src="this.item.image"
            :img-alt="this.item.name"
            img-top
            class="itempreview"
        >
            <b-card-title>
                {{this.item.name}}
            </b-card-title>
            <b-card-text>
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