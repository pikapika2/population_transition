import React, { FC, useState } from 'react'
import { GetStaticProps } from 'next'
import PopulationGraph from './populationGraph'

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

  //const fetcher = (url: any) => fetch(url, client_keys).then((res) => res.json())

  const clickCheckbox = async (event: any) => {
    console.log(event.checked)

    if (event.checked) {
      let existPopulation = population.slice()
      const clientKeys: any = {
        headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
      }
      const url: any =
        'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=' +
        event.id
      const posts = await fetch(url, clientKeys).then((res) => res.json())
      existPopulation.push({
        prefName: event.name,
        data: posts.result.data[0].data,
      })
      setPopulation(existPopulation)
      return
    } else {
      let deletePopulation = population.filter(function (item) {
        return item.prefName != event.name
      })
      setPopulation(deletePopulation)
    }
  }

  return (
    <main>
      <h1>template</h1>
      {props.posts.result.map((item: any) => {
        return (
          <label key={item.prefCode}>
            <input
              type="checkbox"
              key={item.prefCode}
              id={item.prefCode}
              name={item.prefName}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>
              ): Promise<void> => clickCheckbox(e.target)}
            />
            {item.prefName}
          </label>
        )
      })}
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
