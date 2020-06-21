import { shallowMount } from '@vue/test-utils'
import Place from '@/views/Place.vue'

describe("Place Tests", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Place);
    });

    it("Renders", () => {
      wrapper = shallowMount(Place, {});
      expect(wrapper.exists()).toBe(true);
    });
});