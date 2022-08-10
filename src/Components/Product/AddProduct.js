import React, { useState } from 'react';
import './AddProduct.css';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Button, Stack } from '@mui/material';
import InputTags from './InputTags';
import TagList from './TagList';
import TagNames from './../../UserData.json';


function AddProduct({ open, onClose, searchTags }) {
    const [tagFilterData, setTagFilterData] = useState([]);
    const handelTagFilter = (e) => {
        const searchTagWord = e.target.value;
        const newTagFilter = TagNames.filter((value) => {
            return value.title.toLowerCase().includes(searchTagWord.toLowerCase());
        });
        if (searchTagWord === "") {
            setTagFilterData([]);
        } else {
            setTagFilterData(newTagFilter);
        }
    };
    if(!open) return null;
  return (
    <div className='Product__Wrapper'>
        <div className='AddProduct'>
            <div className="title__Bar">
                <h3>Add Product</h3>
                <CloseIcon 
                    onClick={onClose}
                    className='Close__Icon' 
                />
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
                    <div className='InputTags'>
                        <InputTags />
                        <input onChange={handelTagFilter} type="text" placeholder='Search and Select' />
                        {tagFilterData.length === 0 ? <KeyboardArrowDownOutlinedIcon className='KeyboardArrowDownOutlinedIcon'/> : <KeyboardArrowUpOutlinedIcon className='KeyboardArrowDownOutlinedIcon'/> }
                        {
                            tagFilterData.length !== 0 && (
                                <ul className="Tag__Result">
                                    {
                                        tagFilterData.slice(0, 5).map((value, key) => {
                                            return <TagList TagName={value.tags[0]} />;
                                        })
                                    }
                                </ul>
                            )
                        }
                    </div>
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
                            onClick={onClose}
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
    </div>
  )
}

export default AddProduct