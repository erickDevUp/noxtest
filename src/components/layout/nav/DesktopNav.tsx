import { Flex } from "@chakra-ui/react";
import { BtnNav } from "./BtnNav";
import { NavRoutes } from "./data";

interface Props {
  routes: NavRoutes;
}

export default function DesktopNav({ routes }: Props) {
  return (
    <Flex display={["none", "none", "flex", "flex"]}>
      {routes.map((route) => (
        <BtnNav
          key={route.id}
          id={route.id}
          label={route.label}
          href={route.href}
        />
      ))}
    </Flex>
  );
}
