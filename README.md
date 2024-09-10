
# Four Days on the Four Pass Loop

**Four Days on the Four Pass Loop** is a full-stack JavaScript project built with **Next.js**, showcasing my proficiency in both front-end and back-end development. This interactive web application documents a four-day backpacking trip in the Maroon Bells wilderness of Colorado, utilizing modern web technologies, animation, and performance optimizations.

## Table of Contents
- [Features](#features)
  - [Our Crew](#our-crew)
  - [The Loop](#the-loop)
  - [Trail Log](#trail-log)
  - [Photo Gallery](#photo-gallery)
- [Technologies Used](#technologies-used)
- [Performance Considerations](#performance-considerations)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

## Features

### 1. **Our Crew**
This page presents the 12 members of the trip in a **professional "team" page format**:
- **Photos, names, roles**, and **blurbs** for each member.
- Structured to mirror employee/team pages found on modern corporate websites.

### 2. **The Loop**
This route offers a comprehensive overview of the Four Pass Loop hike:
- **Trail overview**: Detailed information about the trail, including important logistical considerations such as **permitting** and **safety**.
- **Labeled map**: An interactive map that marks out key locations along the trail.
- **Itinerary**: A breakdown of the 4-day itinerary, complete with stats for each day (distance, elevation gain/loss, etc.).

### 3. **Trail Log**
An extensive and engaging account of the backpacking trip, split into **over 100 sections**:
- **Carousel-style image gallery**: Each section is paired with a corresponding image, presented in a unique photo carousel.
  - The photos are styled as if they were a stack of printed photos, transitioning as the user scrolls.
  - **Animations** using **Framer Motion** provide smooth, appealing visual transitions.
- **Navigation options**: 
  - Users can navigate between sections using keyboard arrow keys, number pagination, or on-screen arrow buttons (`<` and `>`).
  - Each day of the adventure is tracked with a clear **day indicator**, including daily route stats and maps.

### 4. **Photo Gallery**
An expansive photo gallery showcasing over **400 high-resolution images** taken during the trip:
- Images are **hosted on Cloudinary** and lazy-loaded for optimal performance.
- Displayed in a **Masonry grid**, similar to Pinterest, providing a visually appealing, seamless experience.
- **Blurred placeholders** are used while images load, ensuring a smooth user experience.
- Hover effects and full-screen functionality allow users to view images in detail:
  - In full-screen mode, users can navigate using arrow keys or the on-screen navigation.
  - A **photo strip** below the full-size image enables fast navigation between images.
  - Users can easily **save images** or **open them in a new tab**.

### 5. **Global Navigation**
- A drop-down **hamburger navbar** in the top right allows seamless navigation across all routes in the application.

## Technologies Used
- **Next.js (v13.4)**: Server-side rendering framework built on React for performance and scalability.
- **React**: The core library for building dynamic, component-based UIs.
- **TypeScript**: The primary language for static typing and enhanced tooling.
- **Framer Motion**: Used for smooth animations and transitions.
- **Cloudinary**: Image hosting and optimization for fast loading and performance.
- **Google Fonts**: For custom fonts to enhance typography.
- **Daisy UI**: For the color scheme and a consistent design language.
- **Tailwind CSS**: Utilized extensively for responsive and utility-based styling.
- **CSS Stylesheets**: Applied primarily for font styling and specific components.
- **PapaParse**: For efficient CSV data conversion.
- **CSS Modules**: For component-scoped styling, ensuring a maintainable codebase.

## Performance Considerations
- **Lazy Loading**: Ensures that images are only loaded when needed, improving load times and overall site performance.
- **Image Optimization**: Leveraging Cloudinary to serve optimized images, ensuring that bandwidth usage is minimized.
- **Server-Side Rendering**: Next.js enables server-side rendering to ensure fast initial page loads and SEO benefits.
- **Framer Motion Animations**: All animations are designed to be lightweight and smooth without hindering performance.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mgotsch/nextjs-fourpass-backpacking-log.git
   ```

2. Install dependencies:

   ```bash
   cd four-pass-loop
   npm install
   ```

3. Set up environment variables for Cloudinary integration.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit:

   ```bash
   http://localhost:3000
   ```

## Usage

- Use the **hamburger menu** on the top right to navigate between routes.
- Explore each section to learn more about the trip and the crew.
- In the **photo gallery**, you can click on any image to view it in full-screen mode and use the arrows to scroll through the gallery.

## Screenshots

- Include relevant screenshots of each route here, showcasing the user interface, animations, and features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
