import React from 'react'

const Works = () => {
  const projects = [
    {
      title: 'Analysis Application',
      description: 'Modern dashboard application for data analysis with interactive charts and real-time updates.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'D3.js', 'Node.js']
    },
    {
      title: 'Forknox Application',
      description: 'E-commerce platform with advanced filtering and seamless checkout experience.',
      image: '/api/placeholder/400/300',
      tags: ['Vue.js', 'Express', 'MongoDB']
    },
    {
      title: 'Zenocide Application',
      description: 'Mobile-first web application with progressive web app capabilities.',
      image: '/api/placeholder/400/300',
      tags: ['React Native', 'Firebase', 'PWA']
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>🔥 Works</h2>
          <a href="#" className="text-gray" style={{ textDecoration: 'none', background:"white" }}>View All</a>
        </div>
        
        <div className="grid" style={{ gap: '3rem' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ 
              display: 'grid', 
              gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
              gap: '2rem',
              alignItems: 'center',
              background: '#1a1a1a',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid #333'
            }}>
              <div style={{ 
                background: '#333', 
                borderRadius: '8px', 
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
              }}>
                Project Image
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {project.title}
                </h3>
                <p className="text-gray mb-4">{project.description}</p>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, tagIndex) => (
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
                
                <a href="#" className="btn btn-secondary">
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
