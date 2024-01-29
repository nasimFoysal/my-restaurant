import "./Reviews.css";
import { Carousel } from "flowbite-react";

import criticimg1 from "../../assets/review-images/review-critic-1.jpg";
import criticimg2 from "../../assets/review-images/review-critic-2.jpg";
import userReviewImg1 from "../../assets/review-images/userReview1.webp"
// import criticimg3 from "../../assets/review-images/review-critic-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar }from '@fortawesome/free-solid-svg-icons';


const Reviews = () => {
  return (
    <div className="mt-4 mx-auto">
      <div className="text-center my-10 flex flex-col items-center justify-center border border-dashed  border-x-white border-y-[#13131833] py-7">
            <h2 className="font-great-vibes text-4xl md:text-6xl text-[#999966]">
              Critics
            </h2>
            <h2 className="text-3xl lg:text-4xl font-semibold md:font-bold ">
              Reviews
            </h2>
            <p className="w-11/12 lg:w-2/3  mt-5">Over the years, many renowned food critics have critiqued our restaurant, in terms of quality of food, cleanliness and hygiene, customer service, price, everall experience and a great many other things. Here are just a few among those.</p>
          </div>
      {/* critic review 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 bg-[#16191E] rounded-lg">
        <div className="lg:h-[450px] lg:w-[300px] rounded-lg ml-0">
          <img className="w-full h-full rounded-lg" src={criticimg1} alt="" />
        </div>
        <div className="lg:w-[60%] lg:h-[450px]  text-center space-y-4  text-white flex flex-col items-center justify-center px-4 pb-8">
          <div className="flex gap-1 text-2xl justify-center">
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold ">Lionel Messi</h3>
          <p className="text-gray-300 text-sm">
            a renowned chef, author, and television personality known for his
            fearless approach to insightful food critiques
          </p>
          <p>
            Enchanting ambiance, impeccable service, and exquisite flavors
            define this hidden gem. From succulent steaks to delicate pastries,
            every dish is a culinary masterpiece. Perfect for a romantic evening
            or a celebratory feast. A dining experience that delights all
            senses.
          </p>
        </div>
      </div>

      {/* critic review 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 bg-[#16191E] rounded-lg my-7">
        <div className="lg:w-[60%] lg:h-[450px]  text-center space-y-4  text-white flex flex-col items-center justify-center px-4 pb-8">
          <div className="flex gap-1 text-2xl justify-center">
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold ">Lionel Messi</h3>
          <p className="text-gray-300 text-sm">
            a renowned chef, author, and television personality known for his
            fearless approach to insightful food critiques
          </p>
          <p>
            Cozy bistro offering a fusion of flavors that ignite the palate.
            Each bite tells a story of culinary creativity, from tangy
            appetizers to decadent desserts. Attentive staff and charming
            atmosphere elevate the dining journey.
          </p>
        </div>

        <div className="lg:h-[450px] lg:w-[300px] rounded-lg mr-0">
          <img className="w-full h-full rounded-lg" src={criticimg2} alt="" />
        </div>
      </div>

      {/* critic review 3 */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 bg-[#16191E] rounded-lg">
        <div className="lg:h-[450px] lg:w-[300px] rounded-lg ml-0">
          <img className="w-full h-full rounded-lg" src={criticimg1} alt="" />
        </div>
        <div className="lg:w-[60%] lg:h-[450px]  text-center space-y-4  text-white flex flex-col items-center justify-center px-4 pb-8">
          <div className="flex gap-1 text-2xl justify-center">
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
            <p className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold ">Lionel Messi</h3>
          <p className="text-gray-300 text-sm">
            a renowned chef, author, and television personality known for his
            fearless approach to insightful food critiques
          </p>
          <p>
            Quaint café exuding warmth and charm, serving up artisanal delights
            with a side of hospitality. Savor freshly brewed coffee and
            indulgent pastries in a relaxed setting. A delightful spot for
            casual gatherings or solo retreats
          </p>
        </div>
      </div>


      <div className="text-center my-10 flex flex-col items-center justify-center border border-dashed  border-x-white border-y-[#13131833] py-7 mt-12">
            <h2 className="font-great-vibes text-4xl md:text-6xl text-[#999966]">
              User
            </h2>
            <h2 className="text-3xl lg:text-4xl font-semibold md:font-bold ">
              Testimonials
            </h2>
            <p className="w-11/12 lg:w-2/3 mt-5">We have had thousands of reviews accross our various social media platforms like facebook, twitter, instagram, tiktok etc from our beloved customers who we had the absolute pleasure to host. Here are just a few among them.</p>
          </div>
      {/* user review carousel */}
      <div className="h-64 sm:h-[70vh]">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div
            className={`flex h-full items-center justify-center relative review-bg-1 z-10`}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-[#0f0f137f] rounded-xl"></div>
            <div className="text-center w-[80%] space-y-2 lg:space-y-3 text-white z-20">
              <div className="w-12 h-12 md:h-24 md:w-24 border-4 border-white rounded-full">
              <img className="rounded-full" src={userReviewImg1} alt="" />
              </div>
              <p className="text-xl lg:text-2xl font-semibold lg:font-bold">Harry James Potter</p>
              <p className="text-sm lg:text-base leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, harum maiores, incidunt corrupti similique pariatur odit architecto dolore natus <span className="hidden md:inline">molestias fugiat beatae est ipsa exercitationem, quos error delectus labore reiciendis aperiam quia. Ex molestias ut debitis enim dignissimos ipsum fugiat.</span></p>
            </div>
          </div>

          <div
            className={`flex h-full items-center justify-center relative review-bg-2 z-10`}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-[#0f0f137f] rounded-xl"></div>
            <div className="text-center w-[80%] space-y-2 lg:space-y-3 text-white z-20">
              <div className="w-12 h-12 md:h-24 md:w-24 border-4 border-white rounded-full">
              <img className="rounded-full" src={userReviewImg1} alt="" />
              </div>
              <p className="text-xl lg:text-2xl font-semibold lg:font-bold">Harry James Potter</p>
              <p className="text-sm lg:text-base leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, harum maiores, incidunt corrupti similique pariatur odit architecto dolore natus <span className="hidden md:inline">molestias fugiat beatae est ipsa exercitationem, quos error delectus labore reiciendis aperiam quia. Ex molestias ut debitis enim dignissimos ipsum fugiat.</span></p>
            </div>
          </div>
          <div
            className={`flex h-full items-center justify-center relative review-bg-3 z-10`}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-[#0f0f137f] rounded-xl"></div>
            <div className="text-center w-[80%] space-y-2 lg:space-y-3 text-white z-20">
              <div className="w-12 h-12 md:h-24 md:w-24 border-4 border-white rounded-full">
              <img className="rounded-full" src={userReviewImg1} alt="" />
              </div>
              <p className="text-xl lg:text-2xl font-semibold lg:font-bold">Harry James Potter</p>
              <p className="text-sm lg:text-base leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, harum maiores, incidunt corrupti similique pariatur odit architecto dolore natus <span className="hidden md:inline">molestias fugiat beatae est ipsa exercitationem, quos error delectus labore reiciendis aperiam quia. Ex molestias ut debitis enim dignissimos ipsum fugiat.</span></p>
            </div>
          </div>
          <div
            className={`flex h-full items-center justify-center relative review-bg-4 z-10`}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-[#0f0f137f] rounded-xl"></div>
            <div className="text-center w-[80%] space-y-2 lg:space-y-3 text-white z-20">
              <div className="w-12 h-12 md:h-24 md:w-24 border-4 border-white rounded-full">
              <img className="rounded-full" src={userReviewImg1} alt="" />
              </div>
              <p className="text-xl lg:text-2xl font-semibold lg:font-bold">Harry James Potter</p>
              <p className="text-sm lg:text-base leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, harum maiores, incidunt corrupti similique pariatur odit architecto dolore natus <span className="hidden md:inline">molestias fugiat beatae est ipsa exercitationem, quos error delectus labore reiciendis aperiam quia. Ex molestias ut debitis enim dignissimos ipsum fugiat.</span></p>
            </div>
          </div>
          <div
            className={`flex h-full items-center justify-center relative review-bg-5 z-10`}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-[#0f0f137f] rounded-xl"></div>
            <div className="text-center w-[80%] space-y-2 lg:space-y-3 text-white z-20">
              <div className="w-12 h-12 md:h-24 md:w-24 border-4 border-white rounded-full">
              <img className="rounded-full" src={userReviewImg1} alt="" />
              </div>
              <p className="text-xl lg:text-2xl font-semibold lg:font-bold">Harry James Potter</p>
              <p className="text-sm lg:text-base leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, harum maiores, incidunt corrupti similique pariatur odit architecto dolore natus <span className="hidden md:inline">molestias fugiat beatae est ipsa exercitationem, quos error delectus labore reiciendis aperiam quia. Ex molestias ut debitis enim dignissimos ipsum fugiat.</span></p>
            </div>
          </div>

          
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
