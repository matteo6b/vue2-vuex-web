<template>
  <md-layout md-gutter>
    <md-layout md-flex="100" md-align="center">
    <span class="md-display-3">Manage Place</span>
       </md-layout>
    <md-layout md-flex="100" md-align="right">
      <label>
        Address
  <gmap-autocomplete class="md-input" :value="place"
       @place_changed="setPlace">
     </gmap-autocomplete>
   </label>
     </md-layout>
     <br/>
     <md-layout md-flex="100" md-align="center">
  <gmap-map
      :zoom="15"  :center="marker"
    ref="mmm" style="width: 100%; height: 350px"
  >
  <gmap-marker :clickable="true" :position.sync="marker" :draggable="true"   >
  </gmap-marker>
</gmap-map>
</md-layout>
<md-button class="md-raised md-primary">Save Changes</md-button>
</md-layout>
</template>
<script  src="./place.ctrl.js" lang="babel"  ></script>
<style scoped>
input{
  height: 30px;
}
label{
  padding-bottom: 2rem;
}
span{
  padding-bottom: 1rem;
}
</style>
