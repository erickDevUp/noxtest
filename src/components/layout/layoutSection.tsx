import { Stack } from '@chakra-ui/react'
import React from 'react'
import Title from '../customs/Title'
import Subtitle from '../customs/Subtitle'

type Props = {
  title: string;
  subtitle: string
  children: React.ReactNode
}

export default function LayoutSection({ title, subtitle, children }: Props) {
  return (<Stack spacing={10}>
    <Stack maxW={800} textAlign={"center"} spacing={5} margin={"auto"}>
      <Title text={title} />
      <Subtitle text={subtitle} />
    </Stack>
    {children}
  </Stack>
  )
}