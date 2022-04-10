import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Products from "./Products";
import Users from './Users';
import Form from './Form';
import ProductForm from './ProductForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar/>
          <div class="container-fluid">
            
          <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/form" element={<Form />} />
                <Route path="/create-product" element={<ProductForm />} />
              </Routes>
            
          </div>

        </div>
        </div>


    </div>
    </BrowserRouter>
  )
}
export default App;