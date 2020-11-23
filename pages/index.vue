<template>
    <div class="container">
        <div>
            <h1 class="title">
                jsonserver.io-example
            </h1>
            <h2 class="subtitle">
                This is a example repository which illustrate how the backend API mocking service JsonServer.io can be
                used.
            </h2>
            <label for="resource">Enter your resource path:</label>
            <input id="resource" type="text" v-model="resourcePath">
            <button @click="loadData">Request your fake resource</button>
            <div class="links">
                {{data}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {

        computed: {
            ...mapState({
                data: state => state.data
            })
        },

        data() {
            return {
                resourcePath: '/'
            }
        },

        methods: {
            loadData() {
                this.$store.dispatch('loadData', this.resourcePath)
            }
        }
    }
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
