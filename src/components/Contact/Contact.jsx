import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationDot,
  
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <section className="my-10 lg:my-24">
        <div className="border border-dashed  border-x-white border-y-[#13131833] py-6 lg:py-8 mb-6 lg:mb-12">
          <div className="text-center mx-auto w-11/12 lg:w-1/2 ">
            <h2 className="text-[22px] lg:text-3xl font-extrabold text-[#131318]">
              Get In Touch
            </h2>
            <p className="text-[#13131899] font-medium mt-6 text-sm lg:text-base">
              Please feel free to call our phone or send us an email if you have
              any enquiries, feedback or just wanna say hi..
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left side */}
          <div className="lg:col-span-1 p-6 lg:p-8 rounded-2xl border border-[#13131819] space-y-4 lg:space-y-6">
            <div className="px-6 lg:px-8 pb-6 lg:pb-12 pt-6 lg:pt-8 bg-[#629cf319] rounded-2xl">
              <div className="text-center text-3xl">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
              <p className="text-[#13131866] mt-6">Phone Number : </p>
              <p className="text-[#131318] font-extrabold text-[17px]">
                (+62) 123-321-543
              </p>
            </div>
            <div className="px-6 lg:px-8 pb-6 lg:pb-12 pt-6 lg:pt-8 bg-[#629cf319] rounded-2xl">
              <div className="text-center text-3xl">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p className="text-[#13131866] mt-6">Email :</p>
              <p className="text-[#131318] font-extrabold text-[17px]">
                restaurant@support.com
              </p>
            </div>
            <div className="px-6 pb-6 lg:pb-12 pt-6 lg:pt-8 bg-[#629cf319] rounded-2xl">
              <div className="text-center text-3xl">
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              </div>
              <p className="text-[#13131866] mt-6">Location :</p>
              <p className="text-[#131318] font-extrabold text-[17px]">
                152/1 Mohakhali Wireless
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="lg:col-span-2 w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label  ml-3">
                    <span className="label-text text-[#131318] text-[18px] font-bold">
                      Your name
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your full name "
                    className="input border-0 rounded-xl pl-4 w-full bg-[#13131807]"
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label ml-3">
                    <span className="label-text text-[#131318] text-[18px] font-bold">
                      Your Email
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input border-0 rounded-xl pl-4 w-full bg-[#13131807]"
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="form-control w-full">
                  <div className="label ml-3">
                    <span className="label-text text-[#131318] text-[18px] font-bold">
                      Subject
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    className="input border-0 rounded-xl pl-4 w-full bg-[#13131807]"
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="form-control w-full">
                  <div className="label ml-3">
                    <span className="label-text text-[#131318] text-[18px] font-bold">
                      Phone Number
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="input border-0 rounded-xl pl-4 bg-[#13131807]"
                  />
                </label>
              </div>
              <div className="lg:col-span-2 w-full">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-[#131318] text-[18px] font-bold">
                      Message
                    </span>
                  </div>
                  <textarea
                    className="textarea border-0 rounded-xl pl-4 h-48 lg:h-[360px] bg-[#13131807]"
                    placeholder="Write your message"
                  ></textarea>
                </label>
              </div>
              <div className="lg:col-span-2 w-full">
                <button className="hover:bg-[#a77e2a] bg-[#CD9933] text-base lg:text-[18px] w-full font-bold text-white rounded-lg px-5 py-3 ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* social media */}
        <div className="mt-12 flex flex-col items-center justify-center bg-[#13131807] py-9 rounded-xl">
          <div>
            <h2 className="text-[#131318] text-2xl font-extrabold mb-6">
              Social Media
            </h2>
            <div className="flex items-center justify-around">
              <p>
              {/* <FontAwesomeIcon icon={faSquareFacebook} /> */}
              </p>
              <p>
                
              </p>
              <p>
             
              </p>
              <p>
               
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
