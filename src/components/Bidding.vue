<template>
    <div>
        <div class="bidHistory">
            <b-table sticky-header="350px" :items="previousBids"></b-table>
        </div>
        <div class="bidControls">
            <b-form-input
                    id="bidInput"
                    v-model="bid"
                    :state="bidState"
                    type="number"
                    aria-describedby="input-live-feedback"
                    placeholder="Place bid"
                    trim
            ></b-form-input>
            <b-button id="bidConfirm" :disabled="!bidState" v-on:click="placeBid()">
                Place
            </b-button>
            <b-form-invalid-feedback id="input-live-feedback">
                Enter a bid higher than the previous bid.
            </b-form-invalid-feedback>
        </div>
    </div>
</template>

<script>
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    export default {
        name: "Bidding",
        computed: {
            bidState() {
                return this.bid > this.highestBid;
            }
        },
        props: {
            itemId : Number
        },
        data() {
            return {
                previousBids: [],
                connected: false,
                bid: Number,
                highestBid: 0
            }
        },
        mounted() {
            this.socket = new SockJS("http://localhost:8081/ws");
            this.stompClient = Stomp.over(this.socket);
            this.stompClient.connect({}, frame => {
                this.connected = true;
                console.log(frame);
                this.stompClient.subscribe("/topic/auction/" + this.itemId, tick => {
                    console.log(tick);
                    this.previousBids.push(JSON.parse(tick.body));
                    this.highestBid = JSON.parse(tick.body).amount;
                });
            },
            error => {
                console.log(error);
                this.connected = false;
            })
        },
        methods: {
            placeBid() {
                if (this.stompClient && this.stompClient.connected) {
                    const msg = {
                        from: window.location.host,
                        amount: this.bid
                    };
                    this.stompClient.send("/app/auction/" + this.itemId, JSON.stringify(msg), {});
                }
            },
        }
    }
</script>

<style scoped>
    .bidHistory {
        border-radius: 8px;
        height: 350px;
        margin: 10px;
        background-color: white;
    }
    .bidControls {
        margin: 10px;
        height: 60px;
        position: relative;
    }
    #bidInput {
        float: left;
        width: 60%;
    }
    #bidConfirm {
        float: right;
        width: 25%;
    }
    #input-live-feedback {
        position: absolute;
        bottom: 0;
        text-align: left;
    }
</style>