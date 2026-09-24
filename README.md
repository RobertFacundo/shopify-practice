# Shopify Practice — Bijou

A custom Shopify storefront built from Shopify's Skeleton Theme to practice and demonstrate professional Shopify theme development.

This project was developed as a hands-on Shopify learning project, with a focus on theme architecture, ecommerce UX, Shopify APIs, responsive frontend development, and maintainable theme development.

> **Status:** ✅ Completed

---

## 🎯 Project Goals

The goal of this project was to build a complete Shopify storefront while following a workflow similar to a real-world Shopify development project.

The project focused on:

* Shopify theme architecture
* Liquid
* Sections and snippets
* JSON templates
* Shopify Theme Editor
* Shopify CLI
* Development stores
* Responsive design
* Ecommerce UX
* Product and collection data
* Product variants
* Shopify Cart API
* Section Rendering API
* Predictive Search
* Vanilla JavaScript
* GSAP animations
* IntersectionObserver
* Git/GitHub workflow
* Development and production theme workflow

---

## 🛠️ Tech Stack

### Shopify

* Shopify Themes
* Liquid
* Shopify CLI
* Shopify Theme Editor
* Shopify Cart API
* Section Rendering API
* Predictive Search

### Frontend

* HTML
* CSS
* JavaScript
* Liquid templating
* GSAP

### Development

* Git
* GitHub
* Shopify Development Store
* Shopify Theme Check
* Shopify Skeleton Theme

---

## 🏪 Storefront

Bijou is a fictional jewelry ecommerce storefront designed to practice the architecture and development patterns used in Shopify themes.

### Homepage

Implemented sections include:

* Header
* Navigation
* Hero
* Featured Products
* Categories
* Footer

The homepage uses Shopify sections, JSON templates, blocks, and Theme Editor settings to make content configurable through Shopify.

### Collection

Implemented functionality includes:

* Product grid
* Product cards
* Collection navigation
* Responsive layout

### Product

Implemented functionality includes:

* Product information
* Product image
* Price
* Variant selector
* Quantity selector
* Add to cart
* Dynamic cart count
* Cart drawer

### Cart

Implemented functionality includes:

* Cart page
* Cart drawer
* Add to cart
* Update quantity
* Remove items
* Dynamic cart count
* AJAX cart updates
* Section Rendering API

### Search

Implemented functionality includes:

* Predictive product search
* Debounced search requests
* Shopify Predictive Search
* Dynamic Liquid rendering
* Section Rendering
* Dynamic DOM updates
* Click-outside behavior

### Animations

The project explores two different animation approaches:

**Hero**

* GSAP
* CDN integration
* JavaScript-controlled animation sequences

**Featured Products / Categories**

* IntersectionObserver API
* Vanilla JavaScript
* CSS transitions
* CSS transforms
* State-based animation classes

This provided practical experience with both third-party animation libraries and native browser APIs.

---

## 📁 Theme Architecture

The project follows Shopify's theme architecture:

```text
.
├── assets/
├── blocks/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
└── templates/
```

The main architectural relationship explored throughout the project was:

```text
layout
   ↓
templates
   ↓
sections
   ↓
blocks / snippets
   ↓
Liquid + HTML + CSS + JavaScript
```

The project also explored the difference between:

* Sections — Shopify-renderable and configurable components
* Snippets — reusable Liquid markup
* Templates — page-level structure and configuration
* Assets — CSS and JavaScript
* JSON templates — section composition and Theme Editor configuration

---

## 🔌 APIs & Shopify Features

The project implemented and explored several Shopify APIs and platform features.

### Cart API

Used for:

* Adding products to the cart
* Updating quantities
* Removing products
* Retrieving cart data

### Section Rendering API

Used to dynamically re-render storefront sections after cart interactions and other AJAX operations.

The project specifically explored how returned HTML can be parsed and inserted into the existing DOM without requiring a full page reload.

### Predictive Search

Implemented using Shopify's Predictive Search endpoint together with Liquid rendering and Section Rendering.

The flow is:

```text
JavaScript
    ↓
Shopify Predictive Search
    ↓
Liquid
    ↓
Rendered HTML
    ↓
JavaScript
    ↓
DOM
```

