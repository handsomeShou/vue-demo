<template>
  <div id="app">
    <div is="Header"></div>
    <!-- <div is="backgroundImage"></div>
    <div is="BreadCrumb"></div> -->
    <router-view/> 
    <!-- <div is="AbstractEssay"></div> -->
    <!-- <div is="companyInfo"></div> -->
    <!-- 
    <div is="ImageIcon"></div>-->
    <div is="Footer"></div> 
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ImageIcon from './components/ImageIcon.vue'
import Footer from './components/Footer.vue'
import BreadCrumb from "./components/BreadCrumb.vue"
import backgroundImage from "./components/backgroundImage.vue"
import companyInfo from "./components/companyInfo.vue"
import AbstractEssay from "./components/AbstractEssay.vue"
import Emvironment from "./components/Env.vue"

export default {
  components:{Header,ImageIcon,Footer,BreadCrumb,backgroundImage,companyInfo,AbstractEssay,Emvironment},
  name: 'App',  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
