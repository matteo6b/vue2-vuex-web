import Vue from 'vue';
import auth from '@/components/auth/main';

describe('main.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(auth);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.page-auth span').textContent)
      .to.equal('Artists Street');
  });
});
