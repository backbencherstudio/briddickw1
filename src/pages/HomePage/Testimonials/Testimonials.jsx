import { useEffect, useState } from "react";
import "../../../styles/Styles.css";
import one from "../../../assets/image/c1.png";
import two from "../../../assets/image/c2.png";
import three from "../../../assets/image/c3.png";
import four from "../../../assets/image/c4.png";

// Embla Carousel images
import embla1 from "../../../assets/image/s1.png";
import embla2 from "../../../assets/image/s2.png";
import embla3 from "../../../assets/image/s3.png";
import embla4 from "../../../assets/image/s4.png";
import embla5 from "../../../assets/image/s1.png";
import embla6 from "../../../assets/image/s3.png";

// Embla Carousel Hook
import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const emblaSlides = [
    {
      image: embla1,
      name: "Priya Sharma",
      designation: "San Francisco, CA",
      review:
        "Excellent the way it is presented! UpNest was great and I would recommend you to anyone at any time. Thank you for the assistance!!",
    },
    {
      image: embla2,
      name: "Kathryn Murphy",
      designation: "New York, NY",
      review:
        "Best part was getting commission proposals right away. Very convenient, saves time. I also like seeing a brief video/audio clip, along with the services they offer. This helped me narrow down to a few potential agents I wanted to meet.",
    },
    {
      image: embla3,
      name: "Jacob Jones",
      designation: "Los Angeles, CA",
      review:
        "UpNest was easy to use and helped me find a real estate agent that matched my needs without any headaches or excessive calling. You only receive calls if you select to interview that agent.",
    },
    {
      image: embla4,
      name: "Jane Cooper",
      designation: "Chicago, IL",
      review:
        "Aver all good, at some point there was an important point I considered he was hiding from me. But I decided to continue trusting him once clarified, at the end I consider myself satisfied with Salvador' service.",
    },
    {
      image: embla5,
      name: "Sarah Thompson",
      designation: "Miami, FL",
      review:
        "I was impressed by how well-organized and user-friendly the platform is. The agent we chose was fantastic and exceeded our expectations!",
    },
    {
      image: embla6,
      name: "Michael Brown",
      designation: "Seattle, WA",
      review:
        "The ability to see agent proposals and hear their approaches helped us feel more comfortable. I can’t believe how simple the process was.",
    },
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevDisabled(emblaApi.canScrollPrev() === false);
      setNextDisabled(emblaApi.canScrollNext() === false);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <>
      <div id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-[100px] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="max-w-[1350px] mx-auto px-[15px]">
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="text-[#0D0D12] text-[28px] sm:text-[32px] lg:text-[48px] font-semibold leading-[130%] text-center max-w-[1024px] mx-auto">
                Read reviews from hundreds of happy homeowners that used Jibrado
              </h2>
              <div className="bg-[#F8FAFB] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center justify-start">
                  <img src={one} alt="Review 1" />
                  <img className="ms-[-24px]" src={two} alt="Review 2" />
                  <img className="ms-[-24px]" src={three} alt="Review 3" />
                  <img className="ms-[-24px]" src={four} alt="Review 4" />
                  <div className="ms-[-24px] w-16 h-16 bg-[#6BC04A] rounded-full border-2 border-white text-white text-[30px] font-semibold flex items-center justify-center">
                    +
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          d="M25.9252 9.19201L29.8092 17.026C30.1012 17.616 30.6653 18.024 31.3193 18.118L40.2851 19.4139C41.9291 19.6519 42.5852 21.668 41.3952 22.824L34.9132 29.114C34.4392 29.574 34.2231 30.236 34.3351 30.886L35.8171 39.494C36.1171 41.24 34.2831 42.572 32.7111 41.75L24.9352 37.68C24.3512 37.374 23.6552 37.374 23.0732 37.68L15.3031 41.746C13.7291 42.57 11.8891 41.236 12.1911 39.486L13.6733 30.886C13.7853 30.236 13.5691 29.574 13.0951 29.114L6.6132 22.824C5.4212 21.668 6.07706 19.6519 7.72306 19.4139L16.6891 18.118C17.3411 18.024 17.9051 17.616 18.1991 17.026L22.0832 9.19201C22.8652 7.60201 25.1372 7.60201 25.9252 9.19201Z"
                          fill="#FBBC05"
                        />
                      </svg>
                    ))}
                    <p className="text-[#1D1F2C] text-[24px] font-bold leading-[130%] ms-2">
                      4.8/5
                    </p>
                  </div>
                  <p className="text-[#4A4C56] text-[18px] font-medium leading-[160%]">
                    Average Of 2k+ Customer Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="embla w-full">
            <div
              className="embla__viewport overflow-hidden py-4 px-[15px] sm:px-0 sm:ps-[15.6%]"
              ref={emblaRef}
            >
              <div className="embla__container flex">
                {emblaSlides.map((slide, index) => (
                  <div
                    className="embla__slide w-full sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[26%] shrink-0 flex flex-col items-start justify-between  bg-white rounded-[20px] review-slide-shadow p-6 gap-4 me-6"
                    key={index}
                  >
                    <div className="flex flex-col items-start justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.212 30.375C8.78777 29.9016 6.60342 28.6004 5.03273 26.6941C3.46204 24.7879 2.60263 22.395 2.60156 19.925C2.60156 14.05 7.37031 9.28125 13.2453 9.28125C19.1203 9.28125 23.8891 14.05 23.8891 19.925C23.8891 27.7542 21.2516 32.6167 18.1557 35.6563C13.4161 40.3104 7.48073 40.7146 7.48073 40.7146C7.1851 40.7365 6.88935 40.6737 6.62811 40.5336C6.36686 40.3935 6.15092 40.1819 6.00557 39.9235C5.86021 39.6652 5.79146 39.3708 5.80735 39.0748C5.82325 38.7788 5.92313 38.4934 6.09531 38.2521C6.09531 38.2521 8.91615 34.2813 10.6745 31.3438C10.8578 31.0354 11.0432 30.6958 11.212 30.375ZM13.2453 12.4063C9.09531 12.4063 5.72656 15.775 5.72656 19.925C5.72656 24.075 9.09531 27.4438 13.2453 27.4438C13.8349 27.4438 14.2474 27.6854 14.5474 28.0313C14.7995 28.3229 15.037 28.7896 14.9557 29.475C14.8849 30.0688 14.2766 31.4104 13.3557 32.95C12.6557 34.1167 11.7953 35.4417 10.9974 36.6313C12.8506 35.904 14.5399 34.814 15.9661 33.425C18.6161 30.825 20.7641 26.625 20.7641 19.925C20.7635 17.9311 19.9712 16.019 18.5613 14.6091C17.1513 13.1991 15.2392 12.4068 13.2453 12.4063ZM34.7161 30.375C32.2919 29.9016 30.1076 28.6004 28.5369 26.6941C26.9662 24.7879 26.1068 22.395 26.1057 19.925C26.1057 14.05 30.8745 9.28125 36.7495 9.28125C42.6245 9.28125 47.3932 14.05 47.3932 19.925C47.3932 27.7542 44.7557 32.6167 41.6599 35.6563C36.9203 40.3104 30.9849 40.7146 30.9849 40.7146C30.6893 40.7365 30.3935 40.6737 30.1323 40.5336C29.871 40.3935 29.6551 40.1819 29.5097 39.9235C29.3644 39.6652 29.2956 39.3708 29.3115 39.0748C29.3274 38.7788 29.4273 38.4934 29.5995 38.2521C29.5995 38.2521 32.4203 34.2813 34.1786 31.3438C34.362 31.0354 34.5474 30.6958 34.7161 30.375ZM36.7495 12.4063C32.5995 12.4063 29.2307 15.775 29.2307 19.925C29.2307 24.075 32.5995 27.4438 36.7495 27.4438C37.3391 27.4438 37.7516 27.6854 38.0516 28.0313C38.3036 28.3229 38.5411 28.7896 38.4599 29.475C38.3891 30.0688 37.7807 31.4104 36.8599 32.95C36.1599 34.1167 35.2995 35.4417 34.5016 36.6313C36.3548 35.904 38.0441 34.814 39.4703 33.425C42.1203 30.825 44.2682 26.625 44.2682 19.925C44.2677 17.9311 43.4753 16.019 42.0654 14.6091C40.6555 13.1991 38.7434 12.4068 36.7495 12.4063Z"
                          fill="#D59534"
                        />
                      </svg>
                      <p className="text-[16px] text-[#4A4C56] font-normal leading-[160%]">
                        {slide.review}
                      </p>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                      <img
                        className="rounded-lg w-[64px] h-[64px] object-cover"
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                      />
                      <div className="">
                        <div className="text-[16px] text-black font-semibold leading-[160%]">
                          {slide.name}
                        </div>
                        <p className="text-[14px] text-[#4A4C56] font-normal leading-[140%]">
                          {slide.designation}
                        </p>
                        <div className="flex items-center justify-start gap-1 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_5425_24569)">
                              <path
                                d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                fill="#F9C80E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_5425_24569">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_5425_24569)">
                              <path
                                d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                fill="#F9C80E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_5425_24569">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_5425_24569)">
                              <path
                                d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                fill="#F9C80E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_5425_24569">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_5425_24569)">
                              <path
                                d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                fill="#F9C80E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_5425_24569">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_5425_24569)">
                              <path
                                d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                fill="#F9C80E"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_5425_24569">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-start gap-5 mt-10 ps-[15px] sm:ps-[15.6%]">
              <button
                onClick={scrollPrev}
                disabled={prevDisabled}
                className={
                  prevDisabled
                    ? `w-12 h-12 flex items-center justify-center rounded-full border border-[#BBBDDB] text-[#BBBDDB]`
                    : `w-12 h-12 flex items-center justify-center rounded-full border border-[#23298B] text-[#23298B]`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.11616 9.18144C6.39409 9.18144 8.4702 7.36326 8.4702 5.3649C8.4702 4.91258 8.83688 4.5459 9.2892 4.5459H9.51989C9.97221 4.5459 10.3389 4.91258 10.3389 5.3649C10.3389 6.81781 9.61197 8.18062 8.47114 9.18144H19.181C19.6333 9.18144 20 9.54812 20 10.0004C20 10.4528 19.6333 10.8194 19.181 10.8194H8.47114C9.61197 11.8203 10.3389 13.1831 10.3389 14.636C10.3389 15.0883 9.97221 15.455 9.51989 15.455H9.2892C8.83688 15.455 8.4702 15.0883 8.4702 14.636C8.4702 12.6384 6.39409 10.8194 4.11616 10.8194H4.00082C3.5485 10.8194 3.18182 10.4528 3.18182 10.0004C3.18182 9.54812 3.5485 9.18144 4.00082 9.18144H4.11616Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                disabled={nextDisabled}
                className={
                  nextDisabled
                    ? `w-12 h-12 flex items-center justify-center rounded-full border border-[#BBBDDB] text-[#BBBDDB]`
                    : `w-12 h-12 flex items-center justify-center rounded-full border border-[#23298B] text-[#23298B]`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.8838 9.18144C13.6059 9.18144 11.5298 7.36326 11.5298 5.3649C11.5298 4.91258 11.1631 4.5459 10.7108 4.5459H10.4801C10.0278 4.5459 9.66111 4.91258 9.66111 5.3649C9.66111 6.81781 10.388 8.18062 11.5289 9.18144H0.819001C0.366679 9.18144 0 9.54812 0 10.0004C0 10.4528 0.366679 10.8194 0.819001 10.8194H11.5289C10.388 11.8203 9.66111 13.1831 9.66111 14.636C9.66111 15.0883 10.0278 15.455 10.4801 15.455H10.7108C11.1631 15.455 11.5298 15.0883 11.5298 14.636C11.5298 12.6384 13.6059 10.8194 15.8838 10.8194H15.9992C16.4515 10.8194 16.8182 10.4528 16.8182 10.0004C16.8182 9.54812 16.4515 9.18144 15.9992 9.18144H15.8838Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
