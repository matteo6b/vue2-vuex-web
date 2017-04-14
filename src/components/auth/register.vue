<template>
<form novalidate @submit.stop.prevent="submit">
  <md-input-container>
    <label>User Name</label>
    <md-input  @input="updateValues({value:$event,type:'username'})" ></md-input>
  </md-input-container>
  <md-input-container md-has-password>
    <label>Password</label>
    <md-input type="password" @input="updateValues({value:$event,type:'password'})"></md-input>
  </md-input-container>

  <md-input-container md-has-password>
    <label> Repeat Password</label>
    <md-input type="password" @input="updateValues({value:$event,type:'password2'})"></md-input>

  </md-input-container>
    <md-button class="md-raised  md-primary" @click.native="submit()" >Sign in</md-button>
</form>
</template>
<script  src="./register.ctrl.js" lang="babel"  ></script>
