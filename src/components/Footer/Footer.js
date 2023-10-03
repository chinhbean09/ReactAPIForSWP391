import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
const Footer = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");
  const logo = "echbuon.png";
  
  return (
    <div className="Footer">
      <Box bg="#eee">
      <Box
        bg="#dceefe"
        color="black"
        height={isSmallerThan ? "50vh" : "50vh"}
        pt="3rem"
        lineHeight="2rem"
 
      >
        <Flex
          justify={"space-evenly"}
          width={["100%", "100%", "100%", "100%"]}
          textAlign={isSmallerThan ? "left" : "center"}
          fontSize={["sm", "md", "md", "md"]}
          flexDirection={isSmallerThan ? "row" : "column"}
        >
          <Box as={Flex} flexDirection="column" lineHeight="25px">
            <Heading>Product</Heading>
            <Text >Experience the wonders of </Text>
            <Text >our enchanting online world,</Text>
            <Text >where each visit is an</Text>
            <Text >opportunity to immerse yourself</Text>
            <Text >in the captivating magic of</Text>
            <Text >our offerings. Join us and</Text>
            <Text >discover the extraordinary</Text>
            <Text >possibilities that await you.</Text>    
          </Box>

          {isSmallerThan ? (
            <Box>
              <Heading>Support</Heading>
              <Text>Help</Text>
              <Text>Customer Service</Text>
              <Text>Shipping</Text>
              <Text>Order Tracker</Text>
              <Text>Returns & Exchanges</Text>
            </Box>
          ) : null}

          {isLargerThan ? (
            <Box>
              <Heading>Company Info</Heading>
              <Text>About Us</Text>
              <Text>Entity Details</Text>
              <Text>Careers</Text>
              <Text>Company Apps</Text>
            </Box>
          ) : null}
          
          <Box mt="1rem" display={"flex"} gap="1rem" justifyContent={"center"} color="black">
            <a
              href="https://www.linkedin.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon  w={30} h={30} my="1rem" color="black" as={BsLinkedin} />
            </a>
            <a
              href="https://github.com/lamquocvinh"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon  w={30} h={30} my="1rem" color="black" as={BsGithub} />
            </a>
            
            <a
              href="https://facebook.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={30} h={30} my="1rem" color="black" as={BsFacebook} />
            </a>
            <a
              href="https://twitter.com/?tw_p=twt"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={30} h={30} my="1rem" color="black" as={BsTwitter} />
            </a>
            <a
              href="https://nmewada01.github.io/logo/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Avatar w={30} h={30} my="1rem" bg="white" src={logo} />
            </a>
          </Box>
        </Flex>
      </Box>
      </Box>
    </div>
  );
};

export default Footer;