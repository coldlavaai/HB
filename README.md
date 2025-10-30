# Harry Bennett - Interactive CV

A modern, visually stunning interactive CV showcasing Harry Bennett's career as a cotton trading specialist and partner at Liverpool Cotton Brokers.

## 🌟 Features

### Interactive Components

- **Hero Section**: Animated introduction with floating particles and gradient background
- **3D Interactive Globe**: Real-time visualization of global trading routes connecting origin markets (US, Brazil, Australia, Greece, West Africa) to destination markets (Bangladesh, Pakistan, Vietnam, Turkey, Portugal)
- **Animated Counters**: Dynamic number animations showing key metrics and achievements
- **Career Timeline**: Scrolling timeline with company logos and detailed role information
- **Saiham Case Study**: Tabbed interface showcasing flagship partnership with interactive content
- **Skills Visualization**: Animated progress bars showing expertise across different domains
- **Contact Section**: Clean call-to-action with email, phone, and PDF download options

### Technical Features

- **Built with Next.js 16** - Latest React framework with App Router
- **Framer Motion** - Smooth scroll animations and transitions
- **Three.js & React Globe GL** - 3D interactive globe visualization
- **Tailwind CSS** - Utility-first styling with custom color palette
- **TypeScript** - Type-safe code throughout
- **Responsive Design** - Optimized for all screen sizes
- **SEO Optimized** - Metadata and semantic HTML

## 🎨 Design System

### Color Palette

- **Navy**: `#1A2332` - Primary background, trust and professionalism
- **Gold**: `#D4AF37` - Accent color, commodity heritage, Liverpool connection
- **Teal**: `#2C7A7B` - Secondary accent, sustainability and modern trading
- **Cream**: `#F7F3E9` - Light background and text

### Typography

- **Playfair Display**: Headings (sophisticated, heritage feel)
- **Inter**: Body text (modern, readable)
- **JetBrains Mono**: Numbers and data (technical credibility)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone or navigate to the project
cd harry-bennett-cv

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## 📦 Project Structure

```
harry-bennett-cv/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and fonts
├── components/
│   ├── Hero.tsx            # Hero section with animations
│   ├── GlobalFootprint.tsx # Interactive 3D globe
│   ├── ByTheNumbers.tsx    # Animated statistics
│   ├── CareerTimeline.tsx  # Career progression timeline
│   ├── SaihamCaseStudy.tsx # Case study with tabs
│   ├── Skills.tsx          # Skills visualization
│   └── Contact.tsx         # Contact section
├── public/
│   └── logos/              # Company logos
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🌍 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Alternative Deployment Options

- **Netlify**: Connect GitHub repo or use Netlify CLI
- **AWS Amplify**: Connect repository for continuous deployment
- **Custom VPS**: Build and serve using `npm run build && npm start`

## 📊 Content Sections

1. **Hero**: Introduction with key statistics
2. **Global Footprint**: Interactive map of trading network
3. **By The Numbers**: Key metrics and achievements
4. **Career Timeline**: Professional journey from 2011-present
5. **Saiham Partnership**: Deep dive into flagship client relationship
6. **Skills & Expertise**: Comprehensive capability overview
7. **Contact**: Multiple ways to connect

## 🛠️ Customization

### Update Content

Edit the component files in `/components` to update:
- Personal information
- Career history
- Statistics and metrics
- Skills and expertise
- Contact information

### Modify Design

- Colors: Edit `tailwind.config.ts`
- Fonts: Update Google Fonts import in `globals.css`
- Animations: Adjust Framer Motion variants in components
- Globe: Modify trade routes and points in `GlobalFootprint.tsx`

### Add Sections

Create new components in `/components` and import them in `app/page.tsx`

## 📱 Mobile Optimization

The CV is fully responsive with:
- Mobile-first approach
- Touch-optimized interactions
- Adaptive layouts
- Performance optimizations for mobile devices

## 🔧 Technical Notes

### Globe Performance

The 3D globe uses dynamic imports to avoid SSR issues:
```typescript
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });
```

### Animation Performance

Animations use Framer Motion's `whileInView` for performance:
- Elements animate only when scrolled into view
- Reduces initial page load
- Improves battery life on mobile devices

### PDF Export

The "Download PDF" button uses `window.print()` which triggers the browser's print dialog. Users can save as PDF from there.

## 📄 License

This is a personal CV website. Feel free to use the code structure and design as inspiration for your own projects.

## 👤 Contact

**Harry Bennett**
- Email: hwbconsultingltd@outlook.com
- Phone: +44 7380 949 6591
- Location: Heswall, UK

---

**Built with** Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js

*Interactive CV © 2025 Harry Bennett*

# Form updated Thu 30 Oct 2025 17:25:51 GMT
