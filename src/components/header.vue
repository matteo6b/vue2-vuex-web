<template>
  <div class="phone-viewport">

  <md-toolbar>
      <md-layout md-flex="90" >
     <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
       <md-icon>menu</md-icon>
     </md-button>

     <h2 class="md-title">Street App</h2>
     </md-layout>
<md-layout md-flex="10" md-align="left">
<md-menu md-align-trigger>
     <md-button md-menu-trigger> <avatar :username="user" ></avatar></md-button>

  <md-menu-content>
         <a @click="logout()" href="/auth">Logout</a>
           </md-menu-content>

</md-menu>
</md-layout>

   </md-toolbar>

   <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
     <md-toolbar class="md-small">
       <div class="md-toolbar-container">
         <h3 class="md-title">Sidenav content</h3>
       </div>
     </md-toolbar>
     <md-list>
        <md-list-item>
        <a href="/place">  <md-icon>map</md-icon> places</a>
        </md-list-item>
        <md-list-item>
        <a href="/profile">  <md-icon>human-male</md-icon>Profile</a>
        </md-list-item>
      </md-list>

   </md-sidenav>


 </div>
</template>
<script>
import Avatar from 'vue-avatar'
export default {
  components: {
   'avatar': Avatar.Avatar
 },
 data(){
   return{
     user:localStorage.getItem("profile"),
   }
 },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    logout() {
      console.log("hola")
      this.$store.dispatch('auth/logout').then(res => console.log('header logout'))
    },
  }
};
</script>
