import {Heading, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Subtitle from '../customs/Subtitle'
import GreenButtom from '../customs/GreenButtom'

type Props = {
    img: string,
    text: string,
    title: string,
    btnText: string,
    btnLink: string,
    imgPosition: "left" | "right" | string
}

export default function Card({ img, text, title, btnText, btnLink, imgPosition }: Props) {
    return (
        <Stack align={"center"} direction={['column',imgPosition === "left" ? "row" : "row-reverse"]}>
           
            <Image src={img} alt="card" width={607} height={551} />
            <Stack align={"start"} spacing={8} textAlign={"start"} >
                <Heading as='h3' pt={1} size={"lg"} fontWeight={"medium"} color={"nox.text"} >
                    {title}
                </Heading>
                <Subtitle text={text} />
                <GreenButtom text={btnText} link={btnLink} />
            </Stack>
        </Stack>
    )
}