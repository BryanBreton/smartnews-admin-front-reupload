import { shallowMount } from "@vue/test-utils"
import Administration from "@/views/Administration"
import Vue from "vue"
Vue.config.ignoredElements = ["v-card"]

jest.mock("@/security/security-manager", () => ({
  securityManager: {
    getUser: jest.fn(),
    signIn: jest.fn(),
    signOut: jest.fn()
  }
}))

describe("Administration.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Administration, {})
  })

  describe("Component", () => {
    it("components are Vue instances", () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
    it("is a Administration component", () => {
      expect(wrapper.is(Administration)).toBe(true)
    })
  })
})
