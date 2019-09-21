<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                            v-for="ad in ads"
                            :key="ad.id"
                            :src="ad.imageSrc"
                        >
                        <div class="carousel-link">
                            <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                        </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                    xs12
                    sm6
                    md4
                    v-for="ad in ads"
                    :key="ad.id"
                >
                    <v-card>
                        <v-img
                        :src="ad.imageSrc"
                        height="200px"
                        ></v-img>
                        <v-card-title>
                            <h3 class="headline mb-0">{{ ad.title }}</h3>
                        </v-card-title>
                        <v-card-text>
                            <div class="grey--text subtitle-1">{{ ad.description }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
                            <v-btn raised class="primary">Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ads: [
                {
                    title: 'First ad',
                    description: 'Hello i am description',
                    promo: false,
                    imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    id: '1'
                },
                {
                    title: 'Second ad',
                    description: 'Hello i am description',
                    promo: true,
                    imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    id: '2'
                },
                {
                    title: 'Third ad',
                    description: 'Hello i am description',
                    promo: true,
                    imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    id: '3'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .carousel-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .35);
        transform: translate(-50%,0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>
