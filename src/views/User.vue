<template>
    <div>
        <h2>{{this.userData.username}}</h2>
        <h3>{{this.userData.email}}</h3>
    </div>
</template>

<script>
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

        }
    }

</script>

<style scoped>

</style>