import React from 'react'
import { data } from './data'
import Card from './Card'
import Title from '../customs/Title'
import Subtitle from '../customs/Subtitle'
import { Box, Stack } from '@chakra-ui/react'
import LayoutSection from '../layout/layoutSection'

type Props = {}

export default function HowWeWork({ }: Props) {
  return (

    <LayoutSection title={"¿Cómo trabajamos?"} subtitle={"Le ayudamos a desarrollar cualquier tipo de solución. Debe seguir los siguientes pasos para podernos comunicar y conocer sus necesidades."}>
      {data.map((item) => (
        <Card title={item.title} text={item.text} btnText={item.btnText} btnLink={item.btnLink} img={item.img} imgPosition={item.imgPosition} key={item.id} />
      ))}
    </LayoutSection>

  )
}