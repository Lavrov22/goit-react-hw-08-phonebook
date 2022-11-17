import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    padding: 10px 32px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    :hover, :focus{
        color: white;
        background-color: rgb(24, 140, 232);
    }
     &.active {
    color: white;
    background-color: rgb(24, 140, 232);
    
  }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0 10px 10px;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
`

export const Section = styled.section`
  padding: 15px;
`