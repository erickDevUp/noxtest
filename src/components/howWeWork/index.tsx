import React from 'react'
import { data } from './data'
import Card from './Card'
import Title from '../customs/Title'
import Subtitle from '../customs/Subtitle'
import { Box, Image, Stack } from '@chakra-ui/react'
import LayoutSection from '../layout/layoutSection'

type Props = {}

export default function HowWeWork({ }: Props) {
  return (
    <Box position={"relative"}>
      <Image className="float-animation-ornament" objectFit={"scale-down"} src={"img/home/points4.svg"} alt={"ornament nox"} position={"absolute"} left={0} zIndex={-5} top={["-50px", "-100px"]} width={190} height={216} />

      <LayoutSection title={"¿Cómo trabajamos?"} subtitle={"Le ayudamos a desarrollar cualquier tipo de solución. Debe seguir los siguientes pasos para podernos comunicar y conocer sus necesidades."}>
        <Stack >
          {data.map((item) => (
            <Card title={item.title} key={item.id} text={item.text} btnText={item.btnText} btnLink={item.btnLink} img={item.img} imgPosition={item.imgPosition} />
          ))}
        </Stack>
      </LayoutSection>
    </Box>

  )
}