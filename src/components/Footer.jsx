import React from 'react'

const Footer = () => {
  return (
    <footer style={{ 
      background: '#010208', 
      padding: '4rem 0 2rem',
      borderTop: '1px solid #333'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <span>UXW</span>
            <span>FIGMA</span>
            <span>DESIGNER</span>
            <span>DEVELOPER</span>
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(2rem, 6vw, 4rem)', 
            fontWeight: '900', 
            marginBottom: '2rem'
          }}>
            LET'S TALK!
          </h2>
          
          <p className="text-gray mb-6">
          rehanurraihan@gmail.com
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="#" className="text-gray" style={{ textDecoration: 'none' }}>Dribbble</a>
            <a href="#" className="text-gray" style={{ textDecoration: 'none' }}>Behance</a>
            <a href="#" className="text-gray" style={{ textDecoration: 'none' }}>Instagram</a>
            <a href="#" className="text-gray" style={{ textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
        
       
      </div>
    </footer>
  )
}

export default Footer
