import React from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

type Props = {
  populationData: {
    prefName: string
    data: {
      year: number
      value: number
    }[]
  }[]
}

const PopulationGraph: React.FunctionComponent<Props> = ({
  populationData,
}) => {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
  }

  if (typeof populationData === 'undefined' || populationData.length === 0) {
    return <div>not data</div>
  }

  let series = []
  let year = []

  for (let p of populationData) {
    let data = []

    for (let pd of p.data) {
      data.push(pd.value)
      year.push(pd.year)
    }
    series.push({
      name: p.prefName,
      data: data,
    })
  }

  const options = {
    title: {
      text: '都道府県別人口推移',
    },
    yAxis: {
      title: {
        text: '人口',
      },
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: year,
    },
    series: series,
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default PopulationGraph
