import { Fragment, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiCheck, HiXMark } from "react-icons/hi2";

const SignupModal = ({ isOpen, closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [newsletterCheck, setNewsletterCheck] = useState(true);

  const [formFilled, setFormFilled] = useState(false);

  useMemo(() => {
    if (!firstName || !lastName || !email) {
      setFormFilled(false);
      return;
    }
    // temporary; use regex for email highlighting later
    if (!email.includes("@") || !email.includes(".")) {
      setFormFilled(false);
      return;
    }

    setFormFilled(true);
  }, [firstName, lastName, email]);

  const submitForm = (e) => {
    e.preventDefault();

    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      inviteCode: inviteCode ? inviteCode : null,
      newsletterCheck: newsletterCheck,
    };

    console.log("submitting form!", body);
    fetch('https://api.airtable.com/v0/appp8ONGjDmNk2b8a/signups', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer keyvM5bIrLHYbaCgh',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "fields": {
        "email": `${body.email}`
      }
    })
  })
    .then(response => response.json())
    .then(data => console.log("success"))
    .catch(error => console.error(error))
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex w-full max-w-xl transform flex-col items-center justify-center overflow-hidden rounded-2xl bg-black p-6 text-left align-middle font-manrope shadow-xl transition-all sm:p-10">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-0 right-0 m-6 text-white"
                >
                  <HiXMark className="h-7 w-7 text-zinc-500 transition duration-300 ease-in-out hover:text-white" />
                </button>

                <Dialog.Title
                  as="h3"
                  className="pt-20 text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Get Started
                </Dialog.Title>
                <form className="mt-10 w-full" onSubmit={(e) => submitForm(e)}>
                  <div>
                    <label className="text-sm text-gray-300 md:text-base">
                      Name
                    </label>
                    <div className="mt-1.5 flex items-center divide-x divide-gray-300 rounded-md bg-zinc-900 py-1.5 pl-4 ring-zinc-800 transition duration-200 ease-in-out focus-within:ring-1">
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        className="w-full bg-zinc-900 py-1 text-white placeholder-gray-500 outline-none"
                      />
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        className="w-full bg-zinc-900 py-1 pl-4 text-white placeholder-gray-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="text-sm text-gray-300 md:text-base">
                      Email
                    </label>
                    <div className="mt-1.5 flex items-center rounded-md bg-zinc-900 py-1.5 pl-4 ring-zinc-800 transition duration-200 ease-in-out focus-within:ring-1">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="personal@email.com"
                        className="w-full bg-zinc-900 py-1 text-white placeholder-gray-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="text-sm text-gray-300 md:text-base">
                      Describe your use case
                    </label>
                    <div className="mt-1.5 flex items-center rounded-md bg-zinc-900 py-1.5 pl-4 ring-zinc-800 transition duration-200 ease-in-out focus-within:ring-1">
                      <input
                        value={inviteCode}
                        onChange={(e) => setInviteCode(e.target.value)}
                        placeholder="Optional"
                        className="w-full bg-zinc-900 py-1 text-white placeholder-gray-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative mt-6 flex">
                    <label className="relative cursor-pointer pl-6 text-sm text-gray-300 md:text-base">
                      Subscribe to product updates from MDLA
                      <input
                        type="checkbox"
                        checked={newsletterCheck}
                        onChange={() => setNewsletterCheck(!newsletterCheck)}
                        className="absolute top-0 left-0 w-full opacity-0"
                      />
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          top: "2px",
                        }}
                        className="absolute left-0 rounded-sm border border-zinc-400 bg-zinc-900"
                      >
                        {newsletterCheck ? (
                          <HiCheck className="text-white" />
                        ) : null}
                      </div>
                    </label>
                  </div>

                  <div className="mt-20 pb-2">
                    <button
                      type="submit"
                      disabled={!formFilled}
                      className={`${
                        formFilled
                          ? "hover:opacity-90"
                          : "opacity-70 hover:opacity-80"
                      } w-full rounded-md bg-white py-3.5 text-sm font-medium`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SignupModal;
