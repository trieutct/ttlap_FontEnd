<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer width="220" :expand-on-hover="drawer=true" v-model="drawer" :rail="rail" permanent>
        <v-toolbar style="background-color: white;">
          <v-toolbar-title class="ma-3">
            <v-img src="https://res.cloudinary.com/dgtjdhrnq/image/upload/v1705460127/logo1_adshdl.png"></v-img>
          </v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item style="opacity: 0.6;font-size: 13px;">Quản lý sản phẩm</v-list-item>
          <v-list-item prepend-icon="mdi-apps" title="Sản phẩm" value="Sản phẩm" to='product'></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="User" value="User" to='user'></v-list-item>
        </v-list>
      </v-navigation-drawer>
            <v-main style="background-color: rgb(247, 247, 247);min-height: 100vh;">
                <v-app-bar class="px-4" color="rgb(247, 247, 247)" :elevation="0" rounded="0">
                    <h3>Danh sách sản phẩm</h3>
                    <v-spacer></v-spacer>
                    <v-btn>
                        <v-badge content="5" color="red">
                            <v-icon>mdi-bell</v-icon>
                        </v-badge>
                    </v-btn>
                    <v-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                    </v-avatar>
                </v-app-bar>
                <router-view></router-view>
            </v-main>
        </v-layout>
    </v-app>
</template>

<script>
import NavigrationDrawerVue from '@/components/NavigrationDrawer.vue'
export default {
    components: { NavigrationDrawerVue }

}
</script>

<style></style>