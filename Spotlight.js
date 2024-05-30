import React from 'react'
import TitleBar from '../Titlebar';
import SpotLightCard from './SpotLightCard';

const Spotlight = () => {
  return (
    <div className="latestNewsSection spotLightSection pb-4">
      <div className="container-fluid">
        <div className="row">
          <TitleBar title="Spotlight"></TitleBar>
          <div className="d-flex flex-nowrap slider-row">
            <div className="latestNewsLeft">
              <div className="latestNewsMiddle pt-4">
                <SpotLightCard title="The India Fix: How did a democracy like India rack up the highest Covid lorem ipsum"></SpotLightCard>
              </div>
            </div>
            <div className="latestNewsLeft">
              <div className="latestNewsMiddle pt-4">
                <SpotLightCard title="The India Fix: How did a democracy like India rack up the highest Covid lorem ipsum"></SpotLightCard>
              </div>
            </div>
            <div className="latestNewsLeft">
              <div className="latestNewsMiddle pt-4">
                <SpotLightCard title="The India Fix: How did a democracy like India rack up the highest Covid lorem ipsum"></SpotLightCard>
              </div>
            </div>
            <div className="latestNewsLeft">
              <div className="latestNewsMiddle pt-4">
                <SpotLightCard title="The India Fix: How did a democracy like India rack up the highest Covid lorem ipsum"></SpotLightCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Spotlight