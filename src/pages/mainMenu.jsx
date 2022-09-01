import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { MenuData } from "../utils/menuData"

export const MainMenu = () => {

    return (

        <div>
            <Menu>
                {MenuData.map((MenuItem) => (
                    <Link to={MenuItem.url}>
                        <div>{MenuItem.optionName}</div>
                    </Link>
                ))
                }
            </Menu>
        </div>
    )
}

const Menu = styled.div`

`