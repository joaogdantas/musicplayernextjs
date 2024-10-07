'use client';

import { useContext, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeOff, FaVolumeUp } from 'react-icons/fa';
import { HomeContext } from './context/HomeContext';
import { musics } from './dados/music';

export default function Home() {
  const {
    playing,
    volume,
    muted,
    currentTime,
    totalTime,
    panner,
    audioIndex,
    configPlayPause,
    configAudio,
    configAudioIndex,
    configVolume,
    configPanner,
    configCurrentTime,
    configMuted,
  } = useContext(HomeContext);

  useEffect(() => {
    configAudio();
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-16"
      style={{
        backgroundImage: `url('/images/fundo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="frosted-glass max-w-md w-full p-8 rounded-lg">
        <div className="flex flex-col items-center mb-4">
          <img
            src={musics[audioIndex].image}
            alt={musics[audioIndex].name}
            className="w-32 h-32 object-cover mb-2 rounded-md"
          />
          <h1 className="text-xl font-bold text-white">{musics[audioIndex].description}</h1>
        </div>

        <div className="flex flex-row justify-center items-center mb-4">
          <button
            onClick={() => configMuted()}
            className="text-[50px] hover:scale-105 transition-transform duration-300"
          >
            {muted ? (
              <FaVolumeOff className="text-[50px] text-[tomato]" />
            ) : (
              <FaVolumeUp className="text-white" />
            )}
          </button>

          <button
            onClick={() => configPlayPause()}
            className="ml-4 text-[50px] hover:scale-105 transition-transform duration-300"
          >
            {playing ? (
              <FaPause className="text-[50px] text-[tomato]" />
            ) : (
              <FaPlay className="text-white" />
            )}
          </button>
        </div>

        <div className="mt-[50px] flex flex-col space-y-4 w-full">
          <div className="flex flex-col items-center w-full">
            <label className="text-white">Progresso</label>
            <input
              type="range"
              min="0"
              max={totalTime}
              value={currentTime}
              onChange={(e) => configCurrentTime(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>

          <div className="flex flex-row justify-between w-full mt-4">
            <div className="flex flex-col items-center w-[30%]">
              <label className="text-white">Volume</label>
              <input
                type="range"
                min={0}
                max={1}
                step="0.01"
                value={volume}
                onChange={(e) => configVolume(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            <div className="flex flex-col items-center w-[30%]">
              <label className="text-white">Estéreo (E/D)</label>
              <input
                type="range"
                min="-1"
                max="1"
                value={panner}
                onChange={(e) => configPanner(Number(e.target.value))}
                step="0.01"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center mt-4">
          {musics.map((music, index) => (
            <div
              key={index}
              onClick={() => configAudioIndex(index)}
              className="music-item flex flex-col items-center mb-2 mx-2 cursor-pointer"
            >
              <img
                src={music.image}
                alt={music.name}
                className="w-24 h-24 object-cover mb-1 rounded-md hover:scale-105 transition-transform duration-300"
              />
              <h1 className="text-lg text-white">{music.author}</h1>
              <div className="popup bg-white p-2 rounded-md shadow-lg absolute text-sm text-black">
                <p><strong>Nome:</strong> {music.name}</p>
                <p><strong>Autor:</strong> {music.author}</p>
                <p><strong>Duração:</strong> {music.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
