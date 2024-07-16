import React from 'react'

type Props = {
    type: "back" | "next",
    numberPages: number,
    pageNumber: number
}
import { Button } from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import { BackArrow, NextArrow } from '@/components/icons/arrows'

export default function ArrowBtn({ type, numberPages, pageNumber }: Props) {
    const isNext = type === "next"
    const router = useRouter()
    const path = usePathname()

    const handleNav = () => {
        const cantNav = isNext ? (numberPages < pageNumber + 1) : (0 >= pageNumber - 1)
        console.log(!cantNav)
        
        if (!cantNav) {
            router.push(`${path}?page=${isNext ? (pageNumber + 1) : (pageNumber - 1)}`)
        }
    }

    return (
        <Button
            display={["none", "flex"]}
            isDisabled={isNext ? (numberPages < pageNumber + 1) : (0 >= pageNumber - 1)}
            onClick={()=>handleNav()}
            variant={"ghost"}
            fontSize={"sm"}
            color={"nox.text-blog-light"}
            leftIcon={!isNext ? <BackArrow /> : <></>}
            rightIcon={isNext ? <NextArrow /> : <></>}
        >{isNext ? "Siguientes" : "Anteriores"}</Button>

    )
}