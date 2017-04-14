import { mapGetters } from 'vuex';
import login from './login';
import register from './register';

export default {
  name: 'auth',
  components: {
    login,
    register,
  },
  computed: {
    ...mapGetters({ user: 'auth/getUser' }),
  },
  methods: {

  },

};
