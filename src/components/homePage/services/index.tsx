import { Stack } from "@chakra-ui/react"

import Card from "./Card"
import { data } from "./data"
import LayoutSection from "../../layout/layoutSection"

type Props = {}

export default function Services({ }: Props) {
    return (
        <LayoutSection title="Servicios a la medida" subtitle="Te adelantamos algunos de nuestros servicios que podemos ofrecerte">
            <Stack id="Servicios" wrap={"wrap"} spacing={10} align={"center"} direction="row" justify={"center"}>
                {data.map((item, index) => (
                    <Card title={item.title} text={item.text} icon={<item.icon />} key={item.id} />
                ))}
            </Stack>
        </LayoutSection>
    )
}