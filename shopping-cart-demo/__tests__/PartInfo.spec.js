import { mount,config  } from '@vue/test-utils';
import PartInfo from '../src/parts/PartInfo.vue'

config.showDeprecationWarnings = false

describe('Mounted App', () => {
  const wrapper = mount(PartInfo,{
    propsData: {
      partType: 'arms',
      id:1
    }
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders the correct markup', () => {
    expect(wrapper.html()).toContain('You have selected arms with Index 1')
  })
})
