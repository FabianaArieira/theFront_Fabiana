import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { Title, Subtitle, Body } from "../components/Text";

import { Box, colors } from '@material-ui/core';
import { IconText } from 'components/atoms';

const Home = () => {
    return ( < div >
        <
        ButtonPrimary title = "Get Started" / >
        <
        ButtonSecondary title = "Documentation" / >
        <
        Title text = "Fabiana " / >
        <
        Subtitle text = "React JS" / >
        <
        Body text = "theFront is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications." / >
        <
        /div> 			   
    );
};

export default function IconExample() {
    return ( <
        Box padding = { 2 }
        border = "1px solid #ccc"
        borderRadius = "4px"
        overflow = "auto" >
        <
        Box display = "flex"
        justifyContent = "space-between"
        alignItems = "center"
        minWidth = "650px" >
        <
        IconText fontIconClass = "fas fa-users"
        color = { colors.pink[50] }
        title = "Users Icon Text" / >
        <
        IconText fontIconClass = "far fa-address-book"
        color = { colors.purple[500] }
        title = "Book Icon Text" / >
        <
        IconText fontIconClass = "fab fa-angellist"
        color = { colors.blue[500] }
        title = "Cool Icon Text" / >
        <
        IconText fontIconClass = "fas fa-phone-alt"
        color = { colors.green[500] }
        title = "Phone Icon Text" / >
        <
        /Box> <
        /Box>
    );
}

export default Home;