import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full mt-12 rounded">
      <div id="slide1" className="carousel-item relative md:h-[450px] w-full">
        <img
          src={
            "https://www.learningresources.co.uk/media/catalog/category/Category-Header_Age_5yr.jpg"
          }
          className="w-full rounded"
        />

        <div className="absolute h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white ms-16 md:mt-24 mt-4">
            <h1 className="font-bold md:text-6xl text-2xl text-yellow-500">
              FINDUS TOYS
            </h1>
            <p className="my-4 font-semibold">
              Findus Toys are One of the Best Toys It's Provide kid's Toys.
              <br />
              Kid's Toys Help for express kid's knoledge
            </p>
            <button className="btn mt-8 transition hover:bg-yellow-500">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative md:h-[450px] w-full">
        <img
          src={
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_12/1549418/educational-toys-kids-coronavirus-code-botzee-today-main1-200317.jpg"
          }
          className="w-full rounded"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative md:h-[450px] w-full">
        <img
          src={
            "https://assets.weforum.org/article/image/large_pRuRk-w2CWEPcIkp4PnEem8-qfuF_1XEizUk0x6JWAY.jpg"
          }
          className="w-full rounded"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative md:h-[450px] w-full">
        <img
          src={"https://i.ytimg.com/vi/pDAl3jI3xvs/maxresdefault.jpg"}
          className="w-full rounded"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
