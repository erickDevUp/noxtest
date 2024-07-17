import { Stack } from '@chakra-ui/react'
import React from 'react'
import Title from '../homePage/customs/Title'
import Subtitle from '../homePage/customs/Subtitle'

type Props = {
  title: string;
  subtitle?: string;
  maxW?: number;
  textAlign?:"center"|"end"|"start"|"left"|"right";
  children: React.ReactNode;
  id?:string
}

export default function LayoutSection({id, title, subtitle = "", maxW = 800,textAlign="center", children }: Props) {
  return (
  <Stack id={id} spacing={[10,16]}>
    <Stack maxW={maxW} textAlign={textAlign} spacing={5} margin={"auto"}>
      <Title text={title} />
      <Subtitle text={subtitle} />
    </Stack>
    {children}
  </Stack>
  )
}