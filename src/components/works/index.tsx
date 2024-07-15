import { Button, Stack } from "@chakra-ui/react"
import { buttonsTags, data } from "./data"
import Card from "./card"
import LayoutSection from "../layout/layoutSection"
import BtnsSelect from "./btnsSelect"



type Props = {}

export default function Works({ }: Props) {
    return (
        <LayoutSection title={"Selección de trabajos"} subtitle="Estos son algunos trabajos que hemos trabajado" >
           <BtnsSelect/>
            <Stack id="works" spacing={[2,5]} align={"center"} justify={"center"} direction={"row"} wrap={"wrap"}>
                {data.map((item) => (
                    <Card img={item.img} name={item.name} alt={item.name + " nox work"} key={item.id} />
                ))}
            </Stack>
        </LayoutSection>
    )
}