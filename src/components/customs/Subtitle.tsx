import { Text } from '@chakra-ui/react'
import React from 'react'

type Props = {text: string, textAlign?: "center" | "start" | "end"}

export default function Subtitle({text,textAlign="center"}: Props) {
  return (
    <Text fontSize={"lg"} fontWeight={"normal"} color={"nox.text"} align={textAlign}>
      {text}
    </Text>
  )
}