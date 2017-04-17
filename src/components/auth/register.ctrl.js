import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'register',
  computed: {
    ...mapGetters({ user: 'auth/getUser' }),
  },
  methods: {
    ...mapActions({ updateValues: 'auth/updateValues', register: 'auth/register' }),
    submit() {
      this.register();
    },

  },

};
