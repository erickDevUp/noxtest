import { Stack } from "@chakra-ui/react"
import {data} from "./data"
import Profile from "./profile"



type Props = {}

export default function Team({ }: Props) {
    return (
        <Stack>
            {data.map((item) => (
                <Profile photo={item.photo} alt={item.name+" nox team"} name={item.name} role={item.role} key={item.id} />
            ))}
        </Stack>
    )
}