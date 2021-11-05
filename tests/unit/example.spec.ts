import { shallowMount } from '@vue/test-utils'
import UserCard from '@/components/UserCard.vue'

describe('UserCard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(UserCard, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
