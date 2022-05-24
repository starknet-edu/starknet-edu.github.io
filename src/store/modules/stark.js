import { getStarknet } from "get-starknet";
// import { stark } from "starknet";

const state = {
    l2ActiveAccount: null,
    l2AccountSigner: null,
    l2ActiveSigner: null,
    l2ActiveProvider: null,
    l2Error: null,
};

const getters = {
    l2ActiveAccount: (state) => state.l2ActiveAccount,
    l2AccountSigner: (state) => state.l2AccountSigner,
    l2ActiveSigner: (state) => state.l2ActiveSigner,
    l2ActiveProvider: (state) => state.l2ActiveProvider,
    l2IsConnected: (state) => state.l2IsConnected,
    l2Error: (state) => state.l2Error,
};

const actions = {
    async l2ConnectWallet({commit}) {
        let starknet = getStarknet({ showModal: true });
        let [walletAddress] = await starknet.enable();

        if (starknet.isConnected) {
            commit("setl2ActiveAccount", walletAddress);
            commit("setl2ActiveSigner", starknet.signer);
            commit("setl2ActiveProvider", starknet.provider);
            commit("setl2IsConnected", true);
        } else {
            commit("setL2Err", "can't connect with wallet")
        }
    },
};

const mutations = {
    setl2ActiveAccount(state, account) {
        state.l2ActiveAccount = account;
    },
    setl2ActiveProvider(state, provider) {
        state.l2ActiveProvider = provider;
    },
    setl2ActiveSigner(state, signer) {
        state.l2ActiveSigner = signer;
    },
    setL2AccountSigner(state, signer) {
        state.l2AccountSigner = signer;
    },
    setl2IsConnected(state, conn) {
        state.l2IsConnected = conn;
    },
    setL2Err(state, err) {
        state.l2Error = err;
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
