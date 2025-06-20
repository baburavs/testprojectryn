import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText(/I AM A/)).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText(/Expertise/)).toBeInTheDocument()
    expect(screen.getByText(/Works/)).toBeInTheDocument()
    expect(screen.getByText(/Experience/)).toBeInTheDocument()
    expect(screen.getByText(/Blog/)).toBeInTheDocument()
  })
})
