<template>
    <div>
        <h2>Place Advertisement</h2>
        <b-container>
            <b-row>
                <b-col>
                    <b-form @submit="onSubmit" @reset="onReset">
                        <b-form-group
                                label="Name:"
                                description="The name of the product. Be descriptive."
                        >
                            <b-form-input
                                    v-model="form.name"
                                    type="text"
                                    required
                                    placeholder="Enter name"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group label="Description:">
                            <b-form-input
                                    v-model="form.description"
                                    required
                                    placeholder="Enter description"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group label="Image URL:">
                            <b-form-input
                                    v-model="form.imageURL"
                                    required
                                    placeholder="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                                    type="url">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group
                                label="Minimal Price:"
                                description="The price you want the starting bid to be."
                        >
                            <b-form-input
                                    type="number"
                                    v-model="form.price"
                                    required
                            ></b-form-input>
                        </b-form-group>


                        <b-button type="submit" variant="primary">Submit</b-button>
                    </b-form>
                </b-col>
                <b-col>
                    <div id="preview">
                        <h6>Preview:</h6>
                        <b-card :img-src="this.form.imageURL || 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'" style="max-width: 40rem" img-alt="Image will appear here!" img-left class="mb-3">
                            <b-card-title>{{this.form.name || 'Name will appear here!'}}</b-card-title>
                            <b-card-body>
                                <b-card-text>
                                    {{this.form.description || 'The description of the item will appear here!'}}
                                </b-card-text>
                            </b-card-body>
                            <b-card-footer>{{this.form.price}} €</b-card-footer>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Place",
        data() {
            return {
                form: {
                    name: '',
                    imageURL: '',
                    price: 0,
                    description: ''
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                let putContent = {
                    name: this.form.name,
                    price: this.form.price.valueOf(),
                    image: this.form.imageURL.toString()
                };

                this.$http
                    .put("/items", putContent, )
                .then((response) => {
                    console.log(response)
                })
            },
            onReset(evt){
                evt.preventDefault();
                this.form.name = '';
                this.form.imageURL = '';
                this.form.price = 0;
            }
        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 20px;
    }
    form {
        margin: 50px auto auto;
    }
    #preview{
        margin-top: 55px;
        word-wrap: break-word;
    }
</style>