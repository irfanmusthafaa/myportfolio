import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
// components
import Iconify from '../components/Iconify';
import SocialLinks from '../components/social/SocialLinks';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { contactEmail } from '../mock/profile';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setIsSending(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      e.target.reset();
      setShowSuccessModal(true);
    } catch (error) {
      // intentional
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section id="contact" className="container mx-auto max-w-[90%] px-5 py-24">
      <div className="mb-12 flex w-full flex-col text-center">
        <HeadingAnimate>
          <h2 className="text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Get In Touch
          </h2>
        </HeadingAnimate>
        <LoadAnimate amount={0}>
          <p className="mx-auto mt-5 text-base leading-relaxed opacity-80 md:w-1/2">
            I'm actively looking for any new opportunities, my inbox is always open. Whether you have a question or want
            to hire me or just want to say hello, I'll try my best to get back to you!
          </p>
        </LoadAnimate>
      </div>
      <div className="w-full">
        <LoadAnimate amount={0}>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="-m-2 flex flex-wrap">
              <div className="w-full p-2 sm:w-1/2">
                <label htmlFor="name" className="mb:1 text-sm leading-7">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Full Name"
                  // name="user_name"
                  name="from_name"
                  className="w-full rounded border border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                />
              </div>
              <div className="w-full p-2 sm:w-1/2">
                <label htmlFor="email" className="text-sm leading-7">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="email@example.com"
                  // name="user_email"
                  name="reply_to"
                  className="w-full rounded border border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                />
              </div>
              <div className="w-full p-2 sm:w-full">
                <label htmlFor="email" className="text-sm leading-7">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="Subject"
                  name="subject_email"
                  className="w-full rounded border border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                />
              </div>
              <div className="w-full p-2">
                <label htmlFor="message" className="text-sm leading-7">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="h-32 w-full resize-none rounded border border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                  defaultValue={'Hello Irfan,'}
                />
              </div>
              <div className="flex w-full justify-end p-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="text-md mb-2 inline-flex w-28 items-center justify-center rounded-lg border bg-primary-700 px-1 py-2.5 font-medium text-primary-50 hover:bg-primary-700/80 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600"
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      {' '}
                      Send
                      <Iconify classes="ml-2" icon="fluent:send-16-filled" />
                    </>
                  )}
                </button>
              </div>
              <div className="mt-4 w-full border-t border-neutral-700/50 p-2 pt-6 text-center dark:border-neutral-300/50">
                <a
                  href={`mailto:${contactEmail}?subject=Inquiry&body=Hello Irfan`}
                  className="inline-flex items-center space-x-2 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  <Iconify classes="text-lg text-primary-700 dark:text-primary-300" icon="clarity:email-solid" />
                  <span>{contactEmail}</span>
                </a>
                <p className="my-5 leading-normal">
                  <Iconify
                    classes="inline-block text-lg mr-1 text-primary-700 dark:text-primary-300"
                    icon="bytesize:location"
                  />
                  Irfan Mustafa
                  <br />
                  Bandung, Indonesia
                </p>
                <div className="flex w-full justify-center">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </form>
        </LoadAnimate>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white/95 p-8 text-center shadow-2xl backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-900/95"
            >
              {/* Animated Glowing Ring & Checkmark Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 ring-8 ring-emerald-100/50 dark:ring-emerald-900/20">
                <svg
                  className="h-10 w-10 text-emerald-500 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-slate-800 dark:text-neutral-50">
                Message Sent Successfully!
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
                Thank you for reaching out! Your message has been sent successfully, and I will get back to you as soon as possible.
              </p>

              {/* Dismiss Button ("OK") */}
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="w-full rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white shadow-md shadow-primary-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/30 focus:outline-none dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                OK
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

Contact.propTypes = {};
