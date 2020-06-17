import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe("Home Tests", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Home);
    });

    it("Renders", () => {
      wrapper = shallowMount(Home, {});
      expect(wrapper.exists()).toBe(true);
    });

    it("List Rendering #1", () => {
        wrapper.setData({
            storedItems: {
                item: {
                    name:'Item'
                },
                item: {
                    name:'Item'
                },
                item: {
                    name:'Item'
                },
                item: {
                    name:'Item'
                },
                item: {
                    name:'Item'
                }
            }
        })

        expect(wrapper.find('.item').exists()).toBe(!true);
    })

    it("List Rendering #1", () => {
        expect(wrapper.find('.item').exists()).toBe(false);
    })
});