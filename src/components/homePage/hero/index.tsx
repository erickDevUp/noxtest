import { Button, Heading, Image, Stack } from "@chakra-ui/react";
import Subtitle from "../customs/Subtitle";
import GreenButtom from "../customs/GreenButtom";
import Link from "next/link";
import Ornaments from "./ornaments";

export default function Hero() {
  return (
    <Stack
      textAlign={"center"}
      py={[0, 10]}
      position={"relative"}
      maxW={985}
      gap={8}
      margin={"auto"}
      bgImage={"img/home/heroLogo.png"}
      bgSize={"auto"}
      bgRepeat={"no-repeat"}
      bgPosition={"top"}
    >
      <Ornaments />
      <Heading as={"h1"} fontSize={["2xl", 50]} lineHeight={["normal", "50px"]}>
        ¿Quieres automatizar tu negocio y no sabes a quién acudir?
      </Heading>
      <Subtitle text="Somos la solución a tus necesidades. Tenemos las habilidades, el compromiso y la creatividad para llevar tus idea y tu negocio a otro nivel ofertándote la posibilidad de crear un sistema que se adapte a tus necesidades. Con Nox no existen barreras contáctenos para poderle ayudar." />
      <Stack direction={"row"} m={"auto"} spacing={5}>
        <GreenButtom link="#" text="Contactar" />
        <Button
          as={Link}
          variant="outline"
          borderColor={"nox.primary"}
          aria-label={"Conoce más"}
          w="fit-content"
          borderRadius={"full"}
          _hover={{ bg: "none" }}
          href={"#"}
          fontSize={"md"}
          fontWeight={"semibold"}
          color={"#515151"}
          p={6}
        >
          Conoce más
        </Button>
      </Stack>
    </Stack>
  );
}
