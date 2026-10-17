import React from 'react'
import './preview-card.css'
import equilibriumImg from '../assets/image-equilibrium.jpg'
import avatarImg from '../assets/image-avatar.jpg'

export const PreviewCard: React.FC = () => {
  return (
    <>
      <main className="card">
        {/* Product image with hover overlay */}
        <div className="card__images">
          <img src={equilibriumImg} alt="Equilibrium #3429 NFT" />
          <div className="card__images-layer">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="24" fill="transparent" />
              <path
                d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15s18.54-6.22 22-15C42.54 15.22 34 9 24 9zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Title & description */}
        <div className="card__title">
          <h1>Equilibrium #3429</h1>
          <p id="info">Our Equilibrium collection promotes balance and calm.</p>
        </div>

        {/* Price & time info */}
        <div className="card__time">
          <div className="card__time-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <span>0.041 ETH</span>
          </div>
          <div className="card__time-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm0 12a5.333 5.333 0 1 1 0-10.667 5.333 5.333 0 0 1 0 10.667Zm.667-8.667h-1.333v4l3.533 2.12.667-1.094-2.867-1.7V5.34Z"
                fill="#8BACD9"
              />
            </svg>
            <span>3 days left</span>
          </div>
        </div>

        {/* Creator info */}
        <div className="card__creator">
          <img src={avatarImg} alt="Creator avatar" />
          <p>Creation of <span>Ketan Makode</span></p>
        </div>

      </main>
      {/* Attribution */}
      <footer className="attribution">
        Challenge by{' '}
        <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">
          Crio.Do
        </a>
        . Coded by{' '}
        <a href="https://www.github.com/Sankalp170212" target="_blank" rel="noopener noreferrer">
          Ketan Makode
        </a>
        .
      </footer>
    </>
  )
}
