import { Heading } from "@chakra-ui/react";
import React from "react";

type Props = { title: string };

export default function TitleSection({ title }: Props) {
  return (
    <Heading
      as="h2"
      alignSelf={"start"}
      fontSize={"2xl"}
      fontWeight={"semibold"}
      color="nox.text-blog"
    >
      {title}
    </Heading>
  );
}
