import { mapGetters, mapActions } from 'vuex';

import * as VueGoogleMaps from 'vue2-google-maps';

import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAyWDg7_OABEHrKY_dLxTeQqUzll8cumI4',
    v: '3.26',
    libraries: 'places', //// If you need to use place input
  },
});

export default {
  name: 'place',
  computed: {
    ...mapGetters({  }),
  },
  methods: {
    ...mapActions({  }),
    setPlaceText(place) {
      this.place = place;
    },
    setPlace(place) {
      this.marker = {};
      this.marker = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
    },
  },

  data() {
    return {
      place: 'Barcelona, España',
      marker: {
        lat: 41.38,
        lng: 2.17,
      },
    };
  },


};
