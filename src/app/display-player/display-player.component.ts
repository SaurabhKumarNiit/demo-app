// display-player.component.ts

import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css'],
})
export class DisplayPlayerComponent {
  // @Input() videos: string[] = [];

  videos: string[] = [
    'video-1.mp4', // Replace with your actual video file names
    'video-2.mp4',
    'video-3.mp4',
    // Add more video file names as needed
  ];

  currentVideoIndex = 0;
  currentVideoUrl: SafeResourceUrl = '';
  isLooping = false;

  carouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '0',
  };

  constructor(private sanitizer: DomSanitizer) {
    this.currentVideoUrl = this.getVideoUrl(this.videos[this.currentVideoIndex]);
  }

  getVideoUrl(videoFileName: string): SafeResourceUrl {
    const videoPath = `assets/videos/${videoFileName}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
  }

  playVideo(video: string): void {
    this.currentVideoIndex = this.videos.indexOf(video);
    this.currentVideoUrl = this.getVideoUrl(video);
  }

  playNextVideo(): void {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
    this.currentVideoUrl = this.getVideoUrl(this.videos[this.currentVideoIndex]);
  }

  playPauseVideo(): void {
    // Your play/pause logic here
  }

  toggleLoop(): void {
    // Your toggle loop logic here
  }

   getVideoThumbnail(videoFileName: string): SafeResourceUrl {
    // Your logic to get video thumbnail URL
    // You can use the same logic as getVideoUrl or a separate one
    return this.sanitizer.bypassSecurityTrustResourceUrl('thumbnail_url_here');
  }
}
