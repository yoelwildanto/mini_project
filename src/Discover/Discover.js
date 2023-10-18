import React from 'react'
import {Box, Grid, GridItem} from "@chakra-ui/react"
import Footer from '../HomePage/Footer'

const Discover = () => {
  return (
   <Box>
    <Grid h={"600px"} gridTemplateColumns={"300px auto"}>
    <GridItem borderRight={"0.5px solid #DCDCDC		"} bg={"white"}>
        <Box></Box>
    </GridItem>
    <GridItem bg={"white"}> Discovery </GridItem>
    </Grid>
    <Footer/>
   </Box>
  )
}

export default Discover
