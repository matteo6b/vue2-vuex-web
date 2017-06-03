<template>
        <div>
      <span class="md-display-3">Manage User</span>
      <md-layout md-flex="100" >
        <md-layout md-flex="20" >
        <img class="phoneImg" :src="imageUrl" alt="Photo Devices"/>
          </md-layout>
        <label for="FileUpload" class="md-button md-raised md-primary">Upload File</label>
        <input type="file" id="FileUpload" @change="onDeviceImageChange" v-show="false" class="show-for-sr">
      </md-layout>
        <md-layout md-flex="80" >

          <md-input-container>
     <label>First Name</label>
     <md-input ></md-input>
   </md-input-container>
   <md-input-container>
<label>Last Name</label>
<md-input ></md-input>
</md-input-container>
      </md-layout>
</div>
</template>
<script  src="./profile.ctrl.js" lang="babel"  ></script>
