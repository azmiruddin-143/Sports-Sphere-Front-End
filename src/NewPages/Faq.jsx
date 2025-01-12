import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (

        <div>
            <Link to="/" ><h1 className='max-w-2xl mx-auto font-bold bg-[#9dc923] w-fit py-2 px-5 rounded-md my-5'>Home Page</h1></Link>
            <div className="bg-white my-10 shadow-md rounded-lg p-6 max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">FAQs</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium text-gray-700">1. How do I register for a sports event?</h3>
                        <p className="text-sm text-gray-600">
                            You can register for sports events by visiting the Events section of our website and filling out the registration form.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-700">2. What payment methods do you accept?</h3>
                        <p className="text-sm text-gray-600">
                            We accept credit/debit cards, MasterCard, and mobile banking.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-700">3. How can I check my event schedule?</h3>
                        <p className="text-sm text-gray-600">
                            Log in to your account and navigate to the "My Schedule" section to view your registered events.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;