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
      formData.append('type', 'artist');
      formData.append('file', files[0]);

      imageAPI.create(formData, (res) => {
        this.imageUrl = `${process.env.URL_API}images/${res.data}`;
      }, err => console.log('err', err));
    },


  },
  data() {
    return {
      imageUrl: null,
    };
  },

};
