import { Box, Image, Stack } from "@chakra-ui/react"
import { data } from "./data"
import Profile from "./profile"
import LayoutSection from "../layout/layoutSection"



type Props = {}

export default function Team({ }: Props) {
    return (
        <Box position={"relative"}>
            <Image className="float-animation-ornament" objectFit={"scale-down"} src={"img/home/points3.svg"} alt={"ornament nox"} position={"absolute"} right={0} zIndex={-5} top={["-50px", "-100px"]} width={190} height={216} />


            <LayoutSection maxW={1000} title={"El equipo creativo detrás de la puerta"} >
                <Stack wrap={"wrap"} spacing={[10, 32]} align={"start"} direction="row" justify={"center"}>
                    {data.map((item) => (
                        <Profile photo={item.photo} alt={item.name + " nox team"} name={item.name} role={item.role} key={item.id} />
                    ))}
                </Stack>
            </LayoutSection>
        </Box>
    )
}