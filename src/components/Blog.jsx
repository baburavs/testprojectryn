import React from 'react'

const Blog = () => {
  const posts = [
    {
      title: 'How UX works in web',
      tags: ['UX', 'Web'],
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Case study - Analysis Application',
      tags: ['Design', 'Case Study'],
      image: '/api/placeholder/300/200'
    },
    {
      title: '5 ways to develop your skill',
      tags: ['Development', 'Tips'],
      image: '/api/placeholder/300/200'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>🔥 Blog</h2>
          <a href="#" className="text-gray" style={{ textDecoration: 'none' }}>View All</a>
        </div>
        
        <div className="grid grid-3">
          {posts.map((post, index) => (
            <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ 
                background: '#333', 
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
              }}>
                Blog Image
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {post.title}
                </h3>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={{
                      background: '#333',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      color: '#ccc'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                  Read
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
