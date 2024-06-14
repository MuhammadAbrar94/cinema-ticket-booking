import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Bookings = ({ auth, bookings }) => {
  return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bookings</h2>}
    >
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>
        <table className="table-auto w-full rounded-lg shadow-md">
            <thead>
            <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 font-medium">Film</th>
                <th className="px-4 py-2 font-medium">Date & Time</th>
                <th className="px-4 py-2 font-medium">Seats</th>
                <th className="px-4 py-2 font-medium">Booking Reference</th>
            </tr>
            </thead>
            <tbody>
            {bookings?.length > 0 ? (
                bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-2">{booking.showtime.film.title}</td>
                    <td className="px-4 py-2">
                    {new Date(booking.showtime.start_time).toLocaleString()}
                    </td>
                    <td className="px-4 py-2">{booking.seats_booked}</td>
                    <td className="px-4 py-2">{booking.booking_reference}</td>
                </tr>
                ))
            ) : (
                <tr className="text-center">
                <td colSpan={4} className="py-4">
                    No bookings found
                </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    </AuthenticatedLayout>
  );
};

export default Bookings;
