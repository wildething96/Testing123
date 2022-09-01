import styled, { withTheme } from "styled-components"
import React from 'react';
import { motion } from "framer-motion";

// import { ThemeProvider } from "styled-components"

const theme = {
    colour: {
        cell_1: "#48adc2",
        cell_2: "#f2f5f5",
        cellText : "#24272b"
    }
}

export const Pick = (props) => {

    return (

            <CompLine index={props.index} theme={theme} whileHover={{ opacity: 1.0, scale: 1.05, textShadow: "2px 2px 3px grey"}}>
                <div>
                    <Cell>{props.uniqueRef}</Cell>
                    <Cell>{props.code}</Cell>
                    <Cell>{props.name}</Cell>
                </div>
            </CompLine>
    )
}



const CompLine = styled(motion.div)`
    width: 100%;
    max-width: 1000px;
    padding: 0 2rem;
    opacity: 0.55;

    > div {
        display: flex;
        align-items: center;
        border: 1px solid white;
        cursor: pointer;
        border-radius: 15px;
        overflow: hidden;
        justify-content: space-around;
        
    }
    div > div {
        flex-grow: 1;
        justify-content: center;
        width: 25%;
        max-width: 200px;
        }

    div:nth-child(2) {
        border-left: 1px solid white;
        width: 25%;
        max-width: 200px;
    }

    div:nth-child(3) {
        border-left: 1px solid white;
        margin-right: 2rem;
        width: 50%;
        max-width: 700px;
    }

    div {
        color: ${({theme}) => theme.colour.cellText};
        background: ${({index}) => index % 2 === 0 ? ({theme}) => theme.colour.cell_1 : ({theme}) => theme.colour.cell_2};
        height: 30px;
        display: flex;
        align-items: center;
        text-align: center;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
`

const Cell = styled(motion.div)`
`