import { Button } from "@mui/material";
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
            <Stack direction="column" sx={{ width: "50%" }}>
                <Box sx={{height: "70vh" }}>
                    <Canvas color={colorIndex}/>
                </Box>

                <Box sx={{height: "30vh" }}>
                    <Button onClick={() => { }} variant="outlined">全部消す</Button>
                    <Stack direction="row" spacing={1}>
                        <Button onClick={() => { }} variant="outlined">跡形もなく消す</Button>
                    </Stack>
                    <Button onClick={() => { }} variant="outlined">保存</Button>
                </Box>
            </Stack>
            <Stack direction="column" sx={{ width: "50%" }}>
                <Box sx={{height: "33vh"}}>
                {
                    colorPallette.map((color, index) => {
                    return (
                        <button
                        key={index}
                        onClick={() => { setSearchParams({"color":color});
                        }}
                        // onClick={() => { setColorIndex(color);console.log(colorIndex)
                        // }}
                        style={{ width: "50px", height: "50px",backgroundColor: color }}
                        />
                    )
                    })

                }
                </Box>
                <Box sx={{height: "33vh" }}>
                    <img src={`${process.env.PUBLIC_URL}/assets/mental.png`} alt="mental" style={{width:"400px"}}/>
                </Box>
                <Box sx={{height: "34vh" }}>
                    <img src={`${process.env.PUBLIC_URL}/assets/hart.png`} alt="hart" style={{width: "500px"}}/>
                </Box>
            </Stack>
            </Stack>


    )
}

export default Home;