import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';

const Dot = () => {
  const x = 20;//横20マス
  const y = 20;//縦20マス

  const [colorIndex, setColorIndex] = useState("#ffffff");
  const colorPallette = ['red', 'yellow', 'blue', 'gray', 'black']
  const [canvas, setCanvas] = useState(new Array(x * y).fill("white"));

  useEffect(() => {
    if(window.localStorage){
      const json = localStorage.getItem("canvas");
      setCanvas(JSON.parse(json));

    }
  }, []);

  return (
    <div>
      <div style={{ width: "450px", height: "450px", marginTop: "40px", marginLeft: "100px", marginBottom: "40px" }}>
        <Grid container spacing={0} columns={x}>
          {
            canvas.map((item, index) => {
              return (
                <Grid xs={1} key={index}>
                  <div onClick={() => {
                    setCanvas((prevcanvas) =>
                      prevcanvas.map((previtem, previndex) => (index === previndex ? colorIndex : previtem))
                    );
                    // console.log(canvas);
                    // console.log("test")
                  }}>
                    <Box sx={{ margin: "2%", paddingTop: "100%", backgroundColor: item }}></Box>
                  </div>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
      {

        colorPallette.map((color, index) => {
          return (
            <button
              onClick={() => { setColorIndex(color) }}
              style={{ width: "50px", height: "50px",backgroundColor: color }}
            />
          )
        })

      }

        <Button onClick={() => {
          setCanvas((prevcanvas) =>
            prevcanvas.map((previtem) => (previtem === "black" ? previtem : "white")))
        }} variant="outlined">全部消す</Button>

      <Stack direction="row" spacing={1}>
        <Button onClick={() => {
          setCanvas((new Array(x * y).fill("white")))
        }} variant="outlined">跡形もなく消す</Button>
      </Stack>
      <Button onClick={() => {
        const json = JSON.stringify(canvas);
        localStorage.setItem("canvas", json);
      }} variant="outlined">保存</Button>

      <div  style={{width:"400px",marginLeft: "900px",marginTop: "-100px"}}>
        <img src={`${process.env.PUBLIC_URL}/assets/hart.png`} alt="hart"/>
      </div>
      <Box sx={{position:"absolute"}}>

      <img src={`${process.env.PUBLIC_URL}/assets/mental.png`} alt="mental" style={{width:"400px"}}/>
      </Box>
    </div>
  )
}


export default Dot