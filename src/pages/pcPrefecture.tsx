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
  pos: {
    display: "inline-block",
    fontSize: "18px"
  },
}

const PcPrefecture: React.FC<Props> = ({ prefectures, onChange }) => {
  if (typeof prefectures === 'undefined' || prefectures.result.length === 0) {
    return <div>not data</div>
  }
  return (
    <div>
      {prefectures.result.map((item) => {
        const id = String(item.prefCode)
        return (
            <label key={item.prefCode} style={Styles.pos}>
            <input
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

export default PcPrefecture
