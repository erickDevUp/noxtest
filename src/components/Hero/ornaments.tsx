import { Image } from "@chakra-ui/react";

export default function Ornaments() {
    return (
        <>
            <Image className="float-animation-ornament" pl={[0, 20]} objectFit={"scale-down"} src={"img/home/ornament1.png"} alt={"ornament 1 hero nox"} position={"absolute"} zIndex={8} top={["-150px", "-200px"]} width={"100%"} />
            <Image className="float-animation-ornament" display={["none", "block"]} objectFit={"scale-down"} src={"img/home/ornament2.png"} alt={"ornament 2 hero nox"} position={"absolute"} zIndex={8} left={"-150px"} bottom={"-100px"} />
            <Image className="float-animation-ornament" display={["none", "block"]} objectFit={"scale-down"} src={"img/home/ornament3.png"} alt={"ornament 3 hero nox"} position={"absolute"} zIndex={8} right={"-180px"} bottom={"-150px"} />
            <Image className="float-animation-ornament" objectFit={"scale-down"} src={"img/home/points1.svg"} alt={"ornament 4 hero nox"} position={"absolute"} left={[0, "-150px"]} zIndex={5} top={["-250px", "-100px"]} width={["100%", "auto"]} />
            <Image className="float-animation-ornament" display={["none", "block"]} objectFit={"scale-down"} src={"img/home/points2.svg"} alt={"ornament 5 hero nox"} position={"absolute"} right={"-180px"} zIndex={5} top={"-150px"} width={["100%", "auto"]} />

        </>
    )
}