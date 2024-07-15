import { Box, FormControl, Input, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'
import GreenButtom from '../customs/GreenButtom'

export default function Form() {
  return (
    <FormControl>
      <Stack spacing={5} justify={"space-between"} maxWidth="container">
        <Stack direction={{ base: "column", md: "row" }} spacing={5} justify={"space-between"}>
          <Input variant='outline' placeholder='Nombre' focusBorderColor='nox.primary' />
          <Input variant='outline' placeholder='Apellido' focusBorderColor='nox.primary' />
        </Stack>
        <Input variant='outline' placeholder='Correo' type='email' focusBorderColor='nox.primary' />
        <Input variant='outline' placeholder='Telefono' type='tel' focusBorderColor='nox.primary' />
        <Textarea variant='outline' placeholder='Escriba en un breve texto' focusBorderColor='nox.primary' />
        <Box alignSelf={"end"}>
          <GreenButtom text='Enviar' link='#' />
        </Box>
      </Stack>
    </FormControl>
  )
}