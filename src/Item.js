import {MdOutlineDelete} from 'react-icons/md'
import {TiEdit} from 'react-icons/ti'

export default function Item({id, item, handleEdit, handleDelete}) {

  return (
   <article className='item'>
     <p>{item} </p>
     <div className="icons">
        <TiEdit 
         className='icon edit'
          onClick={()=>handleEdit(id)}
         />
        <MdOutlineDelete 
          className='icon del'
         onClick={()=>handleDelete(id)}
        />
     </div>
   </article>
  );
}