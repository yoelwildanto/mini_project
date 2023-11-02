import { Box, FormControl, FormLabel, Select, Text, Button } from "@chakra-ui/react";

export const FilterColumn = () => {
  return (
    <Box>
      <FormControl>
        <Text>Filter</Text>
        <FormLabel> Category</FormLabel>
        <Select placeholder="Select Category">
            <option value="">Music</option>
            <option value="">Hiburan</option>
            <option value="">Bisnis</option>
            <option value="">a</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel> City</FormLabel>
        <Select placeholder="Select City">
            <option value="">Bali</option>
            <option value="">Bandung</option>
            <option value="">Jakarta</option>
            <option value="">Surabaya</option>
        </Select>
      </FormControl>
      <Button colorScheme="red" color={"white"} bg={"#032466"} mt={"7em"}> Filter </Button>
    </Box>
  );
};
