import { Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {text: string}

export default function Title({text}: Props) {
  return (
    <Heading as='h2' size={["xl","2xl"]} fontWeight={"bold"} color={"nox.text"} textAlign={"center"}>
      {text}
    </Heading>
  )
}