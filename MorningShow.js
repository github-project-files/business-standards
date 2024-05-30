import React from 'react'
import MorningShowImg from './../assets/MorningShowImg.jpg'

const MorningShow = () => {
  return (
<section>
    <div className='MorningShow'>
            <div className='small py-2'>The Morning show</div>
            <div className='title d-flex align-items-center'>
                <h1>TMS Ep170: Ambuja and ACC, Sonam Wangchuk, IPO size, USFDA’s Form 483</h1>
                <img src={MorningShowImg} alt='Morning Show' style={{width:'120px', height:'60px'}} />
            </div>
            <div className='text-muted'>
                15 May 2022 | 11:30 AM IST
            </div>
    </div>
</section>
  )
}

export default MorningShow