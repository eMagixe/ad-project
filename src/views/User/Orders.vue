<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-list
                subheader
                two-line
                flat
                >
                    <h1 class="text--secondary mb-3 ml-3">Orders</h1>
                    <v-subheader>Hangout notifications</v-subheader>
                    <v-list-item-group>
                        <v-list-item v-for="order in orders" :key="order.id">
                        <template>
                            <v-list-item-action>
                                <v-checkbox
                                color="success"
                                :input-value="order.done"
                                @change="markDone(order)"
                                ></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>{{ order.name }}</v-list-item-title>
                                <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-tile-action>
                                <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
                            </v-list-tile-action>
                        </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            orders: [
                {
                    id: 'dfjldl2',
                    name: 'Max',
                    phone: '8-800-2000-600',
                    adId: '1',
                    done: false
                }
            ]
        }
    },
    methods: {
        markDone (order) {
            order.done = true
        }
    }

}
</script>

<style>

</style>
