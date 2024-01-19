<template>
  <v-row class="mr-3 ml-3 mt-3">
    <v-col cols="2">
      <v-select density="compact" label="Select"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-select>
    </v-col>
    <v-col cols="2">
      <v-select density="compact" label="Select"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-select>
    </v-col>
    <v-col cols="2">
      <v-select density="compact" label="Select"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-select>
    </v-col>
    <v-col cols="1"></v-col>
    <v-col cols="3">
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
    </v-col>
    <v-col class="text-right" cols="2">
      <v-btn ariant="tonal">
        <v-icon>mdi mdi-menu</v-icon>
      </v-btn>
      <v-btn style="background-color: #adc4fe" variant="elevated">
        <v-icon style="color: #0c5bda;">mdi mdi-microsoft-windows</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="mr-3 ml-3 mt-3">
    <v-col cols="12">
      <v-chip variant="text">Chip</v-chip>
      <v-chip class="mr-2">
        Default
      </v-chip>
      <v-chip class="mr-2">
        Default
      </v-chip>
      <v-chip class="mr-2">
        Default
      </v-chip>
      <v-chip class="mr-2">
        Default
      </v-chip>
      <v-chip class="mr-2">
        Default
      </v-chip>
      <v-chip class="mr-2">
        Default
      </v-chip>
    </v-col>
  </v-row>
  <v-row class="mr-3 ml-3 mt-3">
    <v-col v-for="i in 15" :key="i" cols="12" sm="6" md="4" lg="3">
      <v-card hover variant="flat" width="259px" style="min-height: 300px;" class="mb-3">
        <v-img class="mx-auto mt-2" width="227px" height="224px"
          src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/405270929_3734295376897775_6745873818454262834_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHP6UELL0ROK8DBmNgiJAJI2w0-gyhy7ZPbDT6DKHLtk2DLybhHm7lrtQm7BkC9WU02DRkZE2TcJy8LtzQUdnHC&_nc_ohc=uNlCKpX4x-QAX81dtc2&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDKSxlXgXiNeIRK_Wo9bJJiGaXfmIE4UefeT1S_RpXg8w&oe=65ABF79D"
          alt="Product Image"></v-img>
        <v-card-text> Vintage Typewriter to post awesome stories about UI design and webdev. </v-card-text>
        <v-card-text style="font-size: 25px;font-weight: 700;padding: auto;padding-top: 0;">$49.50 </v-card-text>
        <v-card-Subtitle style="padding-top: 0;">Eligible for Shipping To Mars or somewhere else</v-card-Subtitle>
        <v-row style="margin-bottom: 5px;">
          <v-col class="ml-3" cols="5">
            <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
            <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
            <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
            <v-icon color="yellow" size="x-small">mdi mdi-star</v-icon>
            <v-icon color="yellow" size="x-small">mdi mdi-star-half</v-icon>
          </v-col>
          <v-col class="text-right" cols="5">
            <v-btn class="text-capitalize" color="primary" size="small" prepend-icon="mdi-heart-outline" variant="outlined">
              Watch
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>



  <v-row class="ma-1">
    <v-col v-for="i in 3" :key="i" cols="4">
      <v-card class="d-flex flex-column justify-center align-center rounded-1" style="min-height: 156px; background-color: #EDEDF0;">
    <v-icon color="green">mdi mdi-home</v-icon>
    <v-card-title class="text-center">Clear & Usable user flows</v-card-title>
    <v-card-subtitle class="text-center">Let’s boost your marketplace</v-card-subtitle>
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
