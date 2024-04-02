import React from 'react'
import '../stylesheets/MisionVision.css'

const MisionVision = () => {
  return (
    <div className='container'>
      <div className='container-mision-vision'>
        <div className='container-mision'>
            <h1 className='tittle-mision'>MISION</h1>
            <p className='txt-mision'>Ofrecer soluciones efectivas y sobresalientes, asumiendo las necesidades de los clientes como nuestras</p>
        </div>
        <div className='container-vision'>
          <h1 className='tittle-vision'>VISION</h1>
          <p className='txt-vision'>Posicionar a Soluciones SPIN como la empresa líder ofreciendo la mejor oferta comercial del mercado</p>
        </div>
      </div>
    </div>
  )
}

export default MisionVision