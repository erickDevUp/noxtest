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

  const [display, changeDisplay] = useState('none')

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        size="md"
        mr={2}
        icon={<Hamburger />}
        onClick={() => changeDisplay('flex')}
        display={['flex', 'flex', 'none', 'none']}
      />

      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        paddingY={10}

      >
        <Flex justify="flex-end">
          <IconButton
            aria-label="Close Menu"
            size="xs"
            icon={<Close />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {routes.map((route) => (
            <BtnNav id={route.id} label={route.label} href={route.href} />
          ))}

        </div>
        <Stack display={['flex', 'flex', 'none', 'none']} direction="column" align="center" spacing={2}>
          <MainBtnsNav />
        </Stack>
      </Flex>

    </>
  );
};