<template>
        <div>
      <span class="md-display-3">Manage User</span>
      <md-layout md-flex="100" >
        <img class="phoneImg" src="" alt="Photo Devices"/>
        <label for="FileUpload" class="button large">Upload File</label>
        <input type="file" id="FileUpload" @change="onDeviceImageChange" class="show-for-sr">
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
