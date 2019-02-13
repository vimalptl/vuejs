<template>

        <div v-if='isAuthenticated'>
            Hello authenticated user!
            <p> Name: {{profile.firstName}}</p>
            <p> Favorite Sandwich: {{ profile.favoriteSandwich}}</p>
            <button v-on:click="logout()" class="button is-primary">
                logout
            </button>
        </div>
        <div v-else>
    <section class="hero is-success is-fullheight">

        <div class="hero-body">

            <div class="container has-text-centered">

                <div class="column is-4 is-offset-4">

                    <h3 class="title has-text-grey">Login</h3>

                    <p class="subtitle has-text-grey">Please login to proceed. (bill/vuejs)</p>

                    <div class="box">

                            <div class="field">

                                <div class="control">

                                    <input v-model="username" class="input is-large" type="username" placeholder="Your UserName" autofocus="">

                                </div>

                            </div>



                            <div class="field">

                                <div class="control">

                                    <input v-model="password" class="input is-large" type="password" placeholder="Your Password">

                                </div>

                            </div>

                            <div class="field">

                                <label class="checkbox">

                  <input type="checkbox">

                  Remember me

                </label>

                            </div>

                            <button v-on:click="login()" class="button is-block is-info is-large is-fullwidth">Login</button>

                    </div>

                    <p class="has-text-grey">

                        <a href="../">Sign Up</a> &nbsp;·&nbsp;

                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;

                        <a href="../">Need Help?</a>

                    </p>

                </div>

            </div>
        </div>
    </section>
        </div>
</template>

<script>
import appService from '../services/appservice.js'
import eventBus from '../event-bus.js'

export default {
    name : 'login',
    data() {
        return {
            username: '',
            password: '',
            isAuthenticated : false,
            profile: {}
        }
    },
    watch : {
        isAuthenticated: function (val) {
            if (val) {
                appService.getProfile().then(profile => {
                    this.profile = profile;
                });

            } else {
                this.profile = {};
            }
            eventBus.$emit('authStatusUpdate',val);
        }
    },
    methods: {
        login() {
            appService.login({username: this.username, password: this.password})
            .then((data) => {
                window.localStorage.setItem('token',data.token);
                window.localStorage.setItem('tokenExpiration',data.expiration);
                this.isAuthenticated = true;
                this.username = '';
                this.password = '';
            }).catch(() => window.alert('Could not login!'));
        },
        logout() {
            window.localStorage.setItem('token',null);
            window.localStorage.setItem('tokenExpiration',null);
            this.isAuthenticated = false;
        }
    },
    created () {
        let expiration = window.localStorage.getItem('tokenExpiration');
        var unixTimeStamp = new Date().getTime() / 1000;
        if (expiration !== null && parseInt(expiration) - unixTimeStamp > 0 ) {
            this.isAuthenticated = true;
        }
    }
}
</script>

<style>

</style>
