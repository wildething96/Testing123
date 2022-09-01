import styled from "styled-components"
import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAll } from "../utils/fetchRequest";
import { Pick } from "../components/pick"
import { Companies } from "../utils/companyData"

export const CompanySelection = () => {
    const [allComps, setAllComps] = useState([])


    const getTable = async() => {
        const table = await getAll();
        table == null ? setAllComps(Companies) : setAllComps(table)
    } 

    useEffect(() => {
        getTable();
    }, [])

    

    console.log(allComps);
    return(
        <Outer>
            <h2>Company Selection</h2>
            <TableHeaders>
                <div>Id</div>
                <div>Company Code</div>
                <div>Company Name</div>
            </TableHeaders>
            <Line />
            <CompanyTable>
                {allComps.map((company, index) => (
                    <Links to="/main-menu" style={{ textDecoration: 'none' }}>
                        <Pick key={index} index={index} name={company.compName} uniqueRef={company.compId} code={company.compCode} />
                    </Links>
                ))}
            </CompanyTable>
            <Line />

            <Link to="/company-maintenance"><button>Go To Company maintenance</button></Link>

        </Outer>
    )
}

const Outer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    > div:nth-child(3){
        box-shadow: 0px -3px 15px 2px grey;
    }
    > div:last-child{
        box-shadow: 0px 3px 15px 2px grey;
    }

    h2 {
        margin: 5rem 0 3rem 0 ;
    }

    button {
        padding: 1rem;
        margin 3rem;
        cursor: pointer;
        width: 250px;
    } 
`
const TableHeaders = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    max-width: 1200px;
    margin: 0 2rem;
    > div {
        font-weight: 600;
        width: 25%;
        max-width: 200px;
        justify-content: center;
    }
    div:nth-child(3) {
        width: 50%;
        max-width: 700px;
        
    }
`

const CompanyTable = styled.div`
    height: 416px;
    width: 60%;
    padding: 0 2rem;
    max-width: 1100px;
    overflow-Y: auto;
    overflow-X: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;
    
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #333; 
        border-radius: 15px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #666; 
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: lightgrey;
        border-radius: 15px;
    }
    /* The track NOT covered by the handle.
    ::-webkit-scrollbar-track-piece {
        background: #000; 
    }
    /* Corner */
    ::-webkit-scrollbar-corner {
        background: #999; 
    }
    /* Resizer */
    ::-webkit-resizer {
        background: #111; 
    }
` 
const Line = styled.div`
    border-bottom: 5px solid grey;
    border-radius: 15px;
    width: 60%;
    max-width: 1050px;
    margin-right: 0.5rem;
    `

const Links = styled(Link)`
    width: 100%;
    display: flex;
`