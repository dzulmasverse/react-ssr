import { useParams } from 'react-router-dom'
import Metadata from './Metadata';

function Blog() {

  const { id } = useParams();

  return (
    <div>
      <Metadata
        title="Testing Blog title"
        description='Lorem ipsum dolor sit amet consectetur.'
      />
      Blog {id}
    </div>
  )
}

export default Blog
