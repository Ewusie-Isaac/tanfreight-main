import Image from 'next/image';
import Link from 'next/link';

const TanServices = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 ">
      <div className="p-5">
        <div>
          <div
            id="seafreight"
            className="m-5 mx-auto  md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5"
          >
            <Image
              width={600}
              height={600}
              className="mb-5 w-full object-fill"
              src="/main/ship-1.jpg"
              alt="Tan freight packing of goods"
            />
            <div className="flex flex-col justify-evenly">
              <div>
                <h2
                  id="seafreight"
                  className="pb-3 text-xl font-bold lg:text-3xl"
                >
                  SEA FREIGHT.{' '}
                </h2>
                <p>
                  With a robust network of shipping partners and advanced
                  tracking systems, we ensure timely and secure delivery of
                  cargo via sea routes. Whether it's full container loads (FCL)
                  or less than container loads (LCL).
                </p>
              </div>
              <div className=" my-3">
                <h2 className="mb-2 w-full bg-purple-2 p-2 capitalize text-white">
                  Available Servies
                </h2>
                <ul className=" grid grid-cols-2 gap-3 ">
                  <li>
                    <span className="text-purple-2">&#11042;</span> Importer of
                    Records (FCL and LCL)
                  </li>
                  <li>
                    <span className="text-purple-2">&#11042;</span>Exporter of
                    Records (FCL and LCL)
                  </li>
                  <li>
                    <span className="text-purple-2">&#11042;</span>{' '}
                    Consolidation (LCL)
                  </li>
                  <li>
                    <span className="text-purple-2">&#11042;</span> Custom
                    Clearance
                  </li>
                </ul>
              </div>
              <Link
                className="block bg-purple-2 p-5 uppercase text-white"
                href="mailto:info@tanfreight.com"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          {/* <div className="m-5 mx-auto flex w-full flex-col-reverse bg-gray-200  p-5 ">
            <div className="flex flex-col justify-evenly">
              <div>
                <h2
                  id="landfreight"
                  className="pb-3text-xl scroll-smooth font-bold lg:text-3xl"
                >
                  LAND FREIGHT.
                </h2>
                <p>
                  We ensures reliable and efficient transportation of goods
                  across various terrains and distances. We leverage our
                  extensive network of carriers and logistics partners to
                  provide cost-effective and tailored solutions for land
                  transportation needs.
                </p>
              </div>
              <div className=" my-3">
             
                <div className="flex justify-around max-sm:flex-col lg:flex">
                  <div className="flex flex-col  bg-gray-100 p-3 shadow-lg">
                    <Image
                      width={350}
                      height={350}
                      className="mb-5 object-center"
                      src="/main/landf-1.jpg"
                      alt="Tan freight packing of goods"
                    />
                    <h2 className="text-xl font-bold">Haulage</h2>
                    <div className="flex flex-col justify-between gap-4">
                      <ul className=" grid grid-cols-2 gap-3 lg:flex lg:flex-col ">
                        <li>
                          <span className="text-purple-2">&#11042;</span>{' '}
                          Importer/Exporter of Records (FCL and LCL)
                        </li>

                        <li>
                          <span className="text-purple-2">&#11042;</span>
                          Cross-border Trade
                        </li>
                      </ul>
                      <Link
                        className="block bg-purple-2 p-5 uppercase text-white"
                        href="mailto:info@tanfreight.com"
                      >
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col  bg-gray-100 p-3 shadow-lg">
                    <Image
                      width={400}
                      height={400}
                      className="mb-5 object-center"
                      src="/main/courier.jpg"
                      alt="Tan freight packing of goods"
                    />
                    <h2 className="text-xl font-bold">Courier</h2>
                    <div className="flex flex-col gap-4">
                      <ul className=" grid grid-cols-2 gap-3 ">
                        <li>
                          <span className="text-purple-2">&#11042;</span>{' '}
                          Pick-up and Delivery.
                        </li>
                      </ul>
                      <Link
                        className="block items-end bg-purple-2 p-5 uppercase text-white"
                        href="mailto:info@tanfreight.com"
                      >
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          
            </div>
          </div> */}
          <div
            id="landfreight"
            className="m-5 mx-auto flex w-full flex-col-reverse bg-gray-10/80  p-5  md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5"
          >
            <div className="flex flex-col justify-evenly">
              <div>
                <h2
                  // id="landfreight"
                  className="pb-3text-xl scroll-smooth font-bold lg:text-3xl"
                >
                  LAND FREIGHT.
                </h2>
                <p>
                  We ensures reliable and efficient transportation of goods
                  across various terrains and distances. We leverage our
                  extensive network of carriers and logistics partners to
                  provide cost-effective and tailored solutions for land
                  transportation needs.
                </p>
              </div>
              <div className=" my-3">
                <h2 className="mb-2 w-full bg-purple-2 p-2 capitalize text-white">
                  Available Servies
                </h2>
                <div className="flex flex-col">
                  <div>
                    <h2 className="text-xl font-bold">Haulage</h2>
                    <ul className=" grid grid-cols-2 gap-3 ">
                      {/* <li>
                        <span className="text-purple-2">&#11042;</span> Importer
                        of Records (FCL and LCL)
                      </li> */}
                      <li>
                        <span className="text-purple-2">&#11042;</span>{' '}
                        Importer/Exporter of Records (FCL and LCL)
                      </li>
                      {/* <li>
                        <span className="text-purple-2">&#11042;</span> Exporter
                        of Records (FCL and LCL)
                      </li> */}
                      <li>
                        <span className="text-purple-2">&#11042;</span>
                        Cross-Border Trade
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <h2 className="text-xl font-bold">Courier</h2>
                    <ul className=" grid grid-cols-2 gap-3 ">
                      <li>
                        <span className="text-purple-2">&#11042;</span> Pick-up
                        and Delivery.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link
                className="block bg-purple-2 p-5 uppercase text-white"
                href="mailto:info@tanfreight.com"
              >
                Request a Quote
              </Link>
            </div>
            <Image
              width={600}
              height={600}
              className="mb-5 object-center"
              src="/main/landf-1.jpg"
              alt="Tan freight packing of goods"
            />
          </div>
          <div
            id="airfreight"
            className="m-5 mx-auto  md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5"
          >
            <Image
              width={600}
              height={600}
              className="mb-5  object-center"
              src="/main/airfreight.jpg"
              alt="Tan freight packing of goods"
            />
            <div className="flex flex-col justify-evenly">
              <div>
                <h2
                  //  id="airfreight"
                  className="pb-3 text-3xl font-bold"
                >
                  AIR FREIGHT.
                </h2>
                <p>
                  Leveraging our extensive network of airline partners and
                  expertise in air cargo operations, we prioritize security,
                  efficiency, and cost-effectiveness in every consignment. Trust
                  us for seamless handling of various shipments, including
                  time-sensitive, high-value, dangerous/hazardous, and
                  perishable goods.
                </p>
              </div>
              <div className=" my-3">
                <h2 className="mb-2 w-full bg-purple-2 p-2 capitalize text-white">
                  Available Servies
                </h2>
                <ul className=" grid grid-cols-2 gap-3 ">
                  <li>
                    <span className="text-purple-2">&#11042;</span>Importer of
                    Records (FCL and LCL).
                  </li>
                  <li>
                    <span className="text-purple-2">&#11042;</span> Exporter of
                    Records (FCL and LCL).
                  </li>
                  <li>
                    <span className="text-purple-2">&#11042;</span>{' '}
                    Consolidation (LCL).
                  </li>
                  <li>
                    <span className="text-purple-2">&#11042;</span> Custom
                    Clearance
                  </li>
                </ul>
                <div className="mt-3 w-full">
                  <h2 className="text-xl font-bold">Courier</h2>
                  <ul className=" grid grid-cols-2 gap-3 ">
                    <li>
                      <span className="text-purple-2">&#11042;</span> Pick-up
                      and Delivery.
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                className="block bg-purple-2 p-5 uppercase text-white"
                href="mailto:info@tanfreight.com"
              >
                Request a Quote
              </Link>
              {/* <div className="grid w-full grid-cols-2 gap-5 p-1 ">
            <Link className="block bg-purple-500 p-5 uppercase" href="/about">
              About us
            </Link>

            <Link
              className="block bg-purple-500 p-5 uppercase"
              href="mailto:info@tanfreight.com"
            >
              Request a Quote
            </Link>
          </div> */}
            </div>
          </div>
          <div
            id="custom"
            className="m-5 mx-auto flex flex-col-reverse bg-gray-10/80 p-5   md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5"
          >
            <div className="flex flex-col">
              <div>
                <h2 className="pb-3 text-xl font-bold lg:pb-1 lg:text-3xl">
                  CUSTOM CLEARANCE.
                </h2>
                <p>
                  We are specialized in managing documentations, and customs
                  inspections efficiently, leveraging our expertise to
                  minimizing delays and ensuring timely delivery of goods.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mb-2 w-full bg-purple-2 p-2 capitalize text-white lg:mb-1">
                  Available Servies
                </h2>
                <ul className=" grid grid-cols-2 gap-3 ">
                  <li>
                    <span className="text-purple-2">&#11042;</span> Custom
                    Clearance of Less Container Load (LCL) sea shipments within
                    72 hours
                  </li>
                  <li>
                    <span className="text-purple-2">&#11042;</span> Custom
                    Clearance of Full Container Load (FCL) sea shipments within
                    48 hours
                  </li>
                  <li>
                    <span className="text-purple-2">&#11042;</span> Clearing of
                    air shipments within 24 hours.
                  </li>
                  {/* <li>
                <span className="text-purple-2">&#11042;</span> Lorem, ipsum
                dolor.
              </li> */}
                </ul>
              </div>
              <Link
                className="block bg-purple-2 p-5 uppercase text-white"
                href="mailto:info@tanfreight.com"
              >
                Request a Quote
              </Link>
            </div>
            <Image
              width={600}
              height={600}
              className="mb-5 object-center"
              src="/main/contain.jpg"
              alt="Tan freight packing of goods"
            />
          </div>
          <div
            id="warehouse"
            className="m-5 mx-auto  md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5"
          >
            <Image
              width={600}
              height={600}
              className="mb-5  object-center"
              src="/warehouse.jpg"
              alt="Tan freight packing of goods"
            />
            <div className="flex flex-col justify-evenly">
              <div>
                <h2 className="pb-3 text-3xl font-bold">
                  WAREHOUSE AND DISTRIBUTION.
                </h2>
                <p>
                  Our warehouse and distribution services are designed for
                  seamless supply chain management, ensuring secure storage and
                  efficient delivery of goods. we optimize inventory control and
                  streamline distribution channels.
                </p>
              </div>
              {/* <div className=" my-3">
            <h2 className="mb-2 w-full bg-purple-2 p-2 capitalize text-white">
              Available Servies
            </h2>
            <ul className=" t grid grid-cols-2 gap-3 ">
              <li>
                <span className="text-purple-2">&#11042;</span> Lorem ipsum
                dolor sit.
              </li>
              <li>
                <span className="text-purple-2">&#11042;</span> Lorem, ipsum
                dolor.
              </li>
              <li>
                <span className="text-purple-2">&#11042;</span> Lorem, ipsum.
              </li>
              <li>
                <span className="text-purple-2">&#11042;</span> Lorem, ipsum
                dolor.
              </li>
            </ul>
          </div> */}
              <Link
                className="block bg-purple-2 p-5 uppercase text-white"
                href="mailto:info@tanfreight.com"
              >
                Request a Quote
              </Link>
              {/* <div className="grid w-full grid-cols-2 gap-5 p-1 ">
            <Link className="block bg-purple-500 p-5 uppercase" href="/about">
              About us
            </Link>

            <Link
              className="block bg-purple-500 p-5 uppercase"
              href="mailto:info@tanfreight.com"
            
              Request a Quote
            </Link>
          </div> */}
            </div>
          </div>
          <div
            id="projectcargo"
            className="m-5 mx-auto flex flex-col-reverse bg-gray-10/80 p-5  md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5"
          >
            <div className="flex flex-col justify-evenly">
              <div>
                <h2 className="pb-3 text-xl font-bold lg:text-3xl">
                  PROJECT CARGO.
                </h2>
                <p>
                  Our project cargo service specializes in transporting
                  oversized, heavy, or complex goods for large-scale industrial,
                  energy, and infrastructure projects worldwide. With expertise
                  in multimodal transportation and specialized equipment, we
                  navigate logistical challenges seamlessly, contributing to the
                  successful completion of diverse projects across industries.
                </p>
              </div>
              {/* <div className=" my-3">
            <h2 className="mb-2 w-full bg-purple-2 p-2 capitalize text-white">
              Available Servies
            </h2>
            <ul className=" grid grid-cols-2 gap-3 ">
              <li>
                <span className="text-purple-2">&#11042;</span> Lorem ipsum
                dolor sit.
              </li>
              <li>
                <span className="text-purple-2">&#11042;</span> Lorem, ipsum
                dolor.
              </li>
              <li>
                <span className="text-purple-2">&#11042;</span> Lorem, ipsum.
              </li>
              <li>
                <span className="text-purple-2">&#11042;</span> Lorem, ipsum
                dolor.
              </li>
            </ul>
          </div> */}
              <Link
                className="mt-4 block bg-purple-2 p-5 uppercase text-white"
                href="mailto:info@tanfreight.com"
              >
                Request a Quote
              </Link>
              {/* <div className="grid w-full grid-cols-2 gap-5 p-1 ">
            <Link className="block bg-purple-500 p-5 uppercase" href="/about">
              About us
            </Link>

            <Link
              className="block bg-purple-500 p-5 uppercase"
              href="mailto:info@tanfreight.com"
            >
              Request a Quote
            </Link>
          </div> */}
            </div>
            <Image
              width={600}
              height={600}
              className="mb-5  object-center"
              src="/main/pcargo.jpg"
              alt="Tan freight packing of goods"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TanServices;
