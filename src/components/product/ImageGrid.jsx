import React, { useState, useContext } from 'react';
import './imageGrid-styles.css';
import Modal from './Modal';
import Products from '../../Produtcs';

const ImageGrid = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['ALL', 'MAKANAN', 'MINUMAN'];

  const filteredProjects = Products.filter(product => {
    if (!product) return false;
    const matchesCategory = activeFilter === 'ALL' ? true : product.type === activeFilter;
    
    const matchesSearch = !searchQuery || (
      product.name && 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (product) => {
    setSelectedImage(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const currentIndex = filteredProjects.findIndex(product => product.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedImage(filteredProjects[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = filteredProjects.findIndex(product => product.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedImage(filteredProjects[prevIndex]);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="portfolio-container" style={{ marginTop: '100px' }}>
      <div className="search-and-filter">
        <div className="search-container mb-3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <nav className="filter-nav">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-button ${activeFilter === filter ? 'active' : ''} `}
            >
              {filter}
            </button>
          ))}
        </nav>
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          No products found matching your search.
        </div>
      )}

      <div className="product-grid">
        {filteredProjects.map((product) => (
          product && (  
            <div 
              key={product.id} 
              className="product-item" 
              onClick={() => handleImageClick(product)}
            >
              <img
                src={product.Image}
                alt={product.name || 'Product image'}  
                className="product-image"
              />
            </div>
          )
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <Modal
          image={selectedImage}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
};

export default ImageGrid;