import GreenButtom from '@/components/homePage/customs/GreenButtom'
import { Button, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

type Props = {
    label: string,
    href: string,
    onClick?: () => void
}

export function BtnNav({ label, href ,onClick}: Props) {
    return (<Button
        as={Link}
        variant="ghost"
        aria-label={label}
        w="fit-content"
        borderRadius={"full"}
        href={href}
        fontSize={"sm"}
        fontWeight={"semibold"}
        onClick={onClick}
    >
        {label}
    </Button>
    )
}

export function MainBtnsNav() {
    return (
        <>
            <Button
                as={Link}
                variant="ghost"
                aria-label={"Conoce más"}
                w="fit-content"
                borderRadius={"full"}
                href={"#"}
                fontSize={"md"}
                fontWeight={"semibold"}
                color={"#515151"}
                p={6}
            >
                Conoce más
            </Button>
            <GreenButtom text='Contactar' link='#' />

        </>

    )
}