<script>
import { inject, ref, watch, onMounted } from "vue";

import HelloWorld from '@/components/HelloWorld.vue';
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
import {
    RouterLink,
    RouterView
} from 'vue-router';

export default ({
  name: "app",
  components: {
    RouterView,  
    HeaderComponent,
    FooterComponent
  }
})
</script>

<template>
<HeaderComponent />
<RouterView />
<FooterComponent />
</template>

<style>
@import '@/assets/base.css';


</style>
