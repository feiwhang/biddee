<template>
    <div class="bid">
        <Header />
        <BidBody />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BidBody from "@/components/Bid/BidBody.vue";

export default {
    name: "Bid",
    metaInfo: {
        titleTemplate: null,
    },
    components: {
        Header,
        BidBody,
    },
};
</script>
