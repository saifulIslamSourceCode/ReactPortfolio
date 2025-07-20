import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                    </Grid>
                ))}
            </Grid>

            <Box
                style={{
                    backgroundColor: "#f8fafc",
                    padding: "2rem",
                    margin: "2rem auto",
                    borderRadius: "1rem",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                    maxWidth: "700px",
                    fontFamily: "'Segoe UI', sans-serif",
                    fontSize: "1.1rem",
                    color: "#1e293b",
                    animation: "fadeIn 0.6s ease-in-out"
                }}
            >
                <strong style={{ fontSize: "1.3rem", color: "#0f172a" }}>
                    Oops! Not everything’s here yet.
                </strong>
                <br />
                I’ve got a bunch of cool{" "}
                <span style={{ color: "#2563eb", fontWeight: "bold" }}>fullstack projects</span>{" "}
                to showcase, and I’ll be adding them soon!
            </Box>



        </Box>
    );
};