import React, { FC, useState } from 'react'
import { GetStaticProps } from 'next'
import PopulationGraph from './populationGraph'
import PcPrefecture from './pcPrefecture'
import SmartphonePrefecture from './smartphonePrefecture'
import { useMediaQuery } from 'react-responsive'

const Styles: { [key: string]: React.CSSProperties } = {
  center: {
    textAlign: 'center',
  },
}

export default function Home(props: any) {
  const [population, setPopulation] = useState<
    {
      prefName: string
      data: {
        year: number
        value: number
      }[]
    }[]
  >([])
  const isPcScreen = useMediaQuery({ query: '(min-width: 767px)' })
  const isSmartphoneScreen = useMediaQuery({ query: '(max-width: 767px)' })

  //const fetcher = (url: any) => fetch(url, client_keys).then((res) => res.json())
  const clickCheckbox = async (event: any) => {
    console.log(event.checked)

    if (event.checked) {
      let existPopulation = population.slice()
      const clientKeys: any = {
        headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
      }
      const url: any = encodeURI(
        'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=' +
          event.id
      )
      const posts = await fetch(url, clientKeys).then((res) => res.json())
      existPopulation.push({
        prefName: event.name,
        data: posts.result.data[0].data,
      })
      setPopulation(existPopulation)
    } else {
      let deletePopulation = population.filter(function (item) {
        return item.prefName != event.name
      })
      setPopulation(deletePopulation)
    }
    return
  }

  return (
    <main>
      <h1 style={Styles.center}>都道府県人口推移グラフ</h1>
      {isSmartphoneScreen && (
        <SmartphonePrefecture
          prefectures={props.posts.result}
          onChange={clickCheckbox}
        />
      )}
      {isPcScreen && (
        <PcPrefecture
          prefectures={props.posts.result}
          onChange={clickCheckbox}
        />
      )}
      <PopulationGraph populationData={population} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const url = encodeURI(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures'
  )
  const keys: any = {
    headers: { 'x-api-key': process.env.API_KEY },
  }
  const posts = await fetch(url, keys).then((res) => res.json())
  return {
    props: {
      posts: posts,
    },
  }
}
