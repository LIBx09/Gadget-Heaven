# GadgetHaven - An E-Commerce Platform

Live Website Link :

https://app.netlify.com/sites/magenta-squirrel-3cf852/overview

# Project Overview

GadgetHaven is a responsive e-commerce platform where users can browse, filter, and purchase gadgets. Key features include:

. Shopping cart and wishlist management using Context API and LocalStorage.

. Product filtering by categories with dynamic layouts.

. Individual product detail pages with actionable buttons.

. User-friendly design adhering to a detailed Figma prototype.

. Smooth navigation and error handling.

### Features

# Core Features

1.  Responsive Navbar:

. Menu items: Logo, Brand Name, Dashboard, Stats.

. Active route indication.

2.  Home Page:

    . Attractive banner with a button to navigate to the Dashboard page.

    . Sidebar for gadget categories (computers, phones, smartwatches, chargers, power banks).

    . Product cards displayed in a grid layout (6-9 cards).

3.  Details Page:

    . Displays full product details (image, price, description, specifications, etc.).

    . Add to Cart and Wishlist buttons with disabled state after clicking.

4.  Dashboard Page:

    . Two tabs: Cart and Wishlist.

    . Displays total price of cart items.

    . Sort by Price functionality for cart items.

5.  Miscellaneous:

    . Reloading does not show errors or a 404 page.

    . Dedicated 404 page for invalid routes.

    . Toast notifications for cart and wishlist actions.

# Challenge Features

1.  Dynamic Background Color:

    . Home page and other pages have different background colors implemented using useLocation.

2.  Purchase Modal:

    . Confirms purchase with a modal.

    . Empties the cart without reloading.

    . Disabled purchase button if the cart is empty.

    . Redirects to the home page using useNavigate.

3.  Dynamic Titles:

    . Dynamic page titles implemented with react-helmet.

4.  Favicon:

    . Custom favicon added to the site.

### React Fundamentals Used

1.  Components: Reusable functional components.

2.  React Router: Dynamic routing with nested layouts and a 404 page.

3.  Hooks:

    . useState for managing component state.

    . useEffect for side effects.

    . useContext for global state management.

    . useLocation for dynamic background handling.

    . useNavigate for navigation.

4.  Conditional Rendering: Dynamic button states and modals.

5.  Props: Passing data between components.
