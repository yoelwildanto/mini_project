import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { Heading, Stack, Text, Button, Image } from '@chakra-ui/react'
import foto from '../Asset/d.jpg'


function Buyingcard() {
    return(
    <div>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    transition="transform 0.2s" 
    _hover={{ 
        borderWidth: 3 , 
        borderColor: "blue.500" ,
      transform: 'scale(1.05)',
      boxShadow: 'xl', 
    }}
    >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={foto} 
        alt="Event Photo"
     
    />

    <Stack>
      <CardBody>
        <Heading size='md'>Nama Event</Heading>
        <Text py='2' color={"grey"}>
            Tanggal
            Jam
            Lokasi 
        </Text>
        </CardBody>

    </Stack>
    </Card>
</div>
)
}

export default Buyingcard;