import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import SmartphonePrefecture from '../pages/smartphonePrefecture'

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

describe('<SmartphonePrefecture />', () => {
  it('初期化が成功しているか', () => {
    let emptyData: any = []
    const onChange = jest.fn()
    act(() => {
      render(
        <SmartphonePrefecture prefectures={emptyData} onChange={onChange} />,
        container
      )
    })
    expect(container.textContent).toBe('not data')
  })
  it('データが入ったときに正しく動くか', () => {
    let dummyData: any = [
      { prefCode: 48, prefName: '謎謎県' },
      { prefCode: 49, prefName: '架空県' },
    ]
    const onChange = jest.fn()
    act(() => {
      render(
        <SmartphonePrefecture prefectures={dummyData} onChange={onChange} />,
        container
      )
    })
    expect(container.textContent).toBe('謎謎県架空県')
    expect(container.innerHTML).toBe(
      '<div><label style="margin: 3px; border: 2px solid #006dd9; display: inline-block;"><input style="margin: 3px; border: 2px solid #006dd9; display: inline-block;" type="checkbox" id="48" name="謎謎県">謎謎県</label><label style="margin: 3px; border: 2px solid #006dd9; display: inline-block;"><input style="margin: 3px; border: 2px solid #006dd9; display: inline-block;" type="checkbox" id="49" name="架空県">架空県</label></div>'
    )
  })
})
