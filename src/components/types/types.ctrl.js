import { mapGetters, mapActions } from 'vuex';


export default {
  beforeCreate() {
    this.$store.dispatch('types/all');
  },
  name: 'types',
  computed: {
    ...mapGetters({ option: 'types/getAll' }),
  },
  methods: {
    ...mapActions({ delete: 'types/delete' }),
    remove(id, index) {
      this.delete({ id, index });
      location.reload();
    },
  },

};
