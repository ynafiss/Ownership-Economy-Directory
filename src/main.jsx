import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { fetchCompanies } from './services/api';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CompanyCard from './components/CompanyCard.jsx';
import CompanyDetail from './components/CompanyDetails.js';
import NotFound from './components/NotFound.jsx';


const companyLoader = async ({params}) => {
  const companiesData = await fetchCompanies();
  const company = companiesData.find(c => 
    c.name === params.companyName || 
    c.website.replace(/^https?:\/\//, '').replace(/\/$/, '') === params.companyId
  );
  
  if (!company) {
    throw new Response("Company Not Found", { status: 404 });
  }
  
  return { company };
};



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path : '/:companyName',
    element: <CompanyDetail />,
    loader: companyLoader,
    errorElement: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
