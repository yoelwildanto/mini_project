import axios from "axios";
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Image, Text, Button, Flex, Center } from "@chakra-ui/react";
import "../../CSS/DetailEvent.css";

function Detail() {
  const { state } = useParams();
  const [event, setEvent] = useState([]);
  const [dateFormat, setDateFormat] = useState([]);

  const getEvent = async () => {
    try {
      const GET_EVENT = "http://localhost:8080/api/event/" + state;
      const response = await axios.get(GET_EVENT);
      setEvent(response.data);
      const format = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date(response.data.event_date));
      setDateFormat(format);
    } catch (error) {
      return error;
    }
  };

  React.useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="container-detail">
      <Box boxSize="m" marginBottom="30px">
        <Image w="100%" src={event.image} />
      </Box>
      <div className="grid-custom">
        <div style={{ textAlign: "left" }}>
          <Text fontSize="3xl">{event.title}</Text>
          <small>{dateFormat}</small>
          <br />
          <br />
        </div>
        <div>
          <Flex alignItems="center">
            <Center w="100px">
              <Text fontSize="2xl">$.{event.price}</Text>
            </Center>
            <Box w="auto">
              <Link to={`/transaction/${event.id}`}>
                <Button
                  color={"white"}
                  bg={"red"}
                  _hover={{ color: "black", bg: "grey" }}>
                  Buy Ticket
                </Button>
              </Link>
            </Box>
          </Flex>
        </div>
      </div>
      <p>{event.description}</p>
    </div>
  );
}

export default Detail;
