import React from 'react';

const BookModal = ({ book, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 style={{fontSize:"38px"}}>{book.volumeInfo.title}</h2>
        <p><strong style={{color:"red"}}>Sayfa Sayısı:</strong> {book.volumeInfo.pageCount}</p>
        <p><strong style={{color:"red"}}>Yayınlanma Tarihi:</strong> {book.volumeInfo.publishedDate}</p>
        <p><strong style={{color:"red"}}>Açıklama:</strong> {book.volumeInfo.description || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default BookModal;