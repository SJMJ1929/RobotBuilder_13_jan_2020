import { mount,config } from '@vue/test-utils';
import PartSelector from '../src/build/PartSelector.vue'

config.showDeprecationWarnings = false


describe('Mounted PartSelector', () => {
  const wrapper = mount(PartSelector,{
    propsData: {
      parts: [
        {
          id: 1,
          description:
            'A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.',
          title: 'Large Cyclops',
          src: 'head-big-eye.png',
          type: 'heads',
          cost: 1225.5,
        },
        {
          id: 2,
          description: 'A friendly robot head with two eyes and a smile -- great for domestic use.',
          title: 'Friendly Bot',
          src: 'head-friendly.png',
          cost: 945.0,
          type: 'heads',
          onSale: true,
        }
      ],
      position:'top'
    }
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders the correct markup ', () => {
     expect(wrapper.html()).toContain('<img src="head-big-eye.png" title="arm">')
     expect(wrapper.html()).toContain('<div class="part top">')
  })

})
