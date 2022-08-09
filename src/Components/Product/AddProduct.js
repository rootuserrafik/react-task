import './AddProduct.css';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { Button, Stack } from '@mui/material';


function AddProduct() {
  return (
    <div className='AddProduct'>
        <div className="title__Bar">
            <h3>Add Product</h3>
            <CloseIcon className='Close__Icon' />
        </div>
        <div className="Input__Fills">
            <div className='single__Input'>
                <label>Product name</label>
                <input type="text" placeholder='Enter your product name' />
            </div>
            <div className='single__Input sub'>
                <span className='single__Input'>
                    <label>Brand</label>
                    <input type="text" placeholder='Enter brand name' />
                </span>
                <span className='single__Input'>
                    <label>Ram/Rom</label>
                    <input type="text" placeholder='Enter ram/rom size' />
                </span>
            </div>
            <div className='single__Input'>
                <label>Tags</label>
                <input type="text" placeholder='Search and Select' />
            </div>
            <div className='single__Input'>
                <label>Price</label>
                <input type="text" placeholder='Enter your product price' />
            </div>
        </div>
        <div className="Action__Wrapper">
            <div className="Action__Bar">
                <Stack direction="row" spacing={2}>
                    <Button
                        className='btn__Action'
                        variant="outlined"
                        startIcon={<HighlightOffRoundedIcon />}
                        >
                        Cancel
                    </Button>
                    <Button
                        className='btn__Action'
                        variant="contained"
                        startIcon={<TaskAltRoundedIcon />}
                        >
                        Publish
                    </Button>
                </Stack>
            </div>
        </div>
    </div>
  )
}

export default AddProduct