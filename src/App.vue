<template>
  <router-view/>
</template>
<!-- <template>
  <h2>{{ A0 }}</h2>
</template>
<script setup>
import { ref, watchEffect } from 'vue'

const A0 = ref(0)
const A1 = ref(1)
const A2 = ref()

watchEffect(() => {
  // tracks A0 and A1
  alert(A0.value)
  A2.value = A0.value + A1.value
})

// triggers the effect
A0.value = 2
</script> -->

