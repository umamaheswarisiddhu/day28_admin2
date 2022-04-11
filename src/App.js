import "./App.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Topbar from "./Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Form from "./Form";
import ProductForm from "./ProductForm";

function App() {

  return (
    // tag to use route
    <BrowserRouter>
      <div id="wrapper">
        {/* merging sidebar component */}
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* merging topbar component */}
            <Topbar />
            <div className="container-fluid">
              <Routes>
              {/* merging dashboard,users,product,form,productform components using route */}
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
  );
}

export default App;
