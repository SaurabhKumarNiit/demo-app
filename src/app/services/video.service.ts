// video.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _videos: string[] = [
    'video-1.mp4', // Replace with your actual video file names
    'video-2.mp4',
    'video-3.mp4',
    'video-4.mp4',
    'video-5.mp4',
    // Add more video file names as needed
  ];

  private _currentVideoIndex = 0;
  private _isLooping = false;

  private _initialVideoState: { videoUrl: SafeResourceUrl, isPlaying: boolean } = { videoUrl: this.getVideoUrl(this._videos[0]), isPlaying: false };
  private _videoStateSubject: BehaviorSubject<{ videoUrl: SafeResourceUrl, isPlaying: boolean }> = new BehaviorSubject(this._initialVideoState);

  get videoState$(): Observable<{ videoUrl: SafeResourceUrl, isPlaying: boolean }> {
    return this._videoStateSubject.asObservable();
  }

  constructor(private sanitizer: DomSanitizer) {}

  private getVideoUrl(videoFileName: string): SafeResourceUrl {
    const videoPath = `assets/videos/${videoFileName}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
  }

  toggleLoop(): void {
    this._isLooping = !this._isLooping;
    if (this._isLooping) {
      this.playNextVideo();
    }
  }

  playNextVideo(): void {
    this._currentVideoIndex = (this._currentVideoIndex + 1) % this._videos.length;
    this._videoStateSubject.next({ videoUrl: this.getVideoUrl(this._videos[this._currentVideoIndex]), isPlaying: this._isLooping });
  }

  playPauseVideo(): void {
    this._videoStateSubject.next({ videoUrl: this.getVideoUrl(this._videos[this._currentVideoIndex]), isPlaying: !this._videoStateSubject.value.isPlaying });
  }
}
