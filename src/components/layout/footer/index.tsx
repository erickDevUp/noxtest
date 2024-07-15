import React from 'react'
import { BtnNav } from '../nav/BtnNav'
import { navRoutes } from '../nav/data'
import { Button, IconButton, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { dataSN } from './dataSN'
import Link from 'next/link'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <Stack paddingTop={16} px={[7,0]} paddingBottom={5}spacing={10} color={"#757575"} maxW={1440} margin={"auto"}>
            <Stack justifyContent={"space-between"} direction={["column","row"]} align={["start","center"]} >
                <Image src={"img/logotipo_nox.svg"} alt="logotipo" width={87} height={40} />
                <Stack direction="row" align="center"  wrap={"wrap"} spacing={2}>
                    {navRoutes.map((route) => (
                        <BtnNav id={route.id} label={route.label} href={route.href} />
                    ))}
                </Stack>
            </Stack>
            <Stack justifyContent={"space-between"} direction="row" align="center" >
                <Text fontSize={["xs","sm"]}>© 2024 Nox Creations. All rights reserved</Text>
                <Stack direction="row" align="center"  spacing={3} pr={5}>
                    {dataSN.map((data) => (
                        <Link href={data.href} key={data.id}>
                            <IconButton
                                aria-label={data.id}
                                borderRadius={"full"}
                                size="xs"
                                icon={<data.icon />}
                            />
                        </Link>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}