import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type Props = { text: string, title: string, icon: React.ReactNode }

export default function Card({ text, title, icon }: Props) {
    return (
        <Stack maxW="350px" align={"center"} spacing={2}>
            {icon}
            <Heading as='h3' pt={1} size={"lg"} fontWeight={"bold"} color={"nox.text"} textAlign={"center"}>
                {title}
            </Heading>
            <Text fontSize={"md"} fontWeight={"normal"} color={"nox.text-secondary"} align={"center"}>
                {text}
            </Text>
        </Stack>
    )
}