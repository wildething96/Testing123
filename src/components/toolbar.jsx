import React from "react"
import { useState } from "react"
import { motion } from "framer-motion";
import styled from "styled-components";

import {IoIosArrowDropup} from 'react-icons/io';
import { MdSettingsSuggest } from 'react-icons/md'
import { toolBarData } from '../utils/toolBarData'
const variants = {
    open: {
        opacity: 1,
    //   transition: {
    //     type: "spring",
    //     stiffness: 30,
    //     restDelta: 2,
    //     delayChildren: 0.15,
    //     staggerChildren: 0.1,
    //   },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    },
    closed: {
        opacity: 0,
    //   transition: {
    //     delay: 0.8,
    //     type: "spring",
    //     stiffness: 400,
    //     damping: 40,
    //     staggerChildren: 0.11,
    //     staggerDirection: -1,
    //   },
    },
  };

  const linkVariants = {
    open: {
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
    closed: {
      opacity: 0,
    },
  };


export const Toolbar = () => {
    const [isActive, setIsActive] = useState(false)
    
    return (
        <Outer>
            <div>
            <Button 
                   onClick={()=> setIsActive(!isActive)}
                   animate={{rotate: isActive ? 90 : 0}}
            >
                <Arrow size={50}/>
            </Button>
                <MenuBar 
                variants={variants}
                animate={isActive ? "open" : "closed"}>
                    {toolBarData.map((tool) => (
                    
                    <div>
                        {tool.logo}
                    </div>
                    ))}
                    </MenuBar>
            </div>
        </Outer>
    )
}

const Outer = styled.div`
    height: 100px;
    overflow: hidden;
    > div {
        border: 2px solid black;
        border-top: none;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        width: 60px;
    }
    
`

const MenuBar = styled.div`
    position: absolute;
    top: 130px;
    left: 62px;
    display: flex;
    
    > div {
        
        height: 54px;
        border: 2px solid black;
        border-top: none;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
`

const Button = styled(motion.div)`
    
    
    
`

const Arrow = styled(IoIosArrowDropup)`
    
` 
