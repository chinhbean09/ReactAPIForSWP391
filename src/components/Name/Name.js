import { Avatar } from "@chakra-ui/react";
import React from "react";
import "./Name.css";
import { BsStarFill , BsBellFill } from "react-icons/bs";
import { Icon, Box} from "@chakra-ui/react";
import { FaHeart, FaMapMarkerAlt  } from 'react-icons/fa';


const header = () => {

    const hinh = "echbuon.png";
    
    return (
<section
        class="p-5 w-100"
        style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
      >
<div className="header flex light-bg">
                <div>
                    <button>Front-End Developer</button>
                    <h1 className="white">Talk is cheap.</h1>
                    <h1 className="white">Show me the code!</h1>
                    <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                    <a className="green" href="mailto:contact@blaiti.com">Let&#39;s chat!</a>
            <Box mt="1rem" display={"flex"} gap="1rem" justifyContent={"center"} color="black">
            <a
              href="https://www.linkedin.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon  w={30} h={30} my="1rem" color="yellow" as={BsStarFill } />
            </a>
            <a
              href="https://github.com/lamquocvinh"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon  w={30} h={30} my="1rem" color="black" as={BsBellFill} />
            </a>
            
            <a
              href="https://facebook.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={30} h={30} my="1rem" color="black" as={FaMapMarkerAlt} />
            </a>
            <a
              href="https://twitter.com/?tw_p=twt"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={30} h={30} my="1rem" color="red" as={FaHeart} />
            </a>
            
          </Box>
                </div>
                <Avatar src={hinh} width={463} height={500}  padding={40}/> 
            </div>
            </section>
    )
}
export default header;