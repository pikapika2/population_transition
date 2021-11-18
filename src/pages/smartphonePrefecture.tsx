import React from 'react'

type Props = {
  prefectures:
    | {
        result: {
          prefCode: number
          prefName: string
        }[]
      }

  onChange: (event: any) => void
}

const Styles: { [key: string]: React.CSSProperties } = {
  bigbox: {
    margin: "3px",
    border: "2px solid #006DD9",
    display: "inline-block"
  },
}

const SmartphonePrefecture: React.FC<Props> = ({ prefectures, onChange }) => {
  if (typeof prefectures === 'undefined' || prefectures.result.length === 0) {
    return <div>not data</div>
  }
  return (
    <div>
      {prefectures.result.map((item) => {
        const id = String(item.prefCode)
        return (
            <label key={item.prefCode} style={Styles.bigbox}>
            <input style={Styles.bigbox}
            key={item.prefCode}
              type="checkbox"
              id={id}
              name={item.prefName}
              onChange={(e) => onChange(e.target)}
            />
            {item.prefName}
          </label>
        )
      })}
    </div>
  )
}

export default SmartphonePrefecture
