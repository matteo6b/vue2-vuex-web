<template>
  <div>
  <md-toolbar>
     <h1 class="md-title" style="flex: 1">My Title</h1>
     <md-button class="md-icon-button">
       <md-icon>more_vert</md-icon>
     </md-button>
   </md-toolbar>

   <md-theme md-name="teal">
     <md-button class="md-primary">Primary Button</md-button>
     <md-button class="md-accent">Accent Button</md-button>
     <md-button class="md-raised md-primary">Raised Primary Button</md-button>
   </md-theme>

   <md-theme md-name="purple">
     <md-button class="md-primary">Primary Button</md-button>
     <md-button class="md-accent">Accent Button</md-button>
     <md-button class="md-raised md-primary">Raised Primary Button</md-button>
   </md-theme>
 </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'light-green',
      hue: 700,
    },
    accent: 'red',
  },
  teal: {
    primary: 'blue',
    accent: 'pink',
  },
  purple: {
    primary: 'purple',
    accent: 'orange',
  },
});
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
