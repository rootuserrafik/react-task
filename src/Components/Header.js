import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import './Header.css';
import AddProduct from './Product/AddProduct';

function Header() {
    const [openModel, setOpenModel] = useState(false);

  return (
    <div className="App__Header">
        <div className="Wrapper">
            <div className="Header__Left">
                <span className="App_Logo">Logo</span>
            </div>
            <div className="Header__Right">
                <div className="Search__Box">
                    <input type="text" placeholder='Search by Title or Brand' />
                    <SearchIcon className='SearchIcon' sx={{ color: grey[100] }} />
                </div>
                <button
                    onClick={() => setOpenModel(true)}
                    className='Header__Button'
                >Add Product</button>
                <AddProduct
                    open={openModel}
                    onClose={() => setOpenModel(false)}
                />
            </div>
        </div>
    </div>
  )
}

export default Header