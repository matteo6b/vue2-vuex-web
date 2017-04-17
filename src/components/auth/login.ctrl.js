
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'login',
  computed: {
    ...mapGetters({ user: 'auth/getUser' }),
  },
  methods: {
    ...mapActions({ updateValues: 'auth/updateValues', login: 'auth/login' }),
    submit() {
      this.login();
    },

  },

};
