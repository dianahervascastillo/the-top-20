import React from 'react'
import { shallow } from 'enzyme'
import Card from '../../src/js/components/Card'

const movie = {
  "id":456740,
  "title":"Hellboy"
}


const tvshow = {
  "id":1399,
  "title":"Game of Thrones"
}

const people = {
  "id":1223786,
  "name":"Emilia Clarke"
}


describe('Card Unit Tests - Movie', () => {
  it('should display a card with title from movie', () => {
    // When
    const wrapper = shallow(
      <Card data={movie}>{movie.title}</Card>
    )
    // Then
    expect(wrapper.find('h3').text()).toEqual('Hellboy')
  })
})


describe('Card Unit Tests - Tv', () => {
  it('should display a card with title from tvshow', () => {
    // When
    const wrapper = shallow(
      <Card data={tvshow}>{tvshow.title}</Card>
    )
    // Then
    expect(wrapper.find('h3').text()).toEqual('Game of Thrones')
  })
})

describe('Card Unit Tests - People', () => {
  it('should display a card with title from people', () => {
    // When
    const wrapper = shallow(
      <Card data={people}>{people.name}</Card>
    )
    // Then
    expect(wrapper.find('h3').text()).toEqual('Emilia Clarke')
  })
})



