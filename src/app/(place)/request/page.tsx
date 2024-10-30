

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import * as motion from 'framer-motion/client'
import ContactForm from "@/page/contact-form"

const Contact = () => {
  return (
    <motion.section
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] items-start">
          <div className="w-full max-w-7xl order-2 lg:order-none">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact