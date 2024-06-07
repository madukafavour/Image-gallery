import './index.css';
import React, { useEffect, useState } from 'react';
import SearchBar from './search';
import ImageCard from './imagecard';
import Loading from './loading';

function App() {
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXA_KEY}&q=${term}&category=fashion&page=${page}`);
        const data = await response.json();
        setImages(data.hits);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [term, page]);

  return (
    <div className="container">
      <SearchBar setTerm={setTerm} />
      <div className='image-container'>
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => <Loading key={index} />)
          : images.map((image, index) => <ImageCard key={index} image={image} />)}
      </div>
      <div className='button-container'>
        <button onClick={handlePreviousPage} className='prevbutton'>Previous &#8592;</button>
        <button onClick={handleNextPage} className='nextbutton'>Next &#8594;</button>
      </div>
    </div>
  );
}

export default App;
