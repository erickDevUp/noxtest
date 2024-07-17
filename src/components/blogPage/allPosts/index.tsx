"use client"
import React from 'react'
import { Posts } from './data'
import CardPost from '../customs/cardPost'
import { Stack } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation';
import Pagination from './pagination'
import TitleSection from '../customs/titleSection'

export default function AllPosts() {
    const postsPerPage = 6;
    const page = useSearchParams().get("page")

    const pageStr: any = page ?? '1';
    let pageNumber = Number.isNaN(parseInt(pageStr)) ? 1 : parseInt(pageStr);

    const currentPosts = Posts.slice((pageNumber - 1) * postsPerPage, pageNumber * postsPerPage);
    const numberPages = Math.ceil(Posts.length / postsPerPage)



    return (
        <Stack direction={"column"}>
            <TitleSection title='Todos los post' />
            <Stack mt={5} direction={["column", "row"]} wrap={["nowrap", "wrap"]} maxW={["full", "fit-content"]} spacing={8} justify={"center"}>
                {currentPosts.map((post,index) => (
                    <CardPost key={post.slug+pageNumber+index} slug={post.slug} author={post.author} date={post.date} title={post.title} description={post.description} tags={post.tags} img={post.img}  />
                ))}
            </Stack>
            <Pagination numberPages={numberPages} pageNumber={pageNumber} />

        </Stack>
    )
}