# Ownership Economy Directory

An interactive directory of organizations within the Ownership Economy, including cooperatives, DAOs, crypto companies, employee-owned businesses, and more. This project provides a searchable interface to explore these organizations based on various attributes.

## 🚀 Overview

This directory serves as a comprehensive resource for discovering and learning about organizations operating within the Ownership Economy. The application allows users to search and filter organizations based on multiple criteria, including organization type, ownership structure, industry classification, and geographic scope.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend/Database**: Airtable
- **Deployment**: Vercel

## ✨ Features

- **Search functionality**: Find organizations by name
- **Advanced filtering**: Filter organizations by:
  - Organization type (cooperative, DAO, employee-owned, etc.)
  - Ownership structure
  - Industry (using NACE codes)
  - Geographic scope
  - Governance model
- **Responsive design**: Works on desktop and mobile devices
- **Fast performance**: Optimized loading and rendering

## 🔧 Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Airtable account

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_AIRTABLE_API_KEY=your_airtable_api_key
REACT_APP_AIRTABLE_BASE_ID=your_airtable_base_id
REACT_APP_AIRTABLE_TABLE_NAME=your_table_name
```

> **Note**: When deploying to Vercel, add these environment variables in the Vercel project settings.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ownership-economy-directory.git
   cd ownership-economy-directory
   ```
npm install react@latest react-dom@latest
2. Install dependencies:
   ```
   npm install react@latest react-dom@latest react-scripts@latest react-router-dom @heroicons/react
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser

## 📊 Data Schema

The directory uses the following core schema attributes:

- Organization Name
- Description
- Type of Organization (Cooperative, DAO, Employee-Owned, etc.)
- Industry (NACE Rev. 2 Classification)
- Ownership Structure
- Legal Structure
- Geographic Scope
- Size
- Governance Model
- And more...

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Push your repository to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel project settings
4. Deploy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔍 Data Sources

The directory data was initially populated using information from several resources focused on the Ownership Economy, including cooperatives, DAOs, and employee-owned businesses directories.
