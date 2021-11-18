import React from 'react'

type Props = {
  prefectures:
    | {
        prefCode: number
        prefName: string
      }[]

  onChange: (event: any) => void
}

const PcPrefecture: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <div>
      {prefectures.map((item) => {
        const id = String(item.prefCode)
        return (
          <label key={item.prefCode}>
            <input
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
