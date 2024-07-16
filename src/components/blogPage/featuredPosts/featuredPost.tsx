import { Badge, Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

import Link from "next/link";

type Props = {
    img: string,
    date: string,
    title: string,
    description: string,
    author: string,
    tags: string[],
    slug: string
}

export default function FeaturedPost({ img, date, author, title, description, tags, slug, }: Props) {
    return (
        <Stack direction={["column", "row"]} h={"full"} as={Link} href={`blog/${slug}`} maxW={600} w={"full"} spacing={5}>
            <Image src={img} alt="blog-1" width={["full",320]} height={["full",200]} />
            <Stack justifyContent={"space-between"} pb={3}>
                <Text as="span" fontSize={"sm"} fontWeight={"semibold"} color="nox.text-blog-date">{author + " • " + date}</Text>
                <Stack justifyContent={"space-between"} align={"center"} direction={"row"}>
                    <Heading as="h3" fontSize={"2xl"} fontWeight={"semibold"} color="nox.text-blog">{title}</Heading>
                    <Box display={["flex", "none"]}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Box>
                </Stack>

                <Text fontWeight={"medium"} pr={5} color="nox.text-blog-light"
                    css={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxHeight: "4.5em",
                    }}>{description}</Text>
                <Stack direction={"row"} wrap={["wrap","nowrap"]} spacing={2}>
                    {tags.map((tag) => (
                        <Badge colorScheme='green' borderRadius={"full"} fontSize={"xs"} fontWeight={"semibold"} textColor={"nox.primary"} background={"#0AC05E20"} px={4} py={1}>{tag}</Badge>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}