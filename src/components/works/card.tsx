import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    img: string,
    name: string,
    alt: string,
}

export default function Card({ img, name, alt }: Props) {
    return (
        <Box position={"relative"} width={"fit-content"} height={"fit-content"}>
            <Image src={img} alt={alt} width={230} height={230} objectFit={"cover"}
            ></Image>
            <Box position={"absolute"} w={"100%"} h={"fit-content"} py={1} bottom={0} bg={"nox.bg"} bgGradient="linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))" >
                <Text fontSize={"lg"} fontWeight={"medium"} color={"white"} textAlign={"center"}>
                    {name}
                </Text>
            </Box>
        </Box >
    )
}