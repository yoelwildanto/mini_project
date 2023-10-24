import React from "react";
import { HiMiniCalendarDays } from "react-icons/hi2";
import { IoMdCompass } from "react-icons/io";
import { Box, Button, Input } from "@chakra-ui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">TicketZone</div>
        <Box w={"100%"} m={"0px 50px"} display={"flex"} className="search">
          <Input
            width={"100%"}
            ml={"auto"}
            borderRadius={"0px"}
            borderTopLeftRadius={"10px"}
            borderBottomLeftRadius={"10px"}
            border={"2px solid white"}
            _placeholder={{ fontsize: "10px",fontWeight: 300, color: "white" }}
            placeholder={"Cari event seru di sini"}
            borderRight={"transparent"}
          ></Input>
          <Button
            color={"white"}
            bg={"red"}
            borderTopLeftRadius={"0px"}
            borderBottomLeftRadius={"0px"}
          >
            <FaMagnifyingGlass />
          </Button>
        </Box>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <Button
            color={"white"}
            fontWeight={900}
            _hover={"transparent"}
            bg={"transparent"}
            border={"transparent"}
            leftIcon={<HiMiniCalendarDays size={"25px"} color="white" />}
          >
            Buat Event
          </Button>
          <Button
            color={"white"}
            fontWeight={900}
            _hover={"transparent"}
            bg={"none"}
            leftIcon={<IoMdCompass size={"25px"} color={"white"} 
            onClick={""}/>}
          >
            Discovery
          </Button>
          <li className="auth-navbar-button-container">
            <div className="nav-auth-button">
              <Button
                color={"white"}
                border={"2px solid white"}
                variant={"outline"}
                mr={"10px"}
                _hover={{ color: "black", bg: "white" }}
              >
                Daftar
              </Button>
              <Button
                color={"white"}
                bg={"red"}
                _hover={{ color: "black", bg: "white" }}
              >
                Masuk
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
