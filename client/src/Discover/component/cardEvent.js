import { Image, Flex, Card, Spacer, Box, Grid } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { FormatRupiah } from "@arismun/format-rupiah";

export const DiscoveryCardEvent = (props) => {
  const [event, setEvent] = useState([]);
  const navigate = useNavigate();

  const dataEvent = async () => {
    try {
      const response = await axios.get(
        // `http://localhost:8080/event?categoryId=${props.categoryId}&cityId=${props.locationId}`
        `http://localhost:8080/event/list-all-event`

      );
      setEvent(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    dataEvent();
  }, [props.categoryId, props.locationId]);

  return (
    <Grid
      templateColumns={{
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      h={"fit-content"}
      gap={6}
      w={{ base: "75%", sm: "87%", md: "80%", lg: "75%" }}
    >
      {event?.length > 0 ? (
        event.map((data, index) => {
          return (
            <Card
              key={index}
              onClick={() => navigate(`/event/${data.id}`)}
              p={"0px 0px 10px 0px"}
              gap={2}
              fontSize={"14px"}
              h={"350px"}
              overflow={"hidden"}
              cursor={"pointer"}
              outline={"1px solid rgba(0, 0, 0, 0.1)"}
              _hover={{
                boxShadow: "0px 0px 13px 10px rgba(0, 0, 0, 0.1)",
                transform: "scale(1.01)",
              }}
            >
              <Box
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                h={"350px"}
              >
                <Image
                  src={`${process.env.REACT_APP_IMAGE_URL}/events/${data?.image}`}
                />
              </Box>
              <Flex direction={"column"} h={"full"} p={"0px 15px 10px 15px"}>
                <Box display={"flex"} flexDirection={"column"} gap={3}>
                  <Box>{data.eventName}</Box>
                  <Box>{new Date(data?.startDate).toDateString()}</Box>
                  <Box fontWeight={700} color={"home.primary"}>
                    <FormatRupiah value={data.hargatiket} />

                  </Box>
                </Box>

                <Spacer />
                <hr />
                <Box display={"flex"} alignItems={"center"} gap={3} mt={"15px"}>
                  {data?.user?.avatar ? (
                    <Image
                      src={`http://localhost:8080/uploads/avatar/${data.user?.avatar}`}
                      w={"40px"}
                      h={"40px"}
                      borderRadius={"50%"}
                    />
                  ) : (
                    <Avatar src="https://bit.ly/broken-link" size={"sm"} />
                  )}
                  {/* <Box>{data.user.username}</Box> */}

                </Box>
              </Flex>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </Grid>
  );
};
