# Fiverr Clone Frontend

A modern React-based frontend for a Fiverr-like freelance marketplace. This project uses Vite for fast development and SCSS for styling. It is designed to be visually appealing, responsive, and easy to extend.

## Features

- Home page with hero section, search, and trusted brands
- Gig listing and details pages
- User authentication (login/register)
- Order management
- Messaging between users
- Add new gigs
- Checkout and payment flow
- Responsive design

## Technologies Used

- React
- Vite
- React Router
- SCSS

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```powershell
   git clone <your-repo-url>
   cd fiverr-clone/client
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```
3. **Start the development server:**
   ```powershell
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

### Environment Variables

You can configure environment variables in the `.env` file. Example:

```
VITE_API_URL=http://localhost:5000/api
```

## Project Structure

```
client/
├── public/
│   └── img/           # Static images
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── reducers/      # State management
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── data.js        # Sample data
├── index.html         # Main HTML file
├── package.json       # Project metadata and scripts
├── vite.config.js     # Vite configuration
└── .env               # Environment variables
```

## Usage

- **Browse gigs:** Use the search bar or categories on the home page.
- **View gig details:** Click on any gig card to see more info and reviews.
- **Register/Login:** Create an account or log in to access more features.
- **Add a gig:** Go to the "Add" page to post a new service.
- **Order a gig:** Click "Order" on a gig page and follow the checkout flow.
- **Messaging:** Communicate with sellers/buyers via the messaging system.

## Customization

- **Styling:** Modify SCSS files in `src/components` and `src/pages` for custom styles.
- **API Integration:** Update API endpoints in `utils/newRequest.js` and `.env` as needed.
- **Assets:** Add or replace images in `public/img`.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Inspired by Fiverr.com
- Built with React, Vite, and SCSS
