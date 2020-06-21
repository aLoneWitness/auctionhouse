import { shallowMount } from '@vue/test-utils'
import Register from '@/views/Register.vue'

describe("Register Tests", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Register);
    });

    it("Renders", () => {
      wrapper = shallowMount(Register, {});
      expect(wrapper.exists()).toBe(true);
    });
});