<template>
  <v-row class="mr-3 ml-3 mt-3">
    <v-col cols="2">
      <v-select density="compact" label="Sort by"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-select>
    </v-col>
    <v-col cols="2">
      <v-select density="compact" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="outlined"></v-select>
    </v-col>
    <v-col cols="2">
      <v-select density="compact" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="outlined"></v-select>
    </v-col>
    <v-col cols="6" class="text-right">
      <v-btn style="background-color: #adc4fe;color:#4d4d50" class="rounded-1 text-capitalize" variant="tonal">
        Show all
      </v-btn>
      <v-btn style="font-weight: bold;color: #2264D1;" bg-color="white" class="rounded-1 text-capitalize"
        variant="elevated">
        Action
      </v-btn>
      <v-btn style="background-color: #adc4fe;color:#4d4d50" class="rounded-1 text-capitalize" variant="tonal">
        Buy now
      </v-btn>
      <v-btn class="ml-5" ariant="tonal">
        <v-icon>mdi mdi-menu</v-icon>
      </v-btn>
      <v-btn style="background-color: #adc4fe" variant="elevated">
        <v-icon style="color: #0c5bda;">mdi mdi-microsoft-windows</v-icon>
      </v-btn>
    </v-col>
    <!-- <v-col class="text-right" cols="2">
      <v-btn ariant="tonal">
        <v-icon>mdi mdi-menu</v-icon>
      </v-btn>
      <v-btn style="background-color: #adc4fe" variant="elevated">
        <v-icon style="color: #0c5bda;">mdi mdi-microsoft-windows</v-icon>
      </v-btn>
    </v-col> -->
  </v-row>
  <v-row class="mr-3 ml-3 mt-3">
    <v-col cols="12">
      <v-chip variant="text">Related</v-chip>
      <v-chip class="mr-2">
        worldwide shipping
      </v-chip>
      <v-chip class="mr-2">
        under $50
      </v-chip>
      <v-chip class="mr-2">
        kitten
      </v-chip>
      <v-chip class="mr-2">
        plastic plugs
      </v-chip>
      <v-chip class="mr-2">
        pucker shoes
      </v-chip>
      <v-chip class="mr-2">
        vintage typewriter
      </v-chip>
    </v-col>
  </v-row>
  <v-card class="custom-shadow">
    <v-row class="mr-3 ml-3 mt-1">
      <v-col v-for="i in 15" :key="i" cols="12" sm="6" md="4" lg="3">
        <v-card hover variant="flat" width="259px" style="min-height: 472px;" class="mb-3 my-card">
          <v-img class="mx-auto mt-2" width="227px" height="224px"
            src="https://tse2.mm.bing.net/th?id=OIP.HPtW3Kl-1qvIjhcfNg7eZwHaFX&pid=Api&P=0&h=220"
            alt="Product Image"></v-img>
          <v-card-text class="my-card-text" style="font-size: 16px;line-height: 24px; height: 85px;"> Vintage Typewrite  Vintage Typewrite  Vintage Typewrite Vintage Typewriter to post awesome stories about UI design and webdev. </v-card-text>
          <v-card-text class="mt-5" style="font-size: 24px;font-weight: 700;padding: auto;height: 36px;">$49.50 </v-card-text>
          <p class="mt-2 ml-4" style="height: 41px;font-size: 14px;opacity: 0.6;">Eligible for Shipping To Mars or somewhere else</p>
          <v-row style="margin-top: 5px;">
            <v-col class="ml-3 mt-1" cols="5" style="display: flex;">
              <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="yellow" size="x-small">mdi mdi-star-half</v-icon>
              <span style="font-size: 12px;">4.05</span>
            </v-col>
            <v-col class="text-right" cols="6">
              <v-btn class="text-capitalize" color="primary" size="small" prepend-icon="mdi-heart-outline"
                variant="outlined">
                Watch
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  <v-row class="ma-1">
    <v-col cols="4">
      <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
        style="min-height: 156px; background-color: #EDEDF0;">
        <img width="80" height="80" src="../assets/footer1.png">
        <v-card-title class="text-center">Clear & Usable user flows</v-card-title>
        <v-card-subtitle class="text-center">Let’s boost your marketplace</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
        style="min-height: 156px; background-color: #EDEDF0;">
        <img width="80" height="80" src="../assets/footer2.png">
        <v-card-title class="text-center">Fine & Styled components</v-card-title>
        <v-card-subtitle class="text-center">Speed up with Setproduct templates</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
        style="min-height: 156px; background-color: #EDEDF0;">
        <img width="80" height="80" src="../assets/footer3.png">
        <v-card-title class="text-center">Customizable & Reusable</v-card-title>
        <v-card-subtitle class="text-center">Take our UX patterns and rebuild</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.custom-shadow {
  margin-top: 10px;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.2);
}
.my-card {
  max-height: 200px; /* Đặt chiều cao tối đa của thẻ */
  overflow: hidden;  /* Ẩn phần nội dung vượt quá chiều cao */
}

.my-card-text {
  overflow-y:hidden;
}
</style>
