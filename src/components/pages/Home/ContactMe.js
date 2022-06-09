import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="mb-32"
            class="hero mb-32"
        >
            <div class="hero-content grid gap-10 grid-cols-1 lg:grid-cols-5 p-0">
                <div class="text-center lg:text-left col-span-2">
                    <div className='mb-5'>
                        <h1 class="text-5xl font-semibold mb-5">Get in touch</h1>
                        <p class="text-xl leading-relaxed">Send me an email if you think I can help you out with any of your web related projects.</p>
                    </div>
                    <div>
                        <h1 class="text-5xl font-semibold mb-5">My socials</h1>
                        <div className='w-full grid grid-cols-3'>
                            <a href="https://github.com/Labib2003"><img className='hover:scale-110' src="images/icons/github.svg" alt="my GitHub" /></a>
                            <a href="https://www.linkedin.com/in/labib2003/"><img className='hover:scale-110' src="images/icons/linkedin.svg" alt="my LinkedIn" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100074531298092"><img className='hover:scale-110' src="images/icons/facebook.svg" alt="my Facebook" /></a>
                        </div>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100 col-span-3">
                    <form
                        action="https://formsubmit.co/labib.salimi30@gmail.com"
                        method="POST"
                        class="card-body"
                    >
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Email"
                                name="name"
                                class="input input-bordered"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                class="input input-bordered"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Body</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Your message"
                                name="message"
                                class="input input-bordered"
                            />
                        </div>
                        <div class="form-control mt-6">
                            <input type="submit" class="btn btn-primary" value="Send Email" />
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactMe;