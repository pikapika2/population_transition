import React, { FC } from 'react'

export default function Home(props) {
  return (
    <div>
      <h1>template</h1>
      {props.posts.result.map((item) => {
        return (
          <label>
            <input type="checkbox" key={item.prefCode} />
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
  const key = {
    headers: {'x-api-key': process.env.API_KEY}
  }
  const posts = await fetch(url, key).then(res => res.json())
  console.log(posts.result)
  return {
    props: {
      posts: posts,
    },
  }
}