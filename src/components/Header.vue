<template>
    <div class="Header">
        <div class="HeaderContainer">
            <router-link class="HeaderLogo" active-class="active" exact to="/">
                <h1>Biddee</h1>
            </router-link>
            <div class="HeaderView">
                <router-link
                    class="HeaderView__link"
                    active-class="active"
                    exact
                    to="/"
                >
                    <span>Home</span>
                </router-link>

                <router-link
                    class="HeaderView__link"
                    active-class="active"
                    exact
                    to="/bid"
                >
                    <span>Bid</span>
                </router-link>
                <router-link
                    class="HeaderView__link"
                    active-class="active"
                    exact
                    to="/myitem"
                >
                    <span>My Item</span>
                </router-link>
                <router-link
                    class="HeaderView__link"
                    active-class="active"
                    exact
                    to="/login"
                    v-if="!this.auth.currentUser"
                >
                    <span>Login</span>
                </router-link>
                <span
                    class="HeaderView__logout"
                    v-if="this.auth.currentUser"
                    @click="handleLogout"
                >
                    Logout
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from "@/firebase";
import { mapActions } from "vuex";

export default {
    name: "Header",
    data: () => {
        return {
            auth,
        };
    },
    methods: {
        ...mapActions(["logout"]),
        handleLogout() {
            this.logout();
        },
    },
};
</script>

<style lang="scss" scoped>
.Header {
    z-index: 100;
    background-color: rgba($color: #ffffff, $alpha: 0.8);
    backdrop-filter: blur(18.88px);
    border-bottom: 2px solid var(--blueHover);
}
.HeaderContainer {
    display: flex;
    align-items: center;
    width: var(--layoutWidth);
    padding: 12px 0;

    justify-content: space-between;
    margin: 0 auto;
}

.HeaderLogo {
    text-decoration: none;
    color: var(--midBlue);
    font-size: 28px;
    h1 {
        padding: 0;
        margin: 0;
    }
}

.HeaderView {
    &__link {
        text-decoration: none;
        color: var(--darkBlue);
        margin: 0 12px;
        padding: 6px 16px;
        border-radius: 24px;
        font-size: 16px;
        font-weight: 500;

        &:hover {
            background-color: var(--blueHover);
        }

        &.active {
            color: white;
            background-color: var(--darkBlue);
        }
    }

    &__logout {
        cursor: pointer;
        color: red;
        padding: 6px 16px;
        border-radius: 24px;
        font-size: 16px;
        font-weight: 500;
    }
}
</style>
