import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = { text: string; link: string };

export default function GreenButtom({ text, link }: Props) {
  return (
    <Button
      as={Link}
      href={link}
      bg={"nox.primary"}
      p={6}
      fontWeight={"semibold"}
      _hover={{ bg: "green.300" }}
      _active={{ bg: "green.300" }}
      color={"white"}
      fontSize={"md"}
      borderRadius={"full"}
    >
      {text}
    </Button>
  );
}
