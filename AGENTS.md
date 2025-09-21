# HRVST Interactive Website Project Plan

**Project Overview**: Interactive parallax website for electronic music artist HRVST featuring procedurally generated art and shader-based transitions using Three.js.

## 🎯 Project Goals

- Create an immersive, scroll-driven experience that morphs between different Three.js shaders
- Showcase HRVST's music releases with interactive 3D elements
- Integrate music platform links (Spotify, SoundCloud, Beatport, Traxsource)
- Display artist information and press materials
- Utilize vaporwave aesthetics with white glowing effects on black backgrounds

## 🛠 Technical Stack

### Core Technologies
- **Three.js** - 3D graphics library ([docs](https://threejs.org/docs/) | [manual](https://threejs.org/manual/))
- **@pmndrs/postprocessing** - Shader post-processing effects for glitch transitions ([GitHub](https://github.com/pmndrs/postprocessing))
- **HTML5/CSS3/JavaScript** - Frontend foundation
- **WebGL Shaders** - Custom GLSL shaders for visual effects

### Key Libraries & Tools
- Three.js ShaderMaterial for custom effects
- Three.js PlaneGeometry for grid-based scenes
- Three.js SphereGeometry for morphing sphere
- Three.js BoxGeometry for rotating cubes
- Three.js Points for particle effects
- Perlin noise implementation for procedural generation
- Scroll event handling for parallax effects

## 📐 Architecture Overview

### Scene Management System
```
MainScene
├── Section1: VaporwaveGrid (Perlin noise distorted grid)
├── Section2: GlowingSphere (Displaced sphere with bio)
├── Section3: RotatingCubes (Wireframed. latest release)
├── Section4: ParticleStreams (Particle background gird of releases)
└── Section5: PointNetwork (DJ Mix embed with floating points)
```

### Shader Morphing System
- Scroll-based interpolation between shader states
- Unified vertex/fragment shader approach with time uniforms
- Smooth transitions using postprocessing glitch effects
- Camera position/rotation animations synchronized with scroll

### Data Management
- JSON-based release information storage
- Future-ready for CMS integration
- Structured data for platform links and metadata

## 🎨 Visual Sections Breakdown

### Section 1: Vaporwave Grid Home
**Visual**: Distorted grid forming mountains in distance
- **Geometry**: PlaneGeometry with high subdivision
- **Shader**: Custom vertex shader with Perlin noise displacement
- **Material**: White wireframe lines on black background
- **Text**: "HRVST" with white glow effect, scales down on scroll
- **Camera**: Static perspective view of the grid

### Section 2: Artist Bio Sphere
**Visual**: Transparent glowing sphere with release information
- **Geometry**: SphereGeometry with displacement
- **Shader**: Same Perlin noise function as grid, applied to sphere vertices
- **Material**: Transparent with white emission/glow
- **UI Elements**: 
  - H2 heading (left side)
  - Description paragraph
  - "Listen Now" button → Platform popover
- **Platforms**: Spotify, SoundCloud, Beatport, Traxsource icons

### Section 3: Latest Release Cubes
**Visual**: Row of 3 rotating cubes with projection mapped album covers
- **Geometry**: 3x BoxGeometry instances
- **Layout**: Offset camera angle, left-side lighting
- **Textures**: Album cover images mapped to cube faces
- **Interactions**:
  - Hover: Scale to 1.25x
  - Click: Platform popover for each release
  - Rotation: Different axes per cube
- **Lighting**: DirectionalLight from left side
- **Materials**: MeshStandardMaterial for realistic lighting

### Section 4: Particle All Releases Grid
**Visual**: White particle streams flowing toward center
- **Particles**: Points geometry with custom material
- **Animation**: Streams from left/right edges toward center
- **Background**: Particles render behind embedded player
- **Player**: SoundCloud or YouTube playlist embed
- **Effect**: Continuous particle flow animation

### Section 5: DJ Mix \ Point Network
**Visual**: Floating points connected by dynamic lines
- **Geometry**: Points for nodes, Line segments for connections
- **Animation**: Points float with subtle movement
- **Connections**: Dynamic line drawing between nearby points
- **Content**: Artist biography text and press kit download link
- **Layout**: Text overlaid on point network background

## 🔄 Scroll & Transition System

### Scroll Detection
```javascript
window.addEventListener('scroll', (e) => {
  const scrollPercent = window.scrollY / document.body.scrollHeight;
  updateShaderMorphing(scrollPercent);
  updateCameraPosition(scrollPercent);
  updateTextScaling(scrollPercent);
});
```

### Shader Morphing Logic
- Section boundaries at 0%, 25%, 50%, 75%, 100% scroll positions
- Interpolation between shader states using uniforms
- Glitch effects during transitions via postprocessing
- Vertex shader morphing between grid → sphere → cubes → particles → points

### Performance Considerations
- Single renderer instance across all sections
- Geometry instancing where possible
- Shader uniform updates over geometry recreation
- Lazy loading of textures and audio content

## 📊 Data Structure

### Release Information JSON
```json
{
  "latestRelease": {
    "title": "Track Title",
    "artist": "HRVST",
    "releaseDate": "2025-XX-XX",
    "coverArt": "/assets/covers/latest.jpg",
    "platforms": {
      "spotify": "https://open.spotify.com/...",
      "soundcloud": "https://soundcloud.com/...",
      "beatport": "https://www.beatport.com/...",
      "traxsource": "https://www.traxsource.com/..."
    }
  },
  "releases": [
    {
      "id": 1,
      "title": "Release 1",
      "coverArt": "/assets/covers/release1.jpg",
      "platforms": { ... }
    },
    // ... more releases
  ],
  "djMixes": {
    "playlistUrl": "https://soundcloud.com/playlists/...",
    "alternateUrl": "https://youtube.com/playlist/..."
  },
  "artistInfo": {
    "bio": "Artist biography text...",
    "pressKit": "/assets/HRVST_Press_Kit.pdf"
  }
}
```

## 🎛 Implementation Phases

### Phase 1: Core Setup ✅ (Todo #2)
- Project structure initialization
- Three.js and postprocessing dependencies
- Basic HTML/CSS framework
- Scroll detection system

## 🌀 Branching & Pull Request Workflow

To ensure a robust and maintainable codebase, each major phase of development is implemented in a dedicated feature branch. The workflow for each phase is as follows:

1. **Create a new branch** for the phase (e.g., `feature/phase-2-shader-morphing`).
2. **Develop and commit** all changes for that phase in the feature branch.
3. **Open a Pull Request (PR)** from the feature branch into `master`.
4. **PR Description** includes a summary of the phase, a checklist of completed tasks, and a random robot dance gif from [Giphy](https://giphy.com/search/robot-dance).
5. **Review and merge** the PR into `master` after validation.
6. **Repeat** for each subsequent phase.

This approach allows for easy reversion, code review, and clear separation of features. If a phase introduces issues, it can be reverted or fixed independently without affecting the rest of the project.

**Example PR Description:**

---
### Phase 2: Scroll-Based Shader Morphing System

- [x] Implemented parallax scroll system
- [x] Morphing logic between Three.js scenes/shaders
- [x] Section boundary detection and camera animation

![Robot Dance](https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif)
---

### Phase 2: Shader Foundation ✅ **COMPLETED**
- ✅ Scroll-based scene morphing system (foundation implemented)
- ✅ Perlin noise shader implementation (custom noise functions)
- ✅ Vaporwave grid with mountain formation (animated wireframe mesh)
- ✅ Time-based animation with sin/cos coordinate shifting
- ✅ Proper rendering pipeline with EffectComposer
- ✅ HRVST text with glow effect and scaling (pending UI integration)

**Implementation Details:**
✅ **Grid Animation**: Time-shifted Perlin noise creates flowing mountain formations
✅  **Vertex Displacement**: `sin(elapsedTime * 0.5) * 2` and `cos(elapsedTime * 0.3) * 2` for smooth morphing
✅ **Material System**: MeshBasicMaterial with wireframe for optimal performance
✅ **Rendering**: Clean animation loop with composer.render() handling post-processing
✅ **Geometry**: Non-indexed PlaneGeometry(40,40,120,120) for proper wireframe animation

### Phase 3: Interactive Elements ⚠️ **IN PROGRESS**
✅ 🔄 Morphing sphere with platform integration
✅ 🔄 Hover effects and click handlers
✅ 🔄 Platform popover system

### Phase 4: Dynamic Content ✅ (Todo #8-9)
✅ Particle emission system
✅ Embedded media player integration
✅ Point network with line connections
✅ Artist bio and press kit section

### Phase 5: Data & Polish ✅ (Todo #10-12)
- JSON data management system
- Postprocessing glitch effects
- Performance optimization
✅ Cross-browser testing and responsive design

## 🚀 Future Enhancements

### Content Management
- Admin interface for release updates
- Dynamic asset upload system
- Real-time platform link validation

### Advanced Interactions
- Audio-reactive visuals
- Touch/gesture controls for mobile
- WebXR/VR support for immersive experience

### Analytics & SEO
- Performance monitoring
- User interaction tracking
- Search engine optimization

## 📝 Development Notes

### Shader Development
- Use ShaderMaterial for custom effects
- Implement Perlin noise as reusable shader chunk
- Consider performance impact of complex fragment shaders
- Test across different GPU capabilities

### Asset Management
- Optimize texture sizes for web delivery
- Implement progressive loading for large assets
- Create fallback images for album covers
- Compress audio embeds for faster loading

### Browser Compatibility
- WebGL compatibility checking
- Graceful degradation for older browsers
- Mobile-specific optimizations
- Touch event handling

---

**Last Updated**: September 21, 2025
**Status**: Need to Determine Current State.
**Current Branch**: main
**Next Action**: Need to Determine