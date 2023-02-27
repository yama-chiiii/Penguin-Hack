import React from 'react';
//import { useEffect } from 'react';

const Dot = () => {
    const x = 20;//横20マス
    const y = 20;//縦20マス

    const [colorIndex, setColorIndex] = React.useState("#ffffff");


    //useEffect分かんないんだっピ…
    //useEffect(() => {
    // const json = JSON.stringify(dotTbl)
    //localStorage.setItem("dotTbl",json)
    //},[dotTbl])

    var dotTbl = document.getElementById("dotTBL");
    var colTbl = document.getElementById("colorTBL");

    var canvas = document.getElementById("picture");
    var context = canvas.getContext("2d");

    //表の部分のコード
    function dotTable() {
        for (var i = 0; i < x; i++) {
            var row = dotTbl.insertRow(-1);
            for (var j = 0; j < y; j++) {
                var cell = row.insertCell(-1);
                cell.onclick = function () {
                    this.style.backgroundColor = Color_index;
                }
            }
        }
    }

    //色を定義
    var COL_TBL = ["black", "gray", "red", "yellow", "blue"];
    function colTable() {
        for (var j = 0; j < COL_TBL.length; j++) {
            var cell = colTbl.rows[0].insertCell(-1);
            cell.style.backgroundColor = COL_TBL[j];
            cell.onclick = function () {
                Color_index = this.style.backgroundColor;
            }
        }
    }


    function clearTable() {
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                if (dotTbl.rows[i].cells[j].style.backgroundColor !== "black") {
                    dotTbl.rows[i].cells[j].style.backgroundColor = "white";
                }
            }
        }
        context.fillStyle = "white";
        context.fillRect(0, 0, 20, 20);
    }

    function cnvCanvas() {
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                var canvas_Color = dotTbl.rows[i].cells[j].style.backgroundColor;
                context.fillStyle = canvas_Color;
                context.fillRect(j, i, 1, 1);
            }
        }
    }

    window.onload = function () {//ブラウザをローディングした時に実行
        dotTable();
        colTable();
        clearTable();
        cnvCanvas();
    }

    return (
        <div>
            <div>
                <table id="dotTBL"></table>
                <table id="colorTBL"><tr></tr></table>
            </div>
            <input type="button" class="clear" value="ぜんぶけす" onclick="clearTable()" />
            <input type="button" class="canvas" value="キャンバス" onclick="cnvCanvas()" />
            <canvas id="picture" width="20" height="20" style="border: solid 1px;"></canvas>
        </div>
    )
}


export default Dot