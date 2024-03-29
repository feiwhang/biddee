import Vue from "vue";
import Vuex from "vuex";
import authentication from "./modules/authentication";
import NewItem from "./modules/NewItem";
import EditItem from "./modules/EditItem";
import PlaceBid from "./modules/PlaceBid";
import CountDown from "./modules/CountDown";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const userState = createPersistedState({
    paths: ["userProfile"],
});

const store = new Vuex.Store({
    plugins: [userState],
    modules: {
        authentication,
        NewItem,
        EditItem,
        PlaceBid,
        CountDown,
    },
});

export default store;
