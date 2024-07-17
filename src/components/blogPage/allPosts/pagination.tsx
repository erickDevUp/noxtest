import { Box, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ArrowBtn from "./arrowBtn";

type Props = {
  numberPages: number;
  pageNumber: number;
};

export default function Pagination({ numberPages, pageNumber }: Props) {
  const path = usePathname();
  return (
    <Stack
      py={7}
      my={20}
      width={"full"}
      justifyContent={["center", "space-between"]}
      alignItems={"center"}
      direction={"row"}
      borderTopWidth={1}
      borderColor={"#BCBCBC"}
    >
      <ArrowBtn
        key={"back"}
        type="back"
        numberPages={numberPages}
        pageNumber={pageNumber}
      />
      <Box textAlign="center">
        {[...Array(numberPages)].map((_, index) => (
          <Button
            as={Link}
            key={index}
            href={`${path}?page=${index + 1}`}
            textColor={
              index + 1 === pageNumber ? "nox.primary" : "nox.text-blog-light"
            }
            background={index + 1 === pageNumber ? "#0AC05E20" : "transparent"}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
      <ArrowBtn
        key={"next"}
        type="next"
        numberPages={numberPages}
        pageNumber={pageNumber}
      />
    </Stack>
  );
}
