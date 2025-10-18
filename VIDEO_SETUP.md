# Video Background Setup Instructions

## Adding Vecteezy Video Background

The website is configured to use a video background in the hero section. To complete the setup:

### 1. Download Video from Vecteezy
1. Visit [Vecteezy Exploding Videos](https://www.vecteezy.com/free-videos/exploding)
2. Search for technology particles or exploding particles videos
3. Download a suitable video (recommended: technology particles, blue/purple theme)
4. Suggested search terms: "technology particles", "digital explosion", "particle burst"

### 2. Video Requirements
- **Format**: MP4 (H.264 codec recommended)
- **Duration**: 10-30 seconds (will loop automatically)
- **Resolution**: 1920x1080 or higher
- **File size**: Under 10MB for optimal loading
- **Theme**: Dark background with blue/purple particles

### 3. Installation
1. Rename your downloaded video to `technology-particles.mp4`
2. Place it in the `assets/videos/` directory
3. The video will automatically load and play as the hero background

### 4. Fallback Behavior
If the video fails to load or autoplay is blocked:
- The site will automatically fall back to the gradient background
- No user interaction is required
- The site remains fully functional

### 5. Attribution
The Vecteezy attribution link is already included in the footer:
```html
<a href="https://www.vecteezy.com/free-videos/exploding">Exploding Stock Videos by Vecteezy</a>
```

### 6. Testing
After adding the video:
1. Open the website in a browser
2. Check that the video plays automatically
3. Test on mobile devices (some may not autoplay)
4. Verify the fallback gradient appears if video fails

### 7. Optimization Tips
- Compress the video using tools like HandBrake
- Use web-optimized settings (H.264, AAC audio)
- Consider creating multiple formats (WebM, MP4) for better browser support

## Current Status
- ✅ Video background structure implemented
- ✅ Fallback gradient configured
- ✅ Attribution link added
- ⏳ Actual video file needs to be downloaded and added
- ✅ Responsive design and mobile handling