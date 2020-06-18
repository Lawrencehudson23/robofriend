//NOTE: MOUNT full dom  (headless browser or jsdom)
//RENDER cheerio

import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'

import React from 'react'
import Card from './Card'

it('expect to render Card component', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper.debug())
        .toMatchSnapshot()
})

