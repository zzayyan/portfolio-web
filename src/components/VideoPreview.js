"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./VideoPreview.module.css";

export default function VideoPreview({ src, poster, projectName }) {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const tickProgress = useCallback(() => {
    const v = videoRef.current;
    if (v && !v.paused && v.duration) {
      setProgress(v.currentTime / v.duration);
      rafRef.current = requestAnimationFrame(tickProgress);
    }
  }, []);

  const startPlayback = useCallback(() => {
    if (!videoReady || !videoRef.current) return;
    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        rafRef.current = requestAnimationFrame(tickProgress);
      })
      .catch(() => {});
  }, [videoReady, tickProgress]);

  const stopPlayback = useCallback(() => {
    setIsPlaying(false);
    setProgress(0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    setIsHovering(true);
    startPlayback();
  }, [startPlayback]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    stopPlayback();
  }, [stopPlayback]);

  const handleTap = useCallback(() => {
    if (typeof window === "undefined" || !("ontouchstart" in window)) return;
    if (isPlaying) {
      setIsHovering(false);
      stopPlayback();
    } else {
      setIsHovering(true);
      startPlayback();
    }
  }, [isPlaying, startPlayback, stopPlayback]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isHovering ? styles.active : ""}`}
      role="group"
      aria-label={`Video preview for ${projectName}`}
    >
      {/* ── Liquid Glass Frame ── */}
      <div className={styles.glassFrame}>
        <div
          className={styles.viewport}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleTap}
        >
          {/* Poster image — instant visual while video loads */}
          {poster && (
            <img
              src={poster}
              alt=""
              className={`${styles.poster} ${
                videoReady ? styles.posterHidden : ""
              }`}
              onLoad={() => setPosterLoaded(true)}
              onError={() => setPosterLoaded(false)}
            />
          )}

          {/* Video — shows first frame when loaded */}
          {isNearViewport && src && (
            <video
              ref={videoRef}
              className={`${styles.video} ${
                videoReady ? styles.videoReady : ""
              }`}
              muted
              loop
              playsInline
              preload="metadata"
              poster={poster}
              onLoadedData={() => setVideoReady(true)}
              onError={() => setVideoReady(false)}
            >
              <source src={src} type="video/mp4" />
            </video>
          )}

          {/* Placeholder — fallback when no poster or poster failed */}
          {!videoReady && !posterLoaded && (
            <div className={styles.placeholder}>
              <div className={styles.scanlines} />
              <div className={styles.placeholderCenter}>
                <span className={styles.placeholderIcon}>▷</span>
                <span className={styles.placeholderLabel}>
                  VIDEO COMING SOON
                </span>
              </div>
            </div>
          )}

          {/* Glassmorphic play indicator */}
          {videoReady && (
            <div
              className={`${styles.playIndicator} ${
                isPlaying ? styles.playIndicatorHidden : ""
              }`}
            >
              <span className={styles.playBtn}>▶</span>
            </div>
          )}

          {/* Glass reflection on video surface */}
          <div className={styles.videoReflection} />
        </div>
      </div>

      {/* Progress bar */}
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Footer meta */}
      <div className={styles.meta}>
        <span className={styles.metaLabel}>PROJECT PREVIEW</span>
      </div>
    </div>
  );
}
