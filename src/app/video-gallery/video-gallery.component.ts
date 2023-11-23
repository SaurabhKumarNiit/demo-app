// video-gallery.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css'],
})
export class VideoGalleryComponent {
  videos: string[] = [
    'video-1.mp4', // Replace with your actual video file names
    'video-2.mp4',
    'video-3.mp4',
    // Add more video file names as needed
  ];
}
