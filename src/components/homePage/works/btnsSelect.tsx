"use client";
import { Button, Stack } from "@chakra-ui/react";
import { buttonsTags } from "./data";
import { useState } from "react";

export default function BtnsSelect() {
  const [activeId, setActiveId] = useState(1); // Puedes cambiar el valor inicial según sea necesario

  return (
    <Stack
      spacing={3}
      pl={[0, 4]}
      align={"center"}
      justify={["center", "start"]}
      direction={"row"}
      wrap={"wrap"}
    >
      {buttonsTags.map((item) => (
        <Button
          _active={{
            bg: "nox.primary",
            color: "white",
          }}
          isActive={item.id === activeId}
          onClick={() => setActiveId(item.id)}
          key={item.id}
          variant="ghost"
          w="fit-content"
          borderRadius={"full"}
          fontSize={"md"}
          fontWeight={"semibold"}
          color={"#696969"}
        >
          {item.text}
        </Button>
      ))}
    </Stack>
  );
}
