import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import "../../CSS/DetailEvent.css";

function Detail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state } = useParams();
  const [event, setEvent] = useState([]);

  const getEvent = async () => {
    try {
      const GET_EVENT = "http://localhost:8080/api/event/" + state;
      const response = await axios.get(GET_EVENT);
      setEvent(response.data);
    } catch (error) {
      return error;
    }
  };

  React.useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="container-detail">
      <Box boxSize="m">
        <Image w="100%" src={event.image} />
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%">
          <div style={{ textAlign: "left" }}>
            <h2>{event.name}</h2>
            <small>{event.date}</small>
            <p>{event.description}</p>
          </div>
        </GridItem>
        <GridItem w="100%">
          <div>
            <h1>{event.ticketPrice}</h1>
            <button onClick={onOpen}>Buy Ticket</button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  posuere
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Submit</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Detail;
