
import { Button, Flex, Stack } from '@chakra-ui/react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { navRoutes } from './data';
import Image from 'next/image';
import GreenButtom from '@/components/customs/GreenButtom';
import Link from 'next/link';
import { MainBtnsNav } from './BtnNav';

export default function Nav() {
    return (
        <Stack bg="linear-gradient(#F0FAF4, #F3FBF6, #FFFFFF)" paddingY={10} justifyContent={"space-between"} direction="row" align="center" color={"nox.text"}>
            <Stack spacing={5} direction="row" align="center" justifyContent={["space-between", "normal"]} w="full">

                <Image src={"img/logotipo_nox.svg"} alt="logotipo" width={87} height={40} />
                <Flex align="center">
                    <DesktopNav routes={navRoutes} />
                    <MobileNav routes={navRoutes} />
                </Flex>
            </Stack>
            <Stack display={['none', 'none', 'flex', 'flex']} direction="row" align="center" spacing={2}>
                <MainBtnsNav />
            </Stack>
        </Stack>
    );
};