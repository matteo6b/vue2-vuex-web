<template>
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container>
      <label>Email</label>
      <md-input  :value="user.email" @input="updateValues({value:$event,type:'email'})" ></md-input>
    </md-input-container>
    <md-input-container md-has-password>
      <label>Password</label>
      <md-input type="password" :value="user.password" @input="updateValues({value:$event,type:'password'})" ></md-input>
    </md-input-container>
        <md-button @click.native="submit()" class="md-raised  md-primary"  >Log In</md-button>
  </form>


</template>
<script  src="./login.ctrl.js" lang="babel"  ></script>
