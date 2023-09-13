import React, { useState, useCallback, useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";

function VideoComponent({ id, vidSrc, imgSrc }) {
  const hoverVideoRef = useRef();

  const goFull = () => {
    console.log("goFull");
    // make video element go full screen using reference

    const el = hoverVideoRef.current;

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else {
      console.log("why not?");
    }
  };

  return (
    <div>
      <HoverVideoPlayer
        className="hover:cursor-pointer"
        onClick={goFull}
        videoSrc={vidSrc}
        videoRef={hoverVideoRef}
        muted={true}
        pausedOverlay={
          <div className="relative">
            <img
              src={imgSrc}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
    </div>
  );
}

function ImgComponent({ id, vidSrc, imgSrc }) {
  const hoverImgRef = useRef();
  const goFull = () => {
    console.log("goFull");
    // make video element go full screen using reference

    const el = hoverImgRef;

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else {
      console.log("why not?");
    }
  };

  return (
    <img
      src={imgSrc}
      alt=""
      onClick={goFull}
      ref={hoverImgRef}
      style={{
        // Make the image expand to cover the video's dimensions
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}

function Player({ id, vidSrc, imgSrc }) {
  return (
    <div>
      {vidSrc ? (
        <VideoComponent id={id} vidSrc={vidSrc} imgSrc={imgSrc} />
      ) : (
        <ImgComponent id={id} vidSrc={vidSrc} imgSrc={imgSrc} />
      )}
    </div>
  );
}

export default Player;
