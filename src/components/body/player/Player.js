import React from "react";
import {
  FaPlayCircle,
  FaHeart,
  FaRandom,
  FaRetweet,
  FaVolumeDown,
  FaVolumeUp,
  FaVolumeMute,
  FaVolumeOff,
  FaStepBackward,
  FaStepForward,
  FaFastBackward,
  FaFastForward,
  FaPause,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { styled, Typography, Slider } from "@mui/material";

// #region ------- Tracts -------------------------------------------------------
import fade from "./music/As You Fade Away - NEFFEX.mp3";
import enough from "./music/Enough - NEFFEX.mp3";
import immortal from "./music/Immortal - NEFFEX.mp3";
import playDead from "./music/Play Dead - NEFFEX.mp3";
import winning from "./music/Winning - NEFFEX.mp3";
// #endregion ---------------------------------------------------------------

// #region -------- Styled Components -----------------------------------------
const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: "#CECEDC",
  height: 3,
  width: props.width,
  "&:hover": {
    cursor: "auto",
  },
  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
  },
}));
// #endregion ---------------------------------------------------------------

const playlist = [fade, enough, immortal, playDead, winning];

export default function Player() {
  const audioPlayer = useRef();

  const [index, setIndex] = useState(0);

  const [currentSong] = useState(playlist[index]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  };

  const toggleSkipForward = () => {
    if (index >= playlist.length - 1) {
      setIndex(0);
      audioPlayer.current.src = playlist[0];
      audioPlayer.current.play();
    } else {
      setIndex((prev) => prev + 1);
      audioPlayer.current.src = playlist[index + 1];
      audioPlayer.current.play();
    }
  };

  const toggleSkipBackward = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      audioPlayer.current.src = playlist[index - 1];
      audioPlayer.current.play();
    }
  };

  function VolumeBtns() {
    return mute ? (
      <FaVolumeMute
        sx={{ color: "#CECEDC", "&:hover": { color: "#564fd8" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <FaVolumeOff
        sx={{ color: "#CECEDC", "&:hover": { color: "#564fd8" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <FaVolumeDown
        sx={{ color: "#CECEDC", "&:hover": { color: "#564fd8" } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <FaVolumeUp
        sx={{ color: "#CECEDC", "&:hover": { color: "#564fd8" } }}
        onClick={() => setMute(!mute)}
      />
    );
  }
  return (
    <div>
      <audio src={currentSong} ref={audioPlayer} muted={mute} />

      <div className="absolute h-16 w-[calc(100%-276px)] bottom-2 rounded-br-xl right-3 bg-white shadow-custom flex items-center">
        <div className="flex items-center px-10 gap-3">
          <span className="bg-gray-300 w-12 h-12 rounded-md"></span>
          <h1 className="font-bold text-[#39383D]">Nothings playing</h1>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <button className="cursor-pointer" onClick={toggleSkipBackward}>
            <FaStepBackward />
          </button>
          <button className="cursor-pointer" onClick={toggleBackward}>
            <FaFastBackward />
          </button>
          <button onClick={togglePlay} className="text-3xl text-[#564fd8] cursor-pointer">
            {!isPlaying ? (
              <FaPlayCircle />
            ) : (
              <FaPause />
            )}
          </button>
          <button className="cursor-pointer" onClick={toggleForward}>
            <FaFastForward />
          </button>
          <button className="cursor-pointer" onClick={toggleSkipForward}>
            <FaStepForward />
          </button>
        </div>
        <div className="flex items-center mx-8 gap-2">
          <Typography sx={{ color: "#CECEDC" }}>
            {formatTime(elapsed)}
          </Typography>
          <PSlider
            thumbless={"true"}
            value={elapsed}
            max={duration}
            width={350}
          />
          <Typography sx={{ color: "#CECEDC" }}>
            {formatTime(duration - elapsed)}
          </Typography>
        </div>
        <div className="flex text-gray-300 items-center gap-8">
          <FaHeart />
          <FaRandom />
          <FaRetweet />
          <span className="flex gap-3 items-center">
            <VolumeBtns />
            <PSlider
              min={0}
              max={100}
              value={volume}
              onChange={(e, v) => setVolume(v)}
              width={100}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
