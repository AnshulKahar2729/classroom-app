import React, { useEffect, useRef } from "react";
import "../App.css";

const Canvas = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext("2d");

    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    ctxRef.current = ctx;
  }, []);

  const startDrawing = (event) => {
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;
    isDrawing.current = true;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
  };

  const draw = (event) => {
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;
    if (!isDrawing.current) return;
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    ctxRef.current.closePath();
  };

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        width={"1000"}
        height={"600"}
      />
    </div>
  );
};

export default Canvas;
