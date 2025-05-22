# Interactive Portfolio Website Structure

## Overview
This document outlines the structure for Pranav Banga's interactive, dark-themed portfolio website, designed to showcase skills in robotics, automation, and design with a focus on high interactivity similar to thibaut.cool.

## Design Philosophy
- **Dark Theme**: Rich, dark backgrounds with vibrant accent colors
- **High Interactivity**: Mouse-following elements, parallax effects, animated transitions
- **3D Elements**: Interactive 3D models of projects where applicable
- **Responsive Design**: Fully functional on all devices
- **Individual Project Pages**: Detailed pages for each major project
- **Particle Effects**: Dynamic background elements

## Site Structure

### 1. Landing Page / Hero Section
- Full-screen interactive hero with particle animation background
- Animated text introduction: "Pranav Banga - Mechatronics Engineer"
- Mouse-following cursor effect with interactive elements
- Floating 3D elements representing engineering concepts
- Scroll indicator with animation

### 2. About Section
- Split-screen layout with animated photo/avatar
- Interactive skills visualization with hover effects
- Education and experience timeline with animation
- Downloadable resume option
- Animated statistics/metrics of accomplishments

### 3. Projects Overview / Gallery
- Interactive grid/masonry layout with filter options:
  - Robotics
  - Automation
  - CAD Design
  - Additive Manufacturing
  - Artistic Projects
- Hover effects with project preview animations
- Click to expand project details or navigate to dedicated project page

### 4. Individual Project Pages
Each major project will have its own dedicated page with:
- Hero section with project title and key image
- Project overview with animated illustrations
- Interactive gallery of project images
- Technical details with animated diagrams
- Development process timeline
- Technologies/tools used with icons
- Results and outcomes with visual representations
- Related projects section

### 5. Dedicated Additive Manufacturing Section
- Showcase of 3D printing projects and capabilities
- Interactive 3D models that users can rotate and explore
- Before/after sliders showing design to physical product
- Technical specifications and materials information
- Gallery of printed objects with detailed descriptions
- Service offerings for 3D printing business

### 6. Interactive Skills Section
- Animated skill bars or radar chart
- Categorized skills:
  - Programming Languages
  - CAD Software
  - Fabrication Techniques
  - Robotics & Automation
  - Design & Creativity
- Hover effects revealing detailed expertise in each area

### 7. Experience Timeline
- Interactive vertical timeline
- Animated entries for each position
- Expandable details for key accomplishments
- Visual indicators for skills gained at each position

### 8. Contact Section
- Interactive contact form with animations
- Social media links with hover effects
- Location map with animation
- Call-to-action for collaboration opportunities

## Interactive Elements

### Mouse Interactions
- Custom cursor that changes based on hoverable elements
- Magnetic effect on buttons and interactive elements
- Parallax effect on background elements
- Reveal effects triggered by mouse position

### Scroll Interactions
- Smooth scrolling with animated transitions between sections
- Reveal animations triggered by scroll position
- Parallax scrolling effects for depth
- Progress indicator showing position in site

### 3D Elements
- Interactive 3D models of key projects
- 3D background elements that respond to mouse movement
- WebGL-powered animations for complex visualizations

### Transitions
- Page transitions with custom animations
- Content reveal animations
- Loading animations between project pages
- Text animations for headings and important content

## Technical Implementation

### Frontend Technologies
- HTML5, CSS3, JavaScript
- Three.js for 3D elements
- GSAP for advanced animations
- Particles.js for background effects
- Locomotive Scroll for smooth scrolling

### Responsive Considerations
- Mobile-first approach
- Touch-friendly interactions for mobile devices
- Simplified animations for performance on mobile
- Adaptive layout for different screen sizes

### Performance Optimization
- Lazy loading for images and heavy content
- Optimized asset loading
- Efficient animation techniques
- Progressive loading of content

## Color Scheme
- Primary Background: Rich dark blue/black (#0A0A1A)
- Secondary Background: Dark gray with blue tint (#1A1A2E)
- Primary Accent: Electric blue (#4361EE)
- Secondary Accent: Vibrant purple (#7209B7)
- Highlight: Bright teal (#4CC9F0)
- Text: White/light gray (#F8F9FA)

## Typography
- Headings: Modern sans-serif with weight contrast
- Body: Clean, highly readable sans-serif
- Code/Technical: Monospace font for technical details
- Accent: Stylized font for creative elements

## Project Categories and Organization

### Robotics & Automation
1. Autonomous Car Navigation System
2. ATMS (Autonomous Telescope Mount System)
3. Terrain Robot for Package Delivery

### Design & CAD
1. Helmet Design
2. Car Seat Design
3. Mini Design Projects

### Additive Manufacturing
1. 3D Printing Services
2. Custom Parts and Prototypes
3. Functional Prints

### Electronics & Energy
1. EcoCharge Project
2. Power Drawer
3. Solar Tracker

### Artistic Endeavors
1. The Yellow Woods
2. Utopia Experience
3. Passion Visual

## Navigation Structure
- Main Navigation: Home, Projects, Skills, Experience, Additive Manufacturing, Contact
- Secondary Navigation: Individual project pages
- Mobile Navigation: Hamburger menu with animated expansion
- Quick Access: Floating action button for key sections

## Interactive Gallery Implementation
- Masonry layout with category filtering
- Lightbox functionality for image viewing
- Before/after sliders for process demonstration
- Video integration for project demonstrations
- Interactive 3D models where applicable
