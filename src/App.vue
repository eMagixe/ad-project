<template>
<v-app>
  <v-navigation-drawer app temporary v-model="drawer">
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="link in links" :key='link.title' :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Ad application</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="button in links" :key="button.title" :to="button.url">
            <v-icon left>
            {{ button.icon }}
            </v-icon>
            {{ button.title }}
        </v-btn>
      </v-toolbar-items>

  </v-app-bar>
  <v-content>

      <router-view></router-view>

  </v-content>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { title: 'Login', icon: 'fas fa-lock', url: '/login' },
        { title: 'Registration', icon: 'fas fa-user-plus', url: '/registration' },
        { title: 'Orders', icon: 'fas fa-bookmark', url: '/orders' },
        { title: 'New ad', icon: 'fas fa-plus', url: '/new' },
        { title: 'My ads', icon: 'fas fa-list', url: '/list' }
      ]
    }
  }
}
</script>
