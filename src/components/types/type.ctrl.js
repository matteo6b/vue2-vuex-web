import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'type',
  created() {
    if (this.$route.params.id) {
      this.$store.dispatch('types/get', this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters({ type: 'types/getType' }),
  },
  methods: {
    ...mapActions({ updateValues: 'types/updateValues', create: 'types/create', update: 'types/update' }),
    submit() {
      if (this.type._id) {
        const id = this.type._id;
        const type = this.type;
        this.update({ id, type, router: this.$router });
      } else {
        const type = this.type;
        this.create({ type, router: this.$router });
      }
    },


  },

};
