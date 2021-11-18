import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import PopulationGraph from '../pages/populationGraph'

let container: any = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('<PopulationGraph />', () => {
  it('初期化が成功しているか', () => {
    let emptyData: any = []
    act(() => {
      render(<PopulationGraph populationData={emptyData} />, container)
    })
    expect(container.textContent).toBe('not data')
  })
})
