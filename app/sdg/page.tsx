import SDG from '@/components/SDG';
import Wrapper from '@/components/Wrapper';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
export const metadata: Metadata = {
  title: 'TAN SDG',
  description: 'Generated by create next app',
};
const page = () => {
  return (
    <Wrapper>
      <section className="mx-2 mt-8 lg:mx-4">
        <div className="relative mx-2 mb-8">
          <Image
            src="/tanlogo.png"
            alt="tan logo"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-20px] w-10 lg:w-[50px]"
          />
          <h2 className="text-xl font-bold lg:text-3xl">
            TAN AND THE UNITED NATIONS SDGs
          </h2>
          <p className="mt-3 text-gray-800 lg:w-3/5">
            TAN contribution to the United Nations Sustainable Development Goals
            aim to address some of the global challenges by promoting Industry,
            Innovation and Infrastructure,Climate Action, and Partnerships for
            the Goals to improve the well-being of all individuals.
          </p>
        </div>
        <SDG />
      </section>
    </Wrapper>
  );
};

export default page;
