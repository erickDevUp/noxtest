import { Text } from '@chakra-ui/react'
import React from 'react'

type Props = {text: string}

export default function Subtitle({text}: Props) {
  return (
    <Text fontSize={"lg"} fontWeight={"normal"} color={"nox.text"} align={"center"}>
      {text}
    </Text>
  )
}