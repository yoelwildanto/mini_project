import {
  Button,
  Flex,
  Stack,
  FormControl,
  InputGroup,
  Input,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const EventSchema = Yup.object().shape({
  eventName: Yup.string().required("Event name is required"),
  categoryId: Yup.string().required("Category event is required"),
  locationId: Yup.string().required("Location is required"),
  time: Yup.string().required("time is required"),
  startDate: Yup.string().required("Start date is required"),
  endDate: Yup.string().required("End date required"),
  description: Yup.string().required("Description is required"),
  address: Yup.string().required("Address is required"),
  hargatiket: Yup.number().required("Price is required"),
  totaltiket: Yup.number().required("Ticket Quantity is required"),
  //   eventHighlight: Yup.string().required("Highlight is required"),
  //   eventInclude: Yup.string().required("Included is required"),
  // eventImage: Yup.string(),
});

const CreateEvent2 = () => {
  const [fieldImage, setFieldImage] = useState(null);
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/event/category-list"
      );
      setCategory(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLocation = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/event/location-list"
      );
      setLocation(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchLocation();
  }, []);

  const formEvent = async (
    eventName,
    categoryId,
    locationId,
    time,
    startDate,
    endDate,
    description,
    address,
    hargatiket,
    totaltiket
  ) => {
    try {
      let formData = new FormData();
      formData.append("eventName", eventName);
      formData.append("categoryId", categoryId);
      formData.append("locationId", locationId);
      formData.append("time", time);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("description", description);
      formData.append("image", fieldImage);
      formData.append("address", address);
      formData.append("hargatiket", hargatiket);
      formData.append("totaltiket", totaltiket);
      console.log(formData);
      await axios.post("http://localhost:8080/event/add-event", formData);
      alert("Create Event Success");
    } catch (err) {
      alert("Error");
    }
  };

  const formik = useFormik({
    initialValues: {
      eventName: "",
      categoryId: "",
      locationId: "",
      time: "",
      startDate: "",
      endDate: "",
      description: "",
      address: "",
      hargatiket: "",
      totaltiket: "",
      eventImage: null,
    },

    validationSchema: EventSchema,
    onSubmit: (values) => {
      formEvent(
        values.eventName,
        values.categoryId,
        values.locationId,
        values.time,
        values.startDate,
        values.endDate,
        values.description,
        values.address,
        values.hargatiket,
        values.totaltiket,
      );
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex
          w="full"
          background="white"
          p="1em"
          //   rounded=".5em"
          gap={{ base: "1.2em", lg: "5em" }}
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="space-between"
        >
          <Stack spacing={5} w={{ base: "full", lg: "50%" }} h="full">
            <FormControl
              isInvalid={formik.touched.eventImage && formik.errors.eventImage}
            >
              <FormLabel>Upload Poster</FormLabel>
              <InputGroup bg={"#032466"} h={"20.5em"} rounded={10}>
                <Input
                  h={"100%"}
                  //   background="#585454"

                  color="white"
                  border="4px solid red"
                  placeholder="Upload Image"
                  type="file"
                  name="image"
                  value={formik.values.eventImage}
                  onChange={(event) => {
                    setFieldImage(event.currentTarget.files[0]);
                  }}
                  // onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.eventImage && formik.errors.eventImage && (
                <FormErrorMessage>{formik.errors.eventImage}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.eventName && formik.errors.eventName}
            >
              <FormLabel>Event Name</FormLabel>
              <InputGroup>
                <Input
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  _placeholder={{ color: "white" }}
                  placeholder="Type event name here"
                  type="text"
                  name="eventName"
                  value={formik.values.eventName}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.eventName && formik.errors.eventName && (
                <FormErrorMessage>{formik.errors.eventName}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
            // isInvalid={
            //   formik.touched.eventCategory && formik.errors.eventCategory
            // }
            >
              <FormLabel>Category Event</FormLabel>
              <InputGroup>
                <Select
                  name="categoryId"
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  placeholder="Select category event"
                  value={formik.values.categoryId}
                  onChange={formik.handleChange}
                >
                  {category.map((item, index) => (
                    <option
                      key={index}
                      value={item.id}
                      style={{ color: "black" }}
                    >
                      {item.categoryName}
                    </option>
                  ))}
                </Select>
              </InputGroup>
              {/* {formik.touched.eventCategory &&
                  formik.errors.eventCategory && (
                    <FormErrorMessage>
                      {formik.errors.eventCategory}
                    </FormErrorMessage>
                  )} */}
            </FormControl>

            <FormControl
              isInvalid={formik.touched.locationId && formik.errors.locationId}
            >
              <FormLabel>City</FormLabel>
              <InputGroup>
                <Select
                  name="locationId"
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  placeholder="Select City"
                  value={formik.values.locationId}
                  onChange={formik.handleChange}
                >
                  {location.map((item, index) => (
                    <option
                      key={index}
                      value={item.id}
                      style={{ color: "black" }}
                    >
                      {item.locationName}
                    </option>
                  ))}
                </Select>
              </InputGroup>
              {formik.touched.locationId && formik.errors.locationId && (
                <FormErrorMessage>{formik.errors.locationId}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
              <FormLabel>Time</FormLabel>
              <InputGroup>
                <Input
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  placeholder="Type time of event"
                  type="time"
                  step={1}
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.time && formik.errors.time && (
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              )}
            </FormControl>
            <Flex gap="1em">
              <FormControl
                isInvalid={formik.touched.startDate && formik.errors.startDate}
              >
                <FormLabel>Start Date</FormLabel>
                <InputGroup>
                  <Input
                    background="#032466"
                    color="white"
                    border="4px solid red"
                    placeholder="Select the last date"
                    type="date"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.startDate && formik.errors.startDate && (
                  <FormErrorMessage>{formik.errors.startDate}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.endDate && formik.errors.endDate}
              >
                <FormLabel>End Date</FormLabel>
                <InputGroup>
                  <Input
                    background="#032466"
                    color="white"
                    border="4px solid red"
                    placeholder="Select the last date"
                    type="date"
                    name="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.endDate && formik.errors.endDate && (
                  <FormErrorMessage>{formik.errors.endDate}</FormErrorMessage>
                )}
              </FormControl>
            </Flex>
          </Stack>
          <Stack w={{ base: "full", lg: "50%" }} justifyContent="space-between">
            <FormControl
              isInvalid={
                formik.touched.description && formik.errors.description
              }
            >
              <FormLabel>Description</FormLabel>
              <InputGroup>
                <Textarea
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  h="20.5em"
                  _placeholder={{ color: "white" }}
                  placeholder="Type description here"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.description && formik.errors.description && (
                <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
              )}
            
            </FormControl>
            <FormControl
              isInvalid={formik.touched.address && formik.errors.address}
            >
              <FormLabel>Address</FormLabel>
              <InputGroup>
                <Input
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  _placeholder={{ color: "white" }}
                  placeholder="Type event name here"
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.address && formik.errors.address && (
                <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.hargatiket && formik.errors.hargatiket}
            >
              <FormLabel>Ticket Price</FormLabel>
              <InputGroup>
                <Input
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  _placeholder={{ color: "white" }}
                  placeholder="Rp"
                  type="number"
                  name="hargatiket"
                  value={formik.values.hargatiket}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.hargatiket && formik.errors.hargatiket && (
                <FormErrorMessage>{formik.errors.hargatiket}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.totaltiket && formik.errors.totaltiket}
            >
              <FormLabel>Total Ticket</FormLabel>
              <InputGroup>
                <Input
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  _placeholder={{ color: "white" }}
                  placeholder="Total Ticket"
                  type="number"
                  name="totaltiket"
                  value={formik.values.totaltiket}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.totaltiket && formik.errors.totaltiket && (
                <FormErrorMessage>{formik.errors.totaltiket}</FormErrorMessage>
              )}
            </FormControl>
            <Button marginTop={"3em"} alignItems={"center"} type="submit">
                Create Event
              </Button>
          </Stack>
        </Flex>
      </form>
    </>
  );
};

export default CreateEvent2;
