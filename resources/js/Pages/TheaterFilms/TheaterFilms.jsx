import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import BookingModal from '@/Components/BookingModal';

export default function Cinema({ auth, cinema }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedShowTimeId, setSelectedShowTimeId] = useState(null);
    const [remainingSeats, setremainingSeats] = useState(null);

    // Function to open modal and set selected show time id
    const openModal = (showTimeId, seats) => {
        setSelectedShowTimeId(showTimeId);
        setremainingSeats(seats);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setSelectedShowTimeId(null);
        setIsModalOpen(false);
    };

    const cinemaContent = (
        <div className="container mx-auto px-4 py-8">
            {/* Cinema Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-center">{cinema?.name}</h1>
                {/* Add location or other details here if needed */}
            </div>

            {/* Theaters & Films Table */}
            <table className="table-auto w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Theater</th>
                        <th className="px-4 py-2 text-left">Films</th>
                        <th className="px-4 py-2 text-left">Showtimes</th>
                    </tr>
                </thead>
                <tbody>
                    {cinema?.theaters?.map(theater => (
                        <tr key={theater.id} className="border-b border-gray-300">
                            <td className="px-4 py-2">{theater.id}</td>
                            <td className="px-4 py-2">
                                {theater.films?.length > 0 ? (
                                    <ul className="list-disc pl-2 mt-1 text-sm">
                                        {theater.films.map(film => (
                                            <li key={film.id} className="pb-7">{film.title}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>No films available</span>
                                )}
                            </td>
                            <td className="px-4 py-2">
                                {theater.films?.flatMap(film =>
                                    film.show_times?.map(show_time => (
                                        <div key={show_time.id} className="mb-2 flex justify-between">
                                            <span className="mr-2">{show_time.start_time}</span>
                                            <button
                                                onClick={() => openModal(show_time.id, show_time.remaining_seats)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    ))
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Trigger Button */}
            <BookingModal
                auth={auth}
                isOpen={isModalOpen}
                onClose={closeModal}
                showTimeId={selectedShowTimeId}
                remainingSeats={remainingSeats}
            />
        </div>
    );

    return auth.user ? (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Cinemas</h2>}
        >
            {cinemaContent}
        </AuthenticatedLayout>
    ) : (
        cinemaContent
    );
}
