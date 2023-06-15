import React, { useEffect } from 'react'

const GoogleADS = (props) => {
  const { dataAdSlot } = props

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.log(e)
    }
  }, [])
  return (
    <ins
      class='adsbygoogle'
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout='in-article'
      data-ad-format='fluid'
      data-ad-client='ca-pub-6427962014782182'
      data-ad-slot={dataAdSlot}
    ></ins>
  )
}

export default GoogleADS
