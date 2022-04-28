<template>
    <n-button v-if="!l2ActiveAccount" @click="l2ConnectWallet" type="primary" size="large">CONNECT</n-button>
    <n-button v-else @click="mintBot" size="large" type="info">MINT({{l2ActiveAccount.substring(0, 5)}})</n-button>
</template>

<script>
  import { defineComponent } from 'vue'
  import { NButton } from 'naive-ui'
  import { mapGetters, mapActions } from "vuex";
  export default defineComponent({
    components: {
      NButton
    },
    computed: {
      ...mapGetters("stark", ["l2IsConnected", "l2ActiveAccount"])
    },
    methods: {
      ...mapActions("stark", ["l2ConnectWallet", "mintBot"]),
    },
  })
</script>
