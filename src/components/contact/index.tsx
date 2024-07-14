import { Stack } from '@chakra-ui/react'
import React from 'react'
import Contacts from './contacts'
import { data } from './data'

type Props = {}

export default function Contact({}: Props) {
  return (
    <Stack direction={'row'} gap={10} alignItems={'center'}>
        {data.map((contact) => (
            <Contacts icon={<contact.icon/>} key={contact.id} text={contact.text} textLink={contact.textLink} href={contact.href} />
        ))}
    </Stack>
  )
}