### Browser APIs

The project also explored the browser's native `IntersectionObserver` API to trigger animations when sections enter the viewport.

---

## 🌿 Git & Development Workflow

The project followed a feature-based Git workflow inspired by professional development environments.

```text
Feature Branch
      ↓
Local Development
      ↓
Shopify Development Theme
      ↓
Testing
      ↓
Pull Request
      ↓
Merge into main
      ↓
Development Theme
      ↓
Final Verification
      ↓
Live Theme
```

Feature branches were used for individual pieces of functionality, with changes reviewed and merged through GitHub before being deployed to the production theme.

---

## 📚 Learning Focus

The main purpose of this project was not simply to create a working storefront.

It was to understand how the different parts of Shopify theme development interact:

* Shopify
* Liquid
* Sections
* Snippets
* JSON templates
* Theme Editor
* JavaScript
* DOM manipulation
* Shopify APIs
* Section Rendering
* Browser APIs
* Third-party libraries
* Git/GitHub
* Development and production workflows

Particular attention was given to understanding **when and why** a particular approach should be used instead of simply making the feature work.

---

## ✅ Project Roadmap

### Phase 1 — Setup

* [x] Create Shopify Development Store
* [x] Initialize Skeleton Theme
* [x] Initialize Git repository
* [x] Create GitHub repository
* [x] Configure `main` branch
* [x] Connect local theme to Development Store

### Phase 2 — Theme Architecture

* [x] Explore `theme.liquid`
* [x] Understand templates
* [x] Understand sections
* [x] Understand snippets
* [x] Understand blocks
* [x] Configure theme settings

### Phase 3 — Global UI

* [x] Header
* [x] Navigation
* [x] Responsive behavior
* [x] Global styles
* [x] Cart access

### Phase 4 — Homepage

* [x] Hero section
* [x] Featured Products
* [x] Product cards
* [x] Categories
* [x] Responsive homepage layout
* [x] GSAP animations
* [x] IntersectionObserver animations

### Phase 5 — Collection

* [x] Product grid
* [x] Product cards
* [x] Responsive collection layout

### Phase 6 — Product

* [x] Product information
* [x] Product image
* [x] Variant selector
* [x] Quantity selector
* [x] Add to cart
* [x] Cart feedback

### Phase 7 — Cart

* [x] Cart page
* [x] Cart drawer
* [x] Add item
* [x] Update quantity
* [x] Remove item
* [x] Cart count
* [x] AJAX cart updates
* [x] Section Rendering API

### Phase 8 — Search

* [x] Predictive Search
* [x] Debouncing
* [x] Dynamic search results
* [x] Liquid-rendered results
* [x] Section Rendering
* [x] Dynamic DOM updates

### Phase 9 — Production Workflow

* [x] Feature branches
* [x] GitHub Pull Requests
* [x] Merge workflow
* [x] Development Theme testing
* [x] Production Theme deployment
* [x] Final storefront verification

---

## 📌 Project Philosophy

The project was developed as a guided professional practice rather than a tutorial.

For each feature, the development process followed:

```text
Requirement
    ↓
Architecture / approach
    ↓
Implementation
    ↓
Debugging
    ↓
Testing
    ↓
Optimization
    ↓
Documentation
```

When Shopify provided a native solution, it was generally preferred over recreating the same functionality with unnecessary JavaScript.

The objective was to understand not only **how** to implement Shopify features, but also **when and why** to use each approach.

---

## 🌐 Storefront

**Live Storefront:**
https://jewelry-commerce-m3gtpdnw.myshopify.com/

**Password:** `rob`

---

## 👨‍💻 About

Built by **Facundo Robert**, Frontend Developer from Argentina.

Primary frontend technologies:

* React
* Next.js
* TypeScript
* JavaScript
* HTML
* CSS
* Tailwind CSS

This project represents a focused exploration of Shopify theme development and ecommerce frontend engineering.

The next practice project will focus on Shopify concepts that were not explored in Bijou, with the goal of continuing to expand practical knowledge of the Shopify ecosystem.

