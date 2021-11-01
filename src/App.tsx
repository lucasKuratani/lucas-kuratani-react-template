import React from 'react'
import './styles/reset.sass'

const App: React.FC = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#333',
      gap: '30px',
    }}
  >
    <div>
      <h1 style={{ fontSize: '20px' }}>
        <a
          style={{ textDecoration: 'underline', color: '#fff' }}
          target='_blank'
          href='https://github.com/lucasKuratani'
          rel='noreferrer'
        >
          Lucas Kuratani
        </a>
        <span style={{ color: '#fff' }}>&nbsp;React Template</span>
      </h1>
    </div>
  </div>
)

export default App
