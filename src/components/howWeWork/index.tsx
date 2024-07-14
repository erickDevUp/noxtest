import React from 'react'
import { data } from './data'
import Card from './Card'

type Props = {}

export default function HowWeWork({ }: Props) {
  return (
    <>
    {data.map((item) => (
        <Card  title={item.title} text={item.text} btnText={item.btnText} btnLink={item.btnLink} img={item.img} imgPosition={item.imgPosition} key={item.id} />
    ))}
    </>
  )
}