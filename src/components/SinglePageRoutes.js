import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import JsLogoMarquee from "./js/jsEcosystem";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>a
        <Portfolio innerRef={refs.refPortfolio}/>
        {/* <JsLogoMarquee innerRef={refs.refJsLogoMarquee}/> */}
    </Box>)
}