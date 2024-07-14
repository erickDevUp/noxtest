import { Stack } from '@chakra-ui/react'
import React from 'react'
import Title from '../customs/Title'
import Subtitle from '../customs/Subtitle'

type Props = {
  title: string;
  subtitle?: string;
  maxW?: number;
  children: React.ReactNode
}

export default function LayoutSection({ title, subtitle = "", maxW = 800, children }: Props) {
  return (
  <Stack spacing={[10,20]}>
    <Stack maxW={maxW} textAlign={"center"} spacing={5} margin={"auto"}>
      <Title text={title} />
      <Subtitle text={subtitle} />
    </Stack>
    {children}
  </Stack>
  )
}