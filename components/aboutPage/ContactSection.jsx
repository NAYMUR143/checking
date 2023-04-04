import { HiArrowUpRight } from "react-icons/hi2";

const ContactSection = ({ toggleSignupModal }) => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-28 md:px-10 lg:px-16">
        <div className="flex grid-cols-12 flex-col rounded-2xl bg-gray-100 p-6 md:p-10 xl:grid xl:p-16">
          <div className="col-span-3">
            <span className="text-xs uppercase">CONTACT</span>
          </div>
          <div className="col-span-9 mt-8 md:mt-6 xl:mt-0">
            <h2 className="text-4xl font-medium sm:text-5xl">
              Available in closed alpha for select enterprises & institutions
            </h2>

            <button
              type="button"
              onClick={toggleSignupModal}
              className="group mt-12 flex w-fit items-center gap-x-1 rounded-full border-2 border-black bg-black px-6 py-2.5 text-white"
            >
              <span>Get in touch</span>
              <HiArrowUpRight className="mt-0.5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
