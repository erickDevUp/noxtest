import { Box, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    text: string;
    textLink: string;
    href: string;
    icon: React.ReactNode
}

export default function Contacts({ text, textLink, href, icon }: Props) {
    return (
        <Stack maxW={213} direction={'row'} alignItems={'center'}>
            <Box p={3}>
                {icon}
            </Box>
            <Stack gap={0}>
                <Text textColor={"nox.primary"} fontSize={'sm'} fontWeight={'semibold'}>{text}</Text>
                <Link fontSize={'xs'} href={href}>{textLink}</Link>
            </Stack>
        </Stack>
    )
}