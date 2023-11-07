import React from "react";
import { useParams } from "react-router-dom";
import eventsCard from "../../dummyData/card.json";
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
  const data = eventsCard.events;
  let DetailsEvent = data?.find((item) => item?.id === parseInt(state));
  return <div></div>;
}

export default Detail;
