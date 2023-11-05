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
  eventCategory: Yup.string().required("Category event is required"),
  eventLocation: Yup.string().required("Location is required"),
  eventTime: Yup.string().required("Duration is required"),
  eventStartDate: Yup.string().required("Start date is required"),
  eventLastDate: Yup.string().required("Last date required"),
  eventDescription: Yup.string().required("Description is required"),
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
    description
  ) => {
    try {
      let formData = new FormData();
      formData.append("eventName", eventName);
      formData.append("eventCategory", categoryId);
      formData.append("eventLocation", locationId);
      formData.append("eventTime", time);
      formData.append("eventStartDate", startDate);
      formData.append("eventLastDate", endDate);
      formData.append("eventDescription", description);
      formData.append("image", fieldImage);
      await axios.post("http://localhost:8080/event/add-event", formData);
      alert("Create Event Success");
    } catch (err) {
      alert("Error");
    }
  };

  const formik = useFormik({
    initialValues: {
      eventName: "",
      eventCategory: "",
      eventLocation: "",
      eventTime: "",
      eventStartDate: "",
      eventLastDate: "",
      eventDescription: "",
      eventImage: null,
    },

    validationSchema: EventSchema,
    onSubmit: (values) => {
      formEvent(
        values.eventName,
        values.eventCategory,
        values.eventLocation,
        values.eventTime,
        values.eventStartDate,
        values.eventLastDate,
        values.eventDescription
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
                  name="eventCategory"
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  placeholder="Select category event"
                  value={formik.values.eventCategory}
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
              isInvalid={
                formik.touched.eventLocation && formik.errors.eventLocation
              }
            >
              <FormLabel>City</FormLabel>
              <InputGroup>
                <Select
                  name="eventLocation"
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  placeholder="Select City"
                  value={formik.values.eventLocation}
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
              {formik.touched.eventLocation && formik.errors.eventLocation && (
                <FormErrorMessage>
                  {formik.errors.eventLocation}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.eventTime && formik.errors.eventTime}
            >
              <FormLabel>Time</FormLabel>
              <InputGroup>
                <Input
                  background="#032466"
                  color="white"
                  border="4px solid red"
                  placeholder="Type time of event"
                  type="time"
                  step={1}
                  name="eventTime"
                  value={formik.values.eventTime}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.eventTime && formik.errors.eventTime && (
                <FormErrorMessage>{formik.errors.eventTime}</FormErrorMessage>
              )}
            </FormControl>
            <Flex gap="1em">
              <FormControl
                isInvalid={
                  formik.touched.eventStartDate && formik.errors.eventStartDate
                }
              >
                <FormLabel>Start Date</FormLabel>
                <InputGroup>
                  <Input
                    background="#032466"
                    color="white"
                    border="4px solid red"
                    placeholder="Select the last date"
                    type="date"
                    name="eventStartDate"
                    value={formik.values.eventStartDate}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.eventStartDate &&
                  formik.errors.eventStartDate && (
                    <FormErrorMessage>
                      {formik.errors.eventStartDate}
                    </FormErrorMessage>
                  )}
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.eventLastDate && formik.errors.eventLastDate
                }
              >
                <FormLabel>End Date</FormLabel>
                <InputGroup>
                  <Input
                    background="#032466"
                    color="white"
                    border="4px solid red"
                    placeholder="Select the last date"
                    type="date"
                    name="eventLastDate"
                    value={formik.values.eventLastDate}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.eventLastDate &&
                  formik.errors.eventLastDate && (
                    <FormErrorMessage>
                      {formik.errors.eventLastDate}
                    </FormErrorMessage>
                  )}
              </FormControl>
            </Flex>
          </Stack>
          <Stack w={{ base: "full", lg: "50%" }} justifyContent="space-between">
            <FormControl
              isInvalid={
                formik.touched.eventDescription &&
                formik.errors.eventDescription
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
                  name="eventDescription"
                  value={formik.values.eventDescription}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.eventDescription &&
                formik.errors.eventDescription && (
                  <FormErrorMessage>
                    {formik.errors.eventDescription}
                  </FormErrorMessage>
                )}
            </FormControl>

            <FormControl
              isInvalid={
                formik.touched.eventHighlight && formik.errors.eventHighlight
              }
            ></FormControl>
            <FormControl
              isInvalid={
                formik.touched.eventInclude && formik.errors.eventInclude
              }
            >
              {/* <FormLabel>What's Included</FormLabel>
              <InputGroup>
                <Textarea
                  background="#585454"
                  color="white"
                  border="0"
                  h="7em"
                  placeholder="Type what's included here"
                  name="eventInclude"
                  value={formik.values.eventInclude}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.eventInclude && formik.errors.eventInclude && (
                <FormErrorMessage>
                  {formik.errors.eventInclude}
                </FormErrorMessage>
              )} */}
              <Button alignItems={"center"} type="submit">
                Create Event
              </Button>
            </FormControl>
          </Stack>
        </Flex>
      </form>
    </>
  );
};

export default CreateEvent2;
