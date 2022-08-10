import './InputTags.css';
import CloseIcon from '@mui/icons-material/Close';

function InputTags({tagName, removeTagItem, index}) {
  return (
    <span className="add__Tags" key={index}>
        {tagName}
        <CloseIcon onClick={removeTagItem} className='TagClose__Icon' />
    </span>
  )
}

export default InputTags