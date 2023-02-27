import { Box, Button, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Canvas = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const color = searchParams.get('color');
    console.log(color)

    const canvas_width = 20;
    const canvas_height = 20;
    const canvas_magnification = 25 // 表示倍率

    useEffect(() => {
        const canvas = document.getElementById('MyCanvas');

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        canvas.width = canvas_width * canvas_magnification;
        canvas.height = canvas_height * canvas_magnification;

        canvas.addEventListener('mousedown', OnMousedown);
        canvas.addEventListener('mousemove', OnMousemove);

        drawRule();
    }, []);

    useEffect(() => {
        console.log(color);
        const canvas = document.getElementById('MyCanvas');

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;

    }, [color, searchParams])

    const initCanvas = () => {
        const canvas = document.getElementById('MyCanvas');

        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRule();
    }

    // キャンバスに罫線を描画する
    const drawRule = () => {
        const canvas = document.getElementById('MyCanvas');
        const ctx = canvas.getContext('2d');

        // 線の色
        ctx.strokeStyle = '#1e90ff';

        // 線の太さ
        ctx.lineWidth = 2;

        // 破線
        if (ctx.setLineDash) {
            ctx.setLineDash([1, 2]);
        }

        ctx.beginPath();

        // 縦線
        for (let i = 0; i < canvas_width + 1; i++) {
            ctx.moveTo(i * canvas_magnification, 0);
            ctx.lineTo(i * canvas_magnification, canvas.height);
        }

        // 横線
        for (let i = 0; i < canvas_height + 1; i++) {
            ctx.moveTo(0, i * canvas_magnification);
            ctx.lineTo(canvas.height, i * canvas_magnification);
        }

        ctx.stroke();
    };
    const OnMousedown = (e) => {
        var rect = e.target.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // 塗りつぶし
        var col = Math.floor(mouseX / canvas_magnification);
        var row = Math.floor(mouseY / canvas_magnification);

        const canvas = document.getElementById('MyCanvas');
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = color;
        ctx.fillRect(
            col * canvas_magnification,
            row * canvas_magnification,
            canvas_magnification,
            canvas_magnification
        );

        // 罫線の描画
        drawRule();
    };

    const OnMousemove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (e.buttons === 1) {
            // 塗りつぶし
            var col = Math.floor(mouseX / canvas_magnification);
            var row = Math.floor(mouseY / canvas_magnification);
            const canvas = document.getElementById('MyCanvas');
            const ctx = canvas.getContext('2d');

            ctx.fillStyle = color;
            ctx.fillRect(
                col * canvas_magnification,
                row * canvas_magnification,
                canvas_magnification,
                canvas_magnification
            );

            drawRule();
        }
    };

    return (
        <Stack direction="column" sx={{ width: "50%" }}>
            <Box sx={{ height: "70vh" }}>
                <canvas id='MyCanvas'></canvas>
            </Box>

            <Box sx={{ height: "30vh" }}>
                <Button onClick={() => { initCanvas() }} variant="outlined">全部消す</Button>
                <Button onClick={() => { initCanvas() }} variant="outlined">跡形もなく消す</Button>
                <Button onClick={() => { initCanvas() }} variant="outlined">保存</Button>
            </Box>
        </Stack>

    );
};

export default Canvas;
