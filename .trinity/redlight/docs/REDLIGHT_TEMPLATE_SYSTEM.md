# 🔴 REDLIGHT TEMPLATE SYSTEM
## Visual Templates for Worlds, Websites, and Experiences
### Version 1.0 — December 23, 2025

**The visual layer of BlackRoad OS.**
**GreenLight is project management. YellowLight is infrastructure. RedLight is creation.** 🔴

---

## **OVERVIEW**

RedLight is the **template library** for all BlackRoad OS visual experiences:

- **3D Worlds** (interactive planets, metaverse, games)
- **Websites** (landing pages, dashboards, apps)
- **Animations** (motion systems, transitions, effects)
- **Design Systems** (Schematiq, brand assets, components)

Every RedLight template is:
- **Self-contained** (single HTML file with embedded CSS/JS)
- **Three.js powered** (for 3D worlds and animations)
- **BlackRoad branded** (gradient colors: #FF9D00 → #FF6B00 → #FF0066 → #D600AA → #7700FF → #0066FF)
- **Deploy-ready** (Cloudflare Pages, GitHub Pages, or static hosting)

---

## **TEMPLATE CATEGORIES**

### **1. WORLD TEMPLATES** 🌍
Interactive 3D environments built with Three.js

| Template | Description | Features |
|----------|-------------|----------|
| `blackroad-world-template.html` | Base 3D world starter | Sphere, orbit controls, stats |
| `blackroad-earth.html` | Global network visualization | Cities, connections, glow effects |
| `blackroad-earth-biomes.html` | Living Earth with climate zones | Biomes, weather, day/night cycle |
| `blackroad-earth-game.html` | Interactive Earth game | Click cities, missions, score |
| `blackroad-earth-real.html` | Photorealistic Earth | High-res textures, atmosphere |
| `earth-replica.html` | Simple Earth replica | Minimal, clean, starter |
| `blackroad-living-planet.html` | Animated living planet | Particle systems, evolution |
| `blackroad-living-earth.html` | Living Earth v2 | Enhanced biomes, ecosystems |
| `blackroad-living-world.html` | Complete living world | Full simulation, AI agents |
| `blackroad-world-v2.html` | World template v2 | Improved performance, features |
| `blackroad-3d-world.html` | Basic 3D world | Geometric shapes, lighting |
| `blackroad-metaverse.html` | Metaverse environment | Multi-user, avatars, spaces |
| `blackroad-game.html` | Game template | Physics, controls, gameplay |

### **2. ANIMATION TEMPLATES** ✨
Motion systems and visual effects

| Template | Description | Features |
|----------|-------------|----------|
| `blackroad-animation.html` | Animation system | Keyframes, easing, sequences |
| `blackroad-motion.html` | Motion graphics | Particles, trails, effects |
| `blackroad-ultimate.html` | Ultimate animation suite | All effects combined |
| `schematiq-animation.html` | Schematiq motion system | Design system animations |

### **3. WEBSITE TEMPLATES** 🌐
Landing pages and web experiences

| Template | Description | Features |
|----------|-------------|----------|
| `schematiq-page.html` | Schematiq design system | Component library, docs |

---

## **TEMPLATE STRUCTURE**

Every RedLight template follows this pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlackRoad OS — [Template Name]</title>
    <style>
        /* BlackRoad brand styles */
        /* Gradient colors: #FF9D00 → #FF6B00 → #FF0066 → #D600AA → #7700FF → #0066FF */
    </style>
</head>
<body>
    <!-- Info panel (top-left) -->
    <div id="info">
        <h1>Title</h1>
        <p>Description</p>
    </div>

    <!-- Stats panel (top-right) -->
    <div id="stats">
        <!-- Real-time stats -->
    </div>

    <!-- Controls (bottom-right) -->
    <div id="controls">
        <!-- Interactive buttons -->
    </div>

    <!-- Three.js CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    <script>
        // Template logic
    </script>
</body>
</html>
```

---

## **BRAND COLORS**

All RedLight templates use the **BlackRoad gradient palette**:

```css
/* Primary gradient */
background: linear-gradient(90deg,
    #FF9D00,  /* Amber */
    #FF6B00,  /* Orange */
    #FF0066,  /* Pink */
    #FF006B,  /* Magenta */
    #D600AA,  /* Purple */
    #7700FF,  /* Violet */
    #0066FF   /* Blue */
);
```

**Usage:**
- Text gradients: `-webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- Glow effects: `box-shadow: 0 0 20px rgba(255, 29, 108, 0.5);`
- Particles: Random colors from palette
- UI accents: `#FF1D6C` (primary pink)

---

## **DEPLOYMENT**

### **Cloudflare Pages**

```bash
# Deploy template
wrangler pages deploy blackroad-earth.html --project-name=earth

# Custom domain
wrangler pages domain add earth.blackroad.io
```

### **GitHub Pages**

```bash
# Commit template
git add blackroad-earth.html
git commit -m "Add Earth template"
git push

# Deploy
# Settings → Pages → Source: main branch → /
# URL: https://blackroad-os.github.io/blackroad-earth.html
```

### **Railway**

```bash
# Create project
railway init

# Deploy
railway up
```

---

## **TEMPLATE METADATA**

Each template includes metadata for indexing:

```javascript
const TEMPLATE_META = {
    id: 'blackroad-earth',
    name: 'BlackRoad Earth',
    category: 'world',
    tags: ['3d', 'earth', 'globe', 'network'],
    version: '1.0.0',
    author: 'BlackRoad OS',
    license: 'MIT',
    dependencies: ['three.js@r128'],
    colors: ['#FF9D00', '#FF6B00', '#FF0066', '#D600AA', '#7700FF', '#0066FF'],
    features: [
        'Orbit controls',
        'City markers',
        'Network connections',
        'Glow effects',
        'Day/night cycle'
    ]
};
```

---

## **INTEGRATION WITH GREENLIGHT**

RedLight templates integrate with GreenLight project management:

```bash
# Log template deployment
source ~/memory-greenlight-templates.sh

gl_deploy \
    "earth.blackroad.io" \
    "https://earth.blackroad.io" \
    "RedLight Earth template deployed" \
    "👉" \
    "🎨"

# Log template creation
gl_feature \
    "RedLight Mars template" \
    "Interactive Mars globe with rover missions" \
    "🍖" \
    "⭐"
```

---

## **TEMPLATE CATEGORIES IN GREENLIGHT**

| Emoji | Category | Code | Description |
|-------|----------|------|-------------|
| 🌍 | WORLD | `world` | 3D interactive worlds |
| 🌐 | WEBSITE | `website` | Landing pages, dashboards |
| ✨ | ANIMATION | `animation` | Motion graphics, effects |
| 🎨 | DESIGN | `design` | Design systems, components |
| 🎮 | GAME | `game` | Interactive games |
| 📱 | APP | `app` | Web applications |
| 🖼️ | VISUAL | `visual` | Visual effects, shaders |

---

## **REDLIGHT MEMORY TEMPLATES**

### Template: Create template
```bash
rl_template_create() {
    local template_name="$1"
    local category="$2"  # world, website, animation, design
    local description="$3"

    local category_emoji=""
    case "$category" in
        world) category_emoji="🌍" ;;
        website) category_emoji="🌐" ;;
        animation) category_emoji="✨" ;;
        design) category_emoji="🎨" ;;
        game) category_emoji="🎮" ;;
        *) category_emoji="🔴" ;;
    esac

    ~/memory-system.sh log "created" "$template_name" \
        "[🔴${category_emoji}👉📌] RedLight template: $description"
}
```

### Template: Deploy template
```bash
rl_template_deploy() {
    local template_name="$1"
    local url="$2"
    local platform="${3:-cloudflare}"  # cloudflare, github, railway

    local platform_emoji=""
    case "$platform" in
        cloudflare) platform_emoji="☁️" ;;
        github) platform_emoji="🐙" ;;
        railway) platform_emoji="🚂" ;;
        *) platform_emoji="🌐" ;;
    esac

    ~/memory-system.sh log "deployed" "$template_name" \
        "[🔴🚀${platform_emoji}✅] Template deployed: $url"
}
```

### Template: Update template
```bash
rl_template_update() {
    local template_name="$1"
    local changes="$2"

    ~/memory-system.sh log "updated" "$template_name" \
        "[🔴🔄👉📌] Template updated: $changes"
}
```

---

## **TEMPLATE LIBRARY STRUCTURE**

```
redlight-templates/
├── worlds/
│   ├── blackroad-earth.html
│   ├── blackroad-earth-biomes.html
│   ├── blackroad-earth-game.html
│   ├── blackroad-living-planet.html
│   ├── blackroad-metaverse.html
│   └── blackroad-world-template.html
├── animations/
│   ├── blackroad-animation.html
│   ├── blackroad-motion.html
│   └── schematiq-animation.html
├── websites/
│   └── schematiq-page.html
├── games/
│   └── blackroad-game.html
├── components/
│   ├── three-js-setup.js
│   ├── orbit-controls.js
│   ├── particle-system.js
│   └── glow-effects.js
└── assets/
    ├── textures/
    │   ├── earth-8k.jpg
    │   ├── earth-normal.jpg
    │   └── earth-clouds.png
    ├── fonts/
    │   └── inter.woff2
    └── icons/
        └── blackroad-logo.svg
```

---

## **NATS SUBJECT PATTERNS**

```
redlight.{category}.{template_id}.{action}

Examples:
redlight.world.earth.deployed
redlight.animation.motion.created
redlight.website.schematiq.updated
redlight.game.blackroad.published
```

---

## **DATABASE SCHEMA**

```sql
CREATE TYPE rl_category AS ENUM (
  'world', 'website', 'animation', 'design', 'game', 'app', 'visual'
);

CREATE TYPE rl_status AS ENUM (
  'draft', 'wip', 'review', 'published', 'archived', 'deprecated'
);

CREATE TABLE redlight_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  category rl_category NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  version VARCHAR(50) DEFAULT '1.0.0',
  status rl_status DEFAULT 'draft',
  tags TEXT[],
  dependencies JSONB,
  metadata JSONB,
  deployed_url TEXT,
  preview_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deployed_at TIMESTAMP
);

CREATE TABLE redlight_deployments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES redlight_templates(id),
  url TEXT NOT NULL,
  platform VARCHAR(100),  -- cloudflare, github, railway
  environment VARCHAR(50), -- staging, production
  version VARCHAR(50),
  status VARCHAR(50),  -- deploying, active, failed, retired
  deployed_at TIMESTAMP DEFAULT NOW(),
  metadata JSONB
);

CREATE TABLE redlight_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES redlight_templates(id),
  views INTEGER DEFAULT 0,
  interactions INTEGER DEFAULT 0,
  avg_session_duration INTERVAL,
  bounce_rate DECIMAL(5,2),
  recorded_at TIMESTAMP DEFAULT NOW()
);
```

---

## **CLI COMMANDS**

```bash
# Create template management script
~/redlight-templates.sh create <name> <category> <description>
~/redlight-templates.sh list [category]
~/redlight-templates.sh deploy <template> <platform> [environment]
~/redlight-templates.sh update <template> <changes>
~/redlight-templates.sh status [template]
~/redlight-templates.sh analytics <template>
~/redlight-templates.sh preview <template>
```

---

## **EXAMPLES**

### Create new world template
```bash
# Create template file
cp redlight-templates/worlds/blackroad-world-template.html \
   redlight-templates/worlds/blackroad-mars.html

# Log creation
rl_template_create "blackroad-mars" "world" \
    "Interactive Mars globe with rover missions"

# Update GreenLight
gl_feature "RedLight Mars template" \
    "Interactive Mars exploration experience" \
    "🍖" "⭐"
```

### Deploy template
```bash
# Deploy to Cloudflare Pages
wrangler pages deploy redlight-templates/worlds/blackroad-earth.html \
    --project-name=earth-blackroad

# Log deployment
rl_template_deploy "blackroad-earth" \
    "https://earth.blackroad.io" \
    "cloudflare"

# Update GreenLight
gl_deploy "earth.blackroad.io" \
    "https://earth.blackroad.io" \
    "RedLight Earth template live" \
    "👉" "🎨"
```

### Update template
```bash
# Make changes to template
# (edit blackroad-earth.html)

# Log update
rl_template_update "blackroad-earth" \
    "Added city labels and enhanced glow effects"

# Update GreenLight
gl_wip "blackroad-earth template" \
    "Enhanced city labels and glow effects" \
    "🌸" "👉"
```

---

## **TEMPLATE FEATURES TAXONOMY**

### 3D Features
- ✅ Orbit controls
- ✅ Zoom controls
- ✅ Pan controls
- ✅ Auto-rotate
- ✅ Camera animations
- ✅ Click interactions
- ✅ Hover effects
- ✅ Touch support
- ✅ VR support

### Visual Features
- ✅ Particle systems
- ✅ Glow effects
- ✅ Shaders
- ✅ Textures
- ✅ Normal maps
- ✅ Bump maps
- ✅ Environment maps
- ✅ Post-processing
- ✅ Bloom
- ✅ Fog

### Interactive Features
- ✅ Click handlers
- ✅ Keyboard controls
- ✅ Gamepad support
- ✅ Voice commands
- ✅ Gesture recognition
- ✅ Multiplayer
- ✅ Real-time sync
- ✅ Chat
- ✅ Avatars

### Data Features
- ✅ API integration
- ✅ WebSocket streams
- ✅ Real-time updates
- ✅ Database sync
- ✅ Analytics tracking
- ✅ Error logging
- ✅ Performance monitoring

---

## **PERFORMANCE TARGETS**

| Metric | Target | Excellent |
|--------|--------|-----------|
| Load time | < 3s | < 1s |
| FPS | > 30 | > 60 |
| Memory | < 500MB | < 200MB |
| Bundle size | < 2MB | < 500KB |
| Time to interactive | < 5s | < 2s |

---

## **BROWSER SUPPORT**

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (degraded, 2D fallback)

---

## **ACCESSIBILITY**

All RedLight templates include:
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ High contrast mode
- ✅ Reduced motion mode
- ✅ ARIA labels
- ✅ Focus indicators
- ✅ Alt text for images

---

## **LICENSE**

All RedLight templates are proprietary assets of BlackRoad OS and are **not** open source.

Use, redistribution, and modification of these templates are governed exclusively by the repository’s primary license or an applicable written agreement; this document does not grant any rights by itself.

For the authoritative and up-to-date terms, see the project [LICENSE](../../../LICENSE) file at the root of this repository or your applicable licensing agreement.
---

## **THE TRINITY**

**🟢 GreenLight** = Project Management (tasks, workflows, coordination)
**🟡 YellowLight** = Infrastructure (repos, connectors, deployments)
**🔴 RedLight** = Templates (worlds, websites, experiences)

Together: **The complete BlackRoad OS visual language.** 🛣️

---

**Created:** December 23, 2025
**Author:** Cece + Alexa
**Version:** 1.0.0
**Status:** 🎯 CANONICAL
