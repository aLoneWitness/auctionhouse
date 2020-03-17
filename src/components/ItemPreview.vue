<template>
    <div>
        <b-card
            :title="this.title"
            :img-src="this.previewImage"
            :img-alt="this.title"
            img-top
            class="itempreview"
        >
            <b-card-text>
                $45,00
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "ItemPreview",
        props: {
            title: String,
            previewImage: String
        }
    }
</script>

<style scoped>
    .itempreview{
        max-width: 15rem;
        margin: 2rem;
    }
</style>