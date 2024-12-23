import React, { useContext } from 'react';
import './Modal.css';
import { X } from 'lucide-react';

const Modal = ({ image, onClose, onNext, onPrev }) => {

  return (
    <div className="modal-overlay">
      
        <div className="modal-content">
          <div className="image-container">
            <img src={image.Image} alt={`Image ${image.id}`} className="modal-image" />
            
            <button className="nav-button prev" onClick={onPrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="nav-button next" onClick={onNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="content-section">
            <button className="close-button" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-text">
              <h2 className="titleModal">{image.name}</h2>
              <h3 className="subtitleModal">{image.price}</h3>
              <div className="placeholder-lines">
              <p className="descriptionModal">{image.description}</p>
              </div>
              
                <a 
                  href="#"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-button"
                >
                  Beli
                </a>
              
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Modal;
