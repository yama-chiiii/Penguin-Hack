import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Canvas from "./Canvas";

const Home = () => {

    const [colorIndex, setColorIndex] = useState("#ffffff");
    const colorPallette = ['red', 'yellow', 'blue', 'gray', 'black']
    const [searchParams, setSearchParams] = useSearchParams();
    return (

        <Stack direction="row">
            <Canvas />
            <Stack direction="column" sx={{ width: "50%" }}>
                <Box sx={{ height: "33vh" }}>
                    <img src={`${process.env.PUBLIC_URL}/assets/pallet.png`} alt="pallet" style={{ width: "200px", marginTop: "40px" }} />
                    {
                        colorPallette.map((color, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSearchParams({ "color": color });
                                    }}
                                    // onClick={() => { setColorIndex(color);console.log(colorIndex)
                                    // }}
                                    style={{ paddingLeft: "60px", marginTop: "10px", width: "80px", height: "80px", backgroundColor: color, outlineStyle: "solid", outlineColor: "#ba136f" }}
                                />
                            )
                        })

                    }
                </Box>
                <Box sx={{ height: "33vh" }}>
                    <img src={`${process.env.PUBLIC_URL}/assets/mental.png`} alt="mental" style={{ width: "500px", marginBottom: "20px", marginLeft: "40px" }} />
                </Box>
                <Box sx={{ height: "34vh" }}>
                    <img src={`${process.env.PUBLIC_URL}/assets/hart.png`} alt="hart" style={{ width: "400px", paddingTop: "100px", marginLeft: "350px" }} />
                </Box>
            </Stack>
        </Stack>


    )
}

export default Home;