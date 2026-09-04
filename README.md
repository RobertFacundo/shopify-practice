# Shopify Practice — Jewelry Commerce

A custom Shopify storefront built from Shopify's Skeleton Theme to practice and demonstrate professional Shopify theme development.

This project is being developed as a hands-on Shopify learning project, with a focus on theme architecture, ecommerce UX, Shopify APIs, performance, accessibility, and maintainable frontend development.

> **Status:** 🚧 In development

---

## 🎯 Project Goals

The goal of this project is to build a small but complete Shopify storefront while following a workflow similar to a real-world Shopify development project.

The project will explore:

* Shopify theme architecture
* Liquid
* Sections and snippets
* JSON templates
* Shopify Theme Editor
* Shopify CLI
* Development stores
* Responsive design
* Ecommerce UX
* Shopify product and collection data
* Product variants
* Search and filtering
* Shopify Cart API
* Section Rendering API
* Shopify Storefront API / GraphQL
* Metafields and metaobjects
* Third-party integrations
* Performance
* Accessibility
* SEO
* Git/GitHub workflow

---

## 🛠️ Tech Stack

### Shopify

* Shopify Themes
* Liquid
* Shopify CLI
* Shopify Theme Editor
* Shopify Cart API
* Section Rendering API
* Storefront API
* GraphQL
* Metafields
* Metaobjects

### Frontend

* HTML
* CSS
* JavaScript
* Liquid templating

### Development

* Git
* GitHub
* Shopify Development Store
* Shopify Theme Check

---

## 🏗️ Planned Storefront

The storefront will be built around a fictional jewelry ecommerce store.

### Homepage

Planned sections include:

* Announcement bar
* Header
* Navigation
* Hero
* Featured collection
* Product cards
* Categories
* Promotional banner
* Editorial/content section
* Footer

The homepage will use Shopify sections and schema settings where appropriate so that content can be configured through the Theme Editor.

### Collection

Planned functionality:

* Product grid
* Product cards
* Filtering
* Sorting
* Pagination
* Responsive layout
* Empty states
* Variant handling

### Product

Planned functionality:

* Product gallery
* Product information
* Price
* Variant selector
* Quantity selector
* Add to cart
* Loading states
* Error handling
* Success feedback

### Cart

Planned functionality:

* Cart drawer
* Add to cart
* Update quantity
* Remove items
* Cart count
* Dynamic cart updates
* Section Rendering API

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

Some of the main concepts explored throughout the project will include:

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

The architecture will evolve as the project grows.

---

## 🔌 APIs & Integrations

APIs and third-party services will only be introduced when they provide a meaningful use case for the storefront.

Potential areas of exploration include:

* Shopify Cart API
* Section Rendering API
* Storefront API
* Shopify GraphQL
* Product recommendations
* Search
* Reviews
* External ecommerce services

The goal is not to artificially add technologies, but to understand when and why each approach is appropriate.

---

## 📚 Learning Focus

This project is primarily focused on understanding how Shopify development works in a professional environment.

Particular attention will be given to:

* Theme architecture
* Liquid
* Sections vs snippets
* Theme Editor customization
* Shopify data models
* Product variants
* Collections
* Shopify filtering
* AJAX interactions
* Cart architecture
* API usage
* Metafields and metaobjects
* Performance
* Accessibility
* Ecommerce best practices

---

## 🚧 Project Roadmap

### Phase 1 — Setup

* [x] Create Shopify Development Store
* [x] Initialize Skeleton Theme
* [x] Initialize Git repository
* [x] Create GitHub repository
* [x] Configure `main` branch
* [ ] Connect local theme to Development Store

### Phase 2 — Theme Architecture

* [ ] Explore `theme.liquid`
* [ ] Understand templates
* [ ] Understand sections
* [ ] Understand snippets
* [ ] Understand blocks
* [ ] Configure global theme settings

### Phase 3 — Global UI

* [ ] Announcement bar
* [ ] Header
* [ ] Navigation
* [ ] Mobile navigation
* [ ] Footer
* [ ] Global styles
* [ ] Responsive behavior

### Phase 4 — Homepage

* [ ] Hero section
* [ ] Featured collection
* [ ] Product cards
* [ ] Category section
* [ ] Promotional banner
* [ ] Editorial section

### Phase 5 — Collection

* [ ] Product grid
* [ ] Filtering
* [ ] Sorting
* [ ] Pagination
* [ ] Empty states
* [ ] Responsive collection layout

### Phase 6 — Product

* [ ] Product gallery
* [ ] Variant selector
* [ ] Quantity selector
* [ ] Add to cart
* [ ] Loading/error states

### Phase 7 — Cart

* [ ] Cart drawer
* [ ] Add item
* [ ] Update quantity
* [ ] Remove item
* [ ] Cart count
* [ ] Section Rendering API

### Phase 8 — Advanced Shopify

* [ ] Search
* [ ] Product recommendations
* [ ] Metafields
* [ ] Metaobjects
* [ ] Storefront API
* [ ] GraphQL
* [ ] Third-party integration

### Phase 9 — Production Quality

* [ ] Accessibility audit
* [ ] Performance optimization
* [ ] SEO
* [ ] Theme Check
* [ ] Responsive testing
* [ ] Error handling
* [ ] Final UX polish

---

## 📌 Project Philosophy

The project is being developed as a guided professional practice rather than a tutorial.

For each feature, the development process will focus on:

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

When Shopify provides a native solution, it will generally be preferred over recreating the same functionality with unnecessary JavaScript.

The objective is to understand not only **how** to implement Shopify features, but also **when and why** to use each approach.

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

This project represents a focused exploration of Shopify development and ecommerce frontend engineering.
