import React from "react";
import PodCastImg from "./../assets/PodCastImg.jpg";

const PodcastFeature = () => {
  return (
    <section>
      <div className="color-ghostwhitebg">
        <div className="TheLatest d-flex  px-3">
          <div className="py-2 flex-grow-1">
            <h1>Podcasts</h1>
          </div>
          <div className="py-1 align-self-center see-all-btn">See all</div>
        </div>
        <div className="podcastCard">
          <a href="/">
            <a className="color-gray">
              <div className="d-flex  py-3 my-24 mb-0 border-none px-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1579 7.11417C19.1579 5.4185 17.1802 4.49219 15.8775 5.57773L10.6194 9.95948C10.26 10.259 9.80692 10.423 9.33905 10.423L6.49998 10.4231C5.11928 10.4231 4 11.5424 4 12.9231V18.0283C4 19.4091 5.11929 20.5283 6.5 20.5283H9.3391C9.80697 20.5283 10.26 20.6924 10.6195 20.9919L15.8775 25.3736C17.1802 26.4592 19.1579 25.5328 19.1579 23.8372V7.11417Z"
                    fill="#2B3F6C"
                    stroke="#2B3F6C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M22.9453 19.1315C23.7385 18.1132 24.2085 16.8475 24.2085 15.4759C24.2085 14.1043 23.7385 12.8386 22.9453 11.8203"
                    stroke="#2B3F6C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M25.4766 22.7865C27.0629 20.7499 28.0029 18.2185 28.0029 15.4753C28.0029 12.7321 27.0629 10.2006 25.4766 8.16406"
                    stroke="#2B3F6C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <div className="podcastCard__title ">
                  <h2>Rachman Review. Ukraine and the global south</h2>

                  <p>
                    Why did some countries refuse to condemn Russia’s invasion?
                  </p>
                </div>
              </div>
              <img src={PodCastImg} alt="PodCostImg" />
              <h4 className="py-3 px-3">15 May 2022· 20 min</h4>
            </a>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PodcastFeature;
