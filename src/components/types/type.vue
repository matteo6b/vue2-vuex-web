<template>

  <md-layout md-gutter>
    <md-layout md-flex="100" md-align="center">
    <span class="md-display-3">Manage Type </span>
       </md-layout>
    <md-layout   md-align="center"  md-flex md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
          <label>Name</label>
          <md-input  :value="type.name" @input="updateValues({value:$event,type:'name'})" ></md-input>
        </md-input-container>

            <md-button @click.native="submit()" class="md-raised  md-primary"  >Save Changes</md-button>
      </form>
    </md-layout>

    </md-layout>
</template>
<script  src="./type.ctrl.js" lang="babel"  ></script>
