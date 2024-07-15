import { Heading, Image, Stack, Text } from '@chakra-ui/react'

import React from 'react'

type Props = {
    photo: string,
    alt: string,
    name: string,
    role: string,
}

export default function Profile({ photo, alt, name, role }: Props) {
    return (
        
        <Stack maxW={[130,"100%"]} align={"center"} textAlign={"center"}>
            <Image src={photo} alt={alt} width={100} height={100} borderRadius={"full"} objectFit={"cover"} />
            <Heading as='h4' pt={1} size={["sm","md"]} fontWeight={"semibold"} color={"nox.text"}>
                {name}
            </Heading>
            <Text fontSize={"md"} fontWeight={"normal"} color={"nox.text"}>
                {role}
            </Text>
        </Stack>
    )
}