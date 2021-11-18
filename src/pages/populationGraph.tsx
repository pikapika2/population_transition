import React from 'react'
import useSWR from 'swr'
import fetch from 'unfetch'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

const keys: any = {
  headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
}

const fetcher = (url: any) => fetch(url, keys).then((res) => res.json())

const PopulationGraph: React.FunctionComponent = () => {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
  }

  const res: any = useSWR(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=33',
    fetcher
  )
  console.log(res)
  if (!res.data) {
    return <div>loading</div>
  }
  /*if(error){
  	return (
      <div>
        fail to load
      </div>
  	)
  }*/

  let data = []
  let year = []

  for (let pd of res.data.result.data[0].data) {
    data.push(pd.value)
    year.push(pd.year)
  }

  const options = {
    title: {
      text: '都道府県人口推移',
    },
    yAxis: {
      title: {
        text: '人口'
      }
    },
    xAxis: {
      title: {
        text: '年度'
      },
      categories: year,
    },
    series: [
      {
        data: data,
      },
    ],
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default PopulationGraph
