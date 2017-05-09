import { mapGetters, mapActions } from 'vuex';
import imageAPI from '../../api/image-api'

export default {
  name: 'profile',
  computed: {
    ...mapGetters({  }),
  },
  methods: {
    ...mapActions({  }),
    onDeviceImageChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      const formData = new FormData();
      formData.append('file', files[0]);

      imageAPI.create(formData, (res) => {
        console.log(res);
      }, err => console.log('err', err));
    },


  },

};
