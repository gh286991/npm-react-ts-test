import React from 'react';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import moment from 'moment';
import * as R from 'ramda';

export const AudioDefault = () => {
  const [duringTime, setDuringTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPause, setIsPause] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    audioProcess();
  }, []);

  const audio: HTMLAudioElement | null =
    typeof window === 'undefined' ? null : document.querySelector('audio');
  const allTime = R.pathOr(0, ['duration'], audio);

  if (typeof window !== 'undefined' && isPlaying) {
    audio?.addEventListener('timeupdate', () => {
      setDuringTime(Math.floor(audio.currentTime));
    });

    audio?.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  }

  const handelVolumeChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const value = Number(target.value);

    if (!audio) return;
    audio.volume = value / 100;
  };

  const handelPlay = () => {
    if (!isPause) setDuringTime(0);
    setIsPlaying(true);
    setIsPause(false);

    if (!audio) return;
    audio.play();
  };

  const handelStop = () => {
    setIsPlaying(false);
    setIsPause(true);

    if (!audio) return;
    audio.pause();
  };

  const audioProcess = () => {
    const progress: HTMLElement | null = document.getElementById('progressBar');

    if (!audio || !progress) return;
    const duration = Math.floor(audio.duration);
    progress.setAttribute('max', String(duration));
  };

  const handelProcessChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const value = Number(target.value);
    setDuringTime(value);
    if (!audio) return;
    audio.currentTime = value;
  };

  const onClickVolume = () => {
    if (!audio) return;
    audio.muted = isMuted;
    setIsMuted(!isMuted);
  };

  const timeFormat = (inputTime: number) => moment.utc(inputTime * 1000).format('mm:ss');
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <audio src="http://www.sousound.com/music/healing/healing_01.mp3"></audio>
        {isPlaying ? (
          <button
            onClick={() => {
              handelStop();
            }}
          >
            <span>Stop</span>
          </button>
        ) : (
          <button
            style={{ border: '2px red solid' }}
            onClick={() => {
              handelPlay();
            }}
          >
            <span>Play</span>
          </button>
        )}

        <div className="player-bar">
          <input
            id="progressBar"
            value={duringTime}
            type="range"
            onChange={(event) => {
              handelProcessChange(event);
            }}
          ></input>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          onChange={(event) => {
            handelVolumeChange(event);
          }}
        ></input>

        <button
          onClick={() => {
            onClickVolume();
          }}
        >
          volume
        </button>
        <div>{`${timeFormat(duringTime)}/${timeFormat(allTime)}`}</div>
        <br />
        <audio src="http://www.sousound.com/music/healing/healing_01.mp3" controls></audio>
      </div>
    </div>
  );
};

// export default AudioDefault;

export const Hello: React.FC = () => {
  return (
    <div className={styles.hiContainer}>
      <div className={styles.hiWord}>HI here</div>
    </div>
  );
};
