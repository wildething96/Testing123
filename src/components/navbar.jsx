import { useState } from "react"
// import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import React from "react"



export const Navbar = () => {

    return(
        <div>
            <Banner theme={theme}>
                <h1>DMSlite</h1>
            </Banner>
        </div>
    )
}

const theme = {
    colour: {
        background: "black",
        title: "white"
    },
    font: {

    }
} 

const Banner = styled.div`
    color: ${({theme}) => theme.colour.title};
    background: ${({theme}) => theme.colour.background};
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        
    }
`
