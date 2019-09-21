<template>
    <v-container
    fluid
    fill-height
    >
        <v-layout
          align-center
          justify-center
        >
            <v-flex
            xs12
            sm8
            md4
            >
            <v-card class="elevation-12">
            <v-toolbar
                color="primary"
                dark
                flat
            >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
                <v-card-text>
                    <v-form v-model="valid" ref="form" validation>
                        <v-text-field
                            label="Email"
                            name="email"
                            prepend-icon="fas fa-user"
                            type="email"
                            v-model="email"
                            :rules="emailRules"
                        ></v-text-field>
                        <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="fas fa-lock"
                            type="password"
                            :counter="10"
                            v-model="password"
                            :rules="passwordRules"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        @click="onSubmit"
                        color="primary"
                        :disabled="!valid"
                    >Login</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            valid: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 10) || 'Password must be not less than 10 characters'
            ]
        }
    },
    methods: {
        onSubmit () {
            if (this.$refs.form.validate()) {
                let user = {
                    email: this.email,
                    password: this.password
                }
                console.log(user)
            }
        }
    }
}
</script>

<style>

</style>
