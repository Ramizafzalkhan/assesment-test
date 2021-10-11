import React from 'react'

function Footer() {
    return (
        <>
        <div className="container mx-auto pt-24">
            <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <h2 className="text-4xl mb-12">Contact Us</h2>
                    <div className="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon-mail" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h6 className="font-bold text-white">Email</h6>
                            <p>contactlorem@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className="text-4xl mb-12">Signup for Updates</h2>
                    <p className="text-center">For latest news and update please enter your email address </p>
                    <div className="flex justify-between bg-white p-2.5 border rounded-3xl mt-8">
                        <input type="text" name="" placeholder="Enter Your Email" />
                        <button className="btn btn-default text-white font-bold">
                        Subscribe
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl mb-12">Social Media</h2>
                    <div className="flex">
                        <svg width="20" height="17" className="mr-2" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9297 4.4375C18.7109 3.85156 19.4141 3.14844 19.9609 2.32812C19.2578 2.64062 18.4375 2.875 17.6172 2.95312C18.4766 2.44531 19.1016 1.66406 19.4141 0.6875C18.6328 1.15625 17.7344 1.50781 16.8359 1.70312C16.0547 0.882812 15 0.414062 13.8281 0.414062C11.5625 0.414062 9.72656 2.25 9.72656 4.51562C9.72656 4.82812 9.76562 5.14062 9.84375 5.45312C6.44531 5.25781 3.39844 3.61719 1.36719 1.15625C1.01562 1.74219 0.820312 2.44531 0.820312 3.22656C0.820312 4.63281 1.52344 5.88281 2.65625 6.625C1.99219 6.58594 1.32812 6.42969 0.78125 6.11719V6.15625C0.78125 8.14844 2.1875 9.78906 4.0625 10.1797C3.75 10.2578 3.35938 10.3359 3.00781 10.3359C2.73438 10.3359 2.5 10.2969 2.22656 10.2578C2.73438 11.8984 4.25781 13.0703 6.05469 13.1094C4.64844 14.2031 2.89062 14.8672 0.976562 14.8672C0.625 14.8672 0.3125 14.8281 0 14.7891C1.79688 15.9609 3.94531 16.625 6.28906 16.625C13.8281 16.625 17.9297 10.4141 17.9297 4.98438C17.9297 4.78906 17.9297 4.63281 17.9297 4.4375Z" fill="#818182" />
                        </svg>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.75 5.00781C7.25 5.00781 5.25781 7.03906 5.25781 9.5C5.25781 12 7.25 13.9922 9.75 13.9922C12.2109 13.9922 14.2422 12 14.2422 9.5C14.2422 7.03906 12.2109 5.00781 9.75 5.00781ZM9.75 12.4297C8.14844 12.4297 6.82031 11.1406 6.82031 9.5C6.82031 7.89844 8.10938 6.60938 9.75 6.60938C11.3516 6.60938 12.6406 7.89844 12.6406 9.5C12.6406 11.1406 11.3516 12.4297 9.75 12.4297ZM15.4531 4.85156C15.4531 4.26562 14.9844 3.79688 14.3984 3.79688C13.8125 3.79688 13.3438 4.26562 13.3438 4.85156C13.3438 5.4375 13.8125 5.90625 14.3984 5.90625C14.9844 5.90625 15.4531 5.4375 15.4531 4.85156ZM18.4219 5.90625C18.3438 4.5 18.0312 3.25 17.0156 2.23438C16 1.21875 14.75 0.90625 13.3438 0.828125C11.8984 0.75 7.5625 0.75 6.11719 0.828125C4.71094 0.90625 3.5 1.21875 2.44531 2.23438C1.42969 3.25 1.11719 4.5 1.03906 5.90625C0.960938 7.35156 0.960938 11.6875 1.03906 13.1328C1.11719 14.5391 1.42969 15.75 2.44531 16.8047C3.5 17.8203 4.71094 18.1328 6.11719 18.2109C7.5625 18.2891 11.8984 18.2891 13.3438 18.2109C14.75 18.1328 16 17.8203 17.0156 16.8047C18.0312 15.75 18.3438 14.5391 18.4219 13.1328C18.5 11.6875 18.5 7.35156 18.4219 5.90625ZM16.5469 14.6562C16.2734 15.4375 15.6484 16.0234 14.9062 16.3359C13.7344 16.8047 11 16.6875 9.75 16.6875C8.46094 16.6875 5.72656 16.8047 4.59375 16.3359C3.8125 16.0234 3.22656 15.4375 2.91406 14.6562C2.44531 13.5234 2.5625 10.7891 2.5625 9.5C2.5625 8.25 2.44531 5.51562 2.91406 4.34375C3.22656 3.60156 3.8125 3.01562 4.59375 2.70312C5.72656 2.23438 8.46094 2.35156 9.75 2.35156C11 2.35156 13.7344 2.23438 14.9062 2.70312C15.6484 2.97656 16.2344 3.60156 16.5469 4.34375C17.0156 5.51562 16.8984 8.25 16.8984 9.5C16.8984 10.7891 17.0156 13.5234 16.5469 14.6562Z" fill="#818182" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
            <hr style={{background:"#C4C4C4"}} />
            <div className="container mx-auto pt-5">
                 <div class="grid grid-cols-1 gap-4 mb-4 text-center">
                     <p>2021 © Lorem Ipsum. All rights reserved.</p>
                </div>
            </div>
            </>
    )
}

export default Footer
