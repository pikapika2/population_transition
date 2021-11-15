import React, { FC } from 'react'

export default function Home(props: any) {
  return (
    <div>
      <h1>template</h1>
      {props.posts.result.map((item: any) => {
        return (
          <label key={item.prefCode}>
            <input type="checkbox" key={item.prefCode} id={item.prefCode} />
            {item.prefName}
          </label>
        )
      })}
    </div>
  )
}

export async function getServerSideProps() {
  const url = encodeURI(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures'
  )
  const keys: any = {
    headers: { 'x-api-key': process.env.API_KEY },
  }
  const posts = await fetch(url, keys).then((res) => res.json())
  console.log(posts.result)
  return {
    props: {
      posts: posts,
    },
  }
}
