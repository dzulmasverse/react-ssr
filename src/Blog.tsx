// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import favicon from './assets/logo.png'

function Blog() {

  const { id } = useParams();
  const [hydrated, sethydrated] = useState<boolean>(false);

  useEffect(() => {
    sethydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div>
      <article>
        <title>Blog Title</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque adipisci voluptatibus inventore." />
      </article>
      Blog {id}
    </div>
  )
}

export default Blog
