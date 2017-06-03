<template>
  <md-layout md-gutter>
    <md-layout md-flex="100" md-align="center">
    <span class="md-display-3">Type List</span>
       </md-layout>
    <md-layout  v-if="option.length!=0"  md-align="center"  md-flex md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
      <md-table v-once>
        <md-table-header>
          <md-table-row>
            <md-table-head>Name</md-table-head>
            <md-table-head >Edit</md-table-head>
            <md-table-head >Delete</md-table-head>

          </md-table-row>
        </md-table-header>

        <md-table-body >
          <md-table-row v-for="(row, index) in option" :key="index" >
            <md-table-cell>{{row.name}}</md-table-cell>
            <md-table-cell >
              <md-button class="md-icon-button" :href = "'/type/' + row._id" >
            <md-icon>edit</md-icon>
          </md-button>
        </md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button" @click.native="remove(row._id,index)">
          <md-icon>delete</md-icon>
        </md-button>
          </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-layout>


    </md-layout>

</template>
<script  src="./types.ctrl.js" lang="babel"  ></script>
<style scoped>
.table{background-color: white;}
</style>
