import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe("Login Tests", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Login);
    });

    it("Renders", () => {
      wrapper = shallowMount(Login, {});
      expect(wrapper.exists()).toBe(true);
    });
});