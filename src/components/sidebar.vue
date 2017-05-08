<template>
  <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>
    <md-list>
       <md-list-item>
         <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
       </md-list-item>
     </md-list>
  </md-sidenav>
</template>
<script>
export default {
methods: {
  open(ref) {

  },
 close(ref) {

  },
},
};
</script>
