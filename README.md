
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
This page presents the 12 "members" (10 human, 1 dog, 1 spiritual force) of the treck in a **professional "team" page format**:
- **Photos, names, unofficial (me-assigned) "titles"**, and **blurbs** for each member. This was the beginning of the end for the enormous amount of copy I would end up writing for this site!
- Structured to mirror employee/team pages found on modern company websites.

### 2. **The Loop**
This route offers a comprehensive overview of the Four Pass Loop hike:
- **Trail overview**: A quick overview of the trail, why anyone would want to trapse through the wilderness for several days to hike it, and aquiring the permits required to get out on it (legally) in the first place! Figured the 109 paragraphs I wrote in the trail log was a pretty big commit, so thought I'd toss in a little overview about what it's all even about.
- **Labeled map**: An interactive AllTrails map plots out the trail's route and marks key locations along it.
- **Itinerary Cards**: Modular daily itinerary components for each of the trip's days, complete with the start and end points and associated stats for each day (distance, elevation gain/loss, # passes summited).

### 3. **Trail Log**
An extensive and engaging account of the backpacking trip, split into **over 100 sections**:
- **Carousel-style image gallery**: Each section is paired with a corresponding image, presented in a unique photo carousel.
  - The photos are styled as if they were a stack of printed photos, transitioning as the user scrolls.
  - **Animations** using **Framer Motion** provide smooth, appealing visual transitions.
- **Trail Log Content**: 
  - 1 of 109 paragraphs that I wrote about the trek. Had initially planned on just writing a consise little summary of our time on the trail, but my brain (and the story) had other ideas!
- **Page Tracker / Navigation**: 
  - Tracks the current page with an editable number for quick and precise navigation  
  - Users can navigate also between sections using keyboard arrow keys or on-screen arrow buttons (`<` and `>`) bordering the page tracker.
- **Dynamic Day Stats**: 
  - Each day of the adventure is tracked with the day's itinerary card and a map of the route for the day with key points marked.

### 4. **Photo Gallery**
An expansive photo gallery showcasing over **400 high-resolution 35mm images** taken by me with my Fuji-XT4 during the trip:
- Images are **hosted on Cloudinary** and lazy-loaded for optimal performance.
- Displayed in a **Masonry grid**, similar to Pinterest, providing a visually appealing, seamless experience.
- **Blurred placeholders** are used while images load, ensuring a smooth user experience.
- Hover effects on the gallery images to show highlighted picture you can bring to full-screen with a click 
- On aforementioned *click*:
  - Brings photo up into full-screen mode for detailed viewing
  - Users can navigate using arrow keys or the on-screen navigation arrows.
  - A **photo strip** below the full-size image enables fast navigation between images.
  - Users can easily **save images** or **open them in a new tab** using the buttons found in the top right of the image.

### 5. **Global Navigation**
- A drop-down **hamburger navbar** in the top right allows seamless navigation across all routes in the application.

## Technologies Used
- **Next.js (v13.4)**: React-based framework the app was built with
- **TypeScript**: Typed JS version the app was written predominantly in.
- **Framer Motion**: Used for the trail log carousel transitions and text animations
- **Cloudinary**: Image hosting and optimization for the trail photos
- **Google Fonts**: For the site's typeface (utilized using next/font)
- **Daisy UI**: For the color scheme and consistent design.
- **Tailwind CSS**: Utilized as the primary styling tool for the site's format.
- **CSS**: Applied for font styling and specific component styling.
- **PapaParse**: Used to load the picture - trail log pairing csv file

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
   cd nextjs-fourpass-backpacking-log
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
- Explore each section to learn more about the trip, crew, and photos. Really not much more to it!

## Screenshots

- Include relevant screenshots of each route here, showcasing the user interface, animations, and features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.