'use client'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axios from "axios"

interface Testimonial {
  avatar: string;
  name: string;
  company: string;
  content: string;
}



function Testimonials() {
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[] | null>(null);

  const fetchTestimonials = async () => {
    const res = await axios.get('http://localhost:8000/reviews');
    setTestimonialsData(res.data);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Automatically change testimonial every 5 seconds
    if (testimonialsData && testimonialsData.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentPage((prev) => (prev % testimonialsData.length) + 1);
      }, 5000);

      // Clear the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [testimonialsData]);

  const changeTestimonial = (page: number) => {
    setCurrentPage(page);
  };

  const currentIndex = testimonialsData ? (currentPage - 1) % testimonialsData.length : 0;
  const currentTestimonial = testimonialsData ? testimonialsData[currentIndex] : null;

  const handleReviewButtonClick = () => {
    alert('Redirect to the review page or display a review form.');
  };

  return (
    <section className="w-full h-full">
      {/* HEADING */}
      <div id="testimonials" className="mx-4 md:mx-[64px] 2xl:mx-[256px] flex flex-col">
        <p className="text-[24px] text-[--brand-color] uppercase">
          TESTIMONIALS
        </p>
        <span className="text-[64px] mt-4 lg:mt-[80px]  leading-[3.75rem] font-bold">
          CLIENT<br></br>EXPERIENCES
        </span>
      </div>

      {/* REVIEW CONTAINER */}
      <div className=" text-center lg:text-left lg:flex items-center justify-center gap-[164px] mx-4 md:mx-[64px] 2xl:mx-[256px] py-12 lg:py-[120px] relative">
        {/* IMAGE CONTAINER */}
        <div className="flex items-center justify-center lg:flex-none lg:max-w-[532px]">
          <Image src={`/${currentTestimonial?.avatar}`} alt={currentTestimonial?.name} width={301} height={301} className="w-[301px] h-[301px] rounded-full bg-[--brand-color] mb-12 lg:mb-0" />
        </div>

        {/* Review Context Container */}
        <div className="flex items-center justify-center lg:flex-none">
          <div className="w-full md:max-w-[732px] lg:w-[532px] min-h-[450px] rounded-xl border border-[.5] lg:px-6 lg:py-8">
            <div className="flex items-center gap-1">
              {/* LOGO*/}
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 32 32">
                <path d="M 14.519531 4.0097656 C 14.239531 3.9997656 14 4.2295312 14 4.5195312 L 14 6.5 C 14 6.78 14.22 7 14.5 7 L 14.5 7.0195312 C 20.73 7.2595312 25.740469 12.27 25.980469 18.5 L 26 18.5 C 26 18.78 26.22 19 26.5 19 L 28.480469 19 C 28.770469 19 29.000234 18.760469 28.990234 18.480469 C 28.720234 10.620469 22.379531 4.2797656 14.519531 4.0097656 z M 14.519531 9.0097656 C 14.239531 8.9997656 14 9.2395313 14 9.5195312 L 14 11.5 C 14 11.78 14.22 12 14.5 12 L 14.5 12.029297 C 17.97 12.259297 20.740703 15.03 20.970703 18.5 L 21 18.5 C 21 18.78 21.22 19 21.5 19 L 23.480469 19 C 23.760469 19 24.000234 18.760469 23.990234 18.480469 C 23.720234 13.380469 19.619531 9.2797656 14.519531 9.0097656 z M 5.5 10 C 5.22 10 5 10.22 5 10.5 L 5 21.5 C 5 25.08 7.92 28 11.5 28 C 15.08 28 18 25.08 18 21.5 C 18 17.92 15.08 15 11.5 15 C 11.22 15 11 15.22 11 15.5 L 11 18.5 C 11 18.78 11.22 19 11.5 19 C 12.88 19 14 20.12 14 21.5 C 14 22.88 12.88 24 11.5 24 C 10.12 24 9 22.88 9 21.5 L 9 10.5 C 9 10.22 8.78 10 8.5 10 L 5.5 10 z"></path>
              </svg>
              <h3 className="text-[32px] font-bold">{currentTestimonial?.company}</h3>
            </div>

            {/* review */}
            <div className="">
              <p className="py-[56px] text-[17px]">{currentTestimonial?.content}</p>
            </div>

            <div className="">
              <span className="uppercase text-[--brand-color] text-[14px]">{currentTestimonial?.name}</span>
            </div>

            {/* Next Slide Button */}
            <div className="pt-[32px]">
              
            </div>

            {/* Button for leaving a review */}
            <div className="absolute top-0 lg:top-4 left-0">
              <Button className="rounded-md" onClick={handleReviewButtonClick}>
                Leave a Review
              </Button>
            </div>
          </div>

          {/* PAGINATION CONTAINER */}
          <div className="absolute bottom-10 left-1/2 translate-x-[-50%]">
  <Button onClick={() => changeTestimonial(currentPage - 1)} disabled={currentPage === 1} className="mr-4 rounded-lg">
    <FaArrowLeft size={20} />
  </Button>
  {/* used chatgpt for this below */}
  <Button
  onClick={() => changeTestimonial(currentPage + 1)}
  disabled={(testimonialsData ?? false) && currentPage === (testimonialsData ?? []).length}
>
  <FaArrowRight size={20} />
</Button>
</div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;