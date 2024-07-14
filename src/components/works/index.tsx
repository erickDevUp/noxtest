import { Stack } from "@chakra-ui/react"
import {data} from "./data"
import Card from "./card"



type Props = {}

export default function Works({ }: Props) {
    return (
        <Stack spacing={10} align={"center"} justify={"center"} direction={"row"} wrap={"wrap"}>
            {data.map((item) => (
                <Card img={item.img} name={item.name} alt={item.name+" nox work"} key={item.id} />
            ))}
        </Stack>
    )
}