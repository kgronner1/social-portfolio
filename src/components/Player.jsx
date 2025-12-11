import React, { useState, useCallback, useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";

function VideoComponent({ id, vidSrc, imgSrc }) {
  const hoverVideoRef = useRef();

  const containerStyle = {
    aspectRatio: "16 / 9",
  };

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
    <div
      className="relative w-full overflow-hidden rounded-md shadow-md"
      style={containerStyle}
    >
      <HoverVideoPlayer
        className="hover:cursor-pointer h-full w-full"
        onClick={goFull}
        videoSrc={vidSrc}
        videoRef={hoverVideoRef}
        muted={true}
        videoStyle={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        pausedOverlay={
          <img
            src={imgSrc}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        }
        loadingOverlay={
          <div className="loading-overlay absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="loading-spinner" />
          </div>
        }
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

function ImgComponent({ id, vidSrc, imgSrc }) {
  const hoverImgRef = useRef();
  const containerStyle = {
    aspectRatio: "16 / 9",
  };
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
    <div
      className="relative w-full overflow-hidden rounded-md shadow-md"
      style={containerStyle}
    >
      <img
        src={imgSrc}
        alt=""
        onClick={goFull}
        ref={hoverImgRef}
        className="h-full w-full object-cover"
        loading="lazy"
        style={{
          // Make the image expand to cover the video's dimensions
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
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
