import Vue from 'vue'
import MainView from '@/components/MainView'

describe('MainView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Afeefa Events')
  })
})
