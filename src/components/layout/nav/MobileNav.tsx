"use client"

import { Flex, IconButton, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { NavRoutes } from './data';
import { Close, Hamburger } from '@/components/icons/nav';
import { BtnNav, MainBtnsNav } from './BtnNav';

interface Props {
  routes: NavRoutes;
}

export default function MobileNav({ routes }: Props) {

  const [display, changeDisplay] = useState(false)

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        size="md"
        mr={2}
        background={"none"}
        icon={<Hamburger />}
        zIndex={20}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => changeDisplay(!display)}
      />
      {
        display && <Flex
          w={"full"}
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          padding={10}

        >
          <Flex justify="flex-end">
            <IconButton
              aria-label="Close Menu"
            
              size="xs"
              icon={<Close />}
              background={"none"}
              onClick={() => changeDisplay(false)}
            />
          </Flex>
          <Stack align={"center"} spacing={5} pb={5}>
            {routes.map((route) => (
              <BtnNav key={route.id} id={route.id} label={route.label} href={route.href} />
            ))}

          </Stack>
          <Stack display={['flex', 'flex', 'none', 'none']} direction="column" align="center" spacing={2}>
            <MainBtnsNav />
          </Stack>
        </Flex>

      }    </>
  );
};