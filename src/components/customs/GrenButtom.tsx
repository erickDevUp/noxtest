import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = { text: string }

export default function GrenButtom({ text }: Props) {
  return (
    <Button bg={"nox.primary"} p={6} fontWeight={"semibold"} _hover={{ bg: "green.300" }} _active={{ bg: "green.300" }} color={"white"} fontSize={"md"} borderRadius={"full"}>
      {text}
    </Button>
  )
}