import React from 'react';

const ContactMe = () => {
    return (
        <div class="hero mb-32">
            <div class="hero-content grid gap-10 grid-cols-1 lg:grid-cols-3">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-semibold mb-5">Get in touch</h1>
                    <p class="text-xl leading-relaxed">Send me an email if you think I can help you out with any of your web related projects.</p>
                </div>
                <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100 col-span-2">
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
                            <input type="submit" class="btn btn-primary" value="Send Email"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;