import { height } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
      <div style={{ width: "450px", height: "450px", marginTop: "50px", marginLeft: "100px", marginBottom: "40px" }}>
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
              style={{ width: "40px", height: "40px", backgroundColor: color }}
            />
          )
        })

      }
      <p>{colorIndex}</p>
      <button onClick={() => {
        setCanvas((prevcanvas) =>
          prevcanvas.map((previtem) => (previtem === "black" ? previtem : "white")))
      }}>全部消す</button>

      <button onClick={() => {
        setCanvas((new Array(x * y).fill("white")))
      }}>跡形もなく消す</button>

      <button onClick={() => {
        const json = JSON.stringify(canvas);
        localStorage.setItem("canvas", json);      
      }}>保存</button>
    </div>
  )
}


export default Dot