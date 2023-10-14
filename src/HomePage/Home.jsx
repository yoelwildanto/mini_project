import React from "react";
import { Box, Text } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box>
      {/* Slider Banner */}
      <SliderBanner />

      {/* Upcoming Event Slider Cards */}
      <UpcomingEventSlider />

      {/* List of Top 3 Bestsellers */}
      <TopBestsellers />

      {/* Discover Button */}
      <DiscoverButton />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LandingPage;
