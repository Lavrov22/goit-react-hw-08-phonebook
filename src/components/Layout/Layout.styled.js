import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    margin-right: 10px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    :hover, :focus{
        color: white;
    }
     &.active {
    color: white;
    
  } 
`

