import { AspectRatio, Box, FormControl, Input, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'
import Contacts from './contacts'
import { data } from './data'
import LayoutSection from '../../layout/layoutSection'
import GreenButtom from '../customs/GreenButtom'
import Form from './form'

type Props = {}
//aspect ratio cuadrado

export default function Contact({ }: Props) {
    return (
        <>
            <Stack id='Contacto' direction={["column","row"]} maxW={1920} w={'full'} m={"auto"}>

                <AspectRatio ratio={16 / 9} w={'full'} >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1091.1460806470911!2d-82.38725352754689!3d23.091116820951388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scu!4v1711133515224!5m2!1ses!2scu" loading="lazy" ></iframe>
                </AspectRatio>
                <Stack w={'full'} p={10} alignItems={"start"}>
                    <LayoutSection textAlign='start' title='Contacto' subtitle='Escriba los siguientes datos con la infromación que nos quiera hacer llegar.'>
                       <Form />
                        <Stack direction={["column","row"]} gap={10} alignItems={["start","center"]}>
                            {data.map((contact) => (
                                <Contacts icon={<contact.icon />} key={contact.id} text={contact.text} textLink={contact.textLink} href={contact.href} />
                            ))}
                        </Stack>
                    </LayoutSection>
                </Stack>
            </Stack >
        </>
    )
}