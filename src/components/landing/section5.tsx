"use client";

import Lottie from "lottie-react";

import lighting from "@/public/assets/lotties/lighting.json";

import LandingButtons from "./buttons";

const Section5 = () => (
  <section className="h-screen">
    <div className="bg-cover bg-center pt-123 lg:pt-173 xl:pt-230">
      <h3 className="mb-16 text-center text-24-600 lg:mb-24 lg:text-40-600 xl:mb-24 xl:text-40-600">
        다들 어디에 계세요?
      </h3>
      <h4 className="flex flex-col items-center justify-center text-16-500 md:flex-row  lg:text-24-500  xl:text-24-500">
        <p>
          스터디 하러 모이세요
          <br />
          <br />
          어떤 속도로?
          <br />
          <br />
          <span className=" text-yellow-300">빛의 속도로</span>
        </p>
        <Lottie animationData={lighting} />
      </h4>
    </div>
    <div className="flex flex-col items-center justify-center bg-cover bg-center py-55 lg:py-100 xl:py-84">
      <LandingButtons />
    </div>
  </section>
);

export default Section5;