import React from "react"
import styled from "styled-components"
import { useState } from "react"
import { Link } from "react-router-dom";

import { postComp } from "../utils/fetchRequest"

export const CompanyMaintenance = () => {
    const [compName, setCompName] = useState("")
    const [compCode, setCompCode] = useState("")


const handleSubmit = () => {
    postComp(compName, compCode);
    setCompCode("");
    setCompName("");
}

    return (
        <div>

            <AddCompany>
                <input onChange={(event) => setCompName(event.target.value)} type="text" placeholder="Company Name" value ={compName} />
                <input onChange={(event) => setCompCode(event.target.value)}  type="text" placeholder="Company Code (5 - Characters or less)" value ={compCode}/>
                <div>
                    <button onClick={() => handleSubmit()}>Add New Company</button>
                </div>
            </AddCompany>
            <Link to="/"><Button>Go To Company Selection</Button></Link>
        </div>
    )
}

const AddCompany = styled.div`
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    width: 500px;

    input{
        margin-bottom: 1rem;
        border-radius: 8px;
        padding: 0.5rem;
    }

    button {
        padding: 1rem;
        margin 3rem;
        cursor: pointer;
        width: 250px;
    }
`

const Button = styled.button`
    padding: 1rem;
    margin 3rem;
    cursor: pointer;
    width: 250px;
`