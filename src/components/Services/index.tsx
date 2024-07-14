import { Stack } from "@chakra-ui/react"

import Card from "./Card"
import { data } from "./data"

type Props = {}

export default function Services({ }: Props) {
    return (
        <Stack>
            {data.map((item, index) => (
                <Card title={item.title} text={item.text} icon={<item.icon />} key={item.id} />
            ))}
        </Stack>
    )
}