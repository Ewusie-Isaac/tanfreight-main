import Image from 'next/image';
import Link from 'next/link';

const ManagementTeam = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <div className="partners mb-2 mt-5 px-10 text-xl font-bold uppercase">
          Founding Partners
        </div>
        <div className="flex w-full flex-col justify-evenly gap-14 p-8 lg:gap-20 lg:p-20">
          <div className="flex flex-col-reverse gap-5 lg:grid lg:grid-cols-2">
            <div className="">
              <div>
                <h3 className="mb-3 rounded-md bg-purple-2 p-2 text-xl text-gray-200">
                  Raphael Teffutor - CEO
                </h3>
                <p className="mb-3">
                  Raphael is a serial entrepreneur and a visionary. He is the
                  Consequuntur quo quidem, ea voluptates hic debitis quibusdam!
                </p>
                <ul className="mb-3 flex items-center gap-3 text-3xl">
                  <Link href="" className="email">
                    <span>&#9993;</span>
                  </Link>
                  <Link href="" className="email">
                    <Image src="/link.jpg" alt="" width={24} height={24} />
                  </Link>
                  <Link href="" className="email">
                    <Image src="/ig.png" alt="" width={24} height={24} />
                  </Link>
                  {/* <Link href="" className="email">
                  Mobile Number:
                </Link> */}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 rounded-md bg-purple-2 p-2 text-xl text-gray-200">
                  Raphael Teffutor - Experience
                </h3>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque dolorem cumque, dolorum tempora natus aliquam vel
                </p>
                <ul className="mb-3 flex flex-col">
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in dolorum tempora natus aliquam vel
                  </Link>
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in Eaque dolorem cumque,
                  </Link>
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in dolorum tempora natus aliquam vel
                  </Link>
                </ul>
              </div>
            </div>
            <Image
              src="/managements/RT.jpg"
              width={800}
              height={800}
              alt="tan stuff"
            />
          </div>
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
            <Image
              src="/managements/RN.jpg"
              width={800}
              height={800}
              alt="tan stuff"
            />
            <div className="">
              <div>
                <h3 className="mb-3 rounded-md bg-purple-2 p-2 text-xl text-gray-200">
                  Raphael Nyarkoh - COO
                </h3>
                <p className="mb-3">
                  Raphael is a serial entrepreneur and a visionary. He is the
                  Consequuntur quo quidem, ea voluptates hic debitis quibusdam!
                </p>
                <ul className="mb-3 flex items-center gap-3 text-3xl">
                  <Link href="" className="email">
                    <span>&#9993;</span>
                  </Link>
                  <Link href="" className="email">
                    <Image src="/link.jpg" alt="" width={24} height={24} />
                  </Link>
                  <Link href="" className="email">
                    <Image src="/ig.png" alt="" width={24} height={24} />
                  </Link>
                  {/* <Link href="" className="email">
                  Mobile Number:
                </Link> */}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 rounded-md bg-purple-2 p-2 text-xl text-gray-200">
                  Raphael Nyarkoh - Experience
                </h3>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque dolorem cumque, dolorum tempora natus aliquam vel
                </p>
                <ul className="mb-3 flex flex-col">
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in dolorum tempora natus aliquam vel
                  </Link>
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in Eaque dolorem cumque,
                  </Link>
                  <Link href="" className="email">
                    <span className="mr-1 text-xl text-purple-2">&#10004;</span>{' '}
                    10 years in dolorum tempora natus aliquam vel
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h2 className="partners px-10 text-center text-xl font-bold uppercase">
          Other managements team
        </h2>
        <div className="f_first">
          <div>
            <Image
              className="w-full bg-cover bg-center"
              src="/managements/RT-1.jpg"
              width={400}
              height={400}
              alt="tan stuff"
            />
            <div className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </div>
          </div>
          <Link href="">
            <Image
              src="/managements/RN-1.jpg"
              width={400}
              height={400}
              alt="tan stuff"
            />
            <div className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </div>
          </Link>
        </div>
        <ul className="staffs">
          <Link href="">
            <Link href="">
              <Image
                src="/managements/HR.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
          <Link href="">
            <Link href="">
              <Image
                src="/managements/EB.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
          <Link href="">
            <Link href="">
              <Image
                src="/managements/IS.jpg"
                width={400}
                height={400}
                alt="tan stuff"
              />
            </Link>
            <ul className="grid grid-cols-2">
              <Link href="" className="email">
                Role:
              </Link>
              <Link href="" className="email">
                Email:
              </Link>
              <Link href="" className="email">
                Linkedin:
              </Link>
              <Link href="" className="email">
                Mobile Number:
              </Link>
            </ul>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default ManagementTeam;
