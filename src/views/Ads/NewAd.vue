<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mt-3">Create new ad</h1>
                    <v-form v-model="valid" ref="form" validation>
                        <v-text-field
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v || 'Title is required']"
                        ></v-text-field>
                        <v-textarea
                            label="Ad description"
                            name="description"
                            type="text"
                            v-model="description"
                            required
                            :rules="[v => !!v || 'Description is required']"
                        ></v-textarea>
                    </v-form>
                    <v-layout row class="mb-3 mt-3">
                        <v-flex xs12>
                            <v-btn class="warning">Upload</v-btn>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <img src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg" alt="image" height="100">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-switch
                            v-model="promo"
                            label="Ad to promo?"
                            color="primary"
                            ></v-switch>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-spacer></v-spacer>
                            <v-btn
                            class="success"
                            @click="createAd"
                            :disabled="!valid"
                            >Create ad</v-btn>
                        </v-flex>
                    </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: '',
            description: '',
            valid: false,
            promo: false
        }
    },
    methods: {
        createAd () {
            if (this.$refs.form.validate()) {
                //  logic
                let ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo
                }
                console.log(ad)
            }
        }
    }
}
</script>

<style>

</style>
