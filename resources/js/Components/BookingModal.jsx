import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const BookingModal = ({ auth, isOpen, onClose, showTimeId, remainingSeats }) => {
    if (!isOpen) return null;
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <>
            {auth.user ? (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                            <div className="flex flex-col items-center space-y-4">
                                <label htmlFor="slider" className="text-lg font-semibold">
                                    Selected Number of Tickets: <span className="text-blue-500">{value}</span>
                                </label>
                                <input
                                    id="slider"
                                    type="range"
                                    min="0"
                                    max={remainingSeats}
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                />
                            </div>
                            <div className="mt-4 flex justify-evenly">
                                <Link
                                    href={route('booking.create', { id: showTimeId, seats_booked: value})}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                                >
                                    Book
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                                >
                                    Close
                                </button>
                                {/* Add booking confirmation button */}
                            </div>
                        </div>
                    </div>) 
                : (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <div>Please 
                                <Link href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:gray-600 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"

                                >
                                &nbsp;Log in&nbsp;
                                </Link>
                                or 
                                <Link href={route('register')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:gray-600 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                &nbsp;Register&nbsp;
                                </Link> 
                                to book the tickets</div>
                                <div className="mt-4 flex justify-end">
                                    <button
                                    onClick={onClose}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                                >
                                    Close
                                </button>
                                {/* Add booking confirmation button */}
                            </div>
                        </div>
                    </div>
                )}

        </>
    );
};

export default BookingModal;
