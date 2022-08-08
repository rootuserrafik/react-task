import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

import './Header.css';

function Header() {

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
                <button className='Header__Button'>Add Product</button>
            </div>
        </div>
    </div>
  )
}

export default Header