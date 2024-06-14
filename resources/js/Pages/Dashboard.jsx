import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Cinema from './Cinema/Cinemas'

export default function Dashboard({ auth, cinemas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Cinemas</h2>}
        >
            <Head title="Dashboard" />
            <div className='w-full'>
                    <h1 className="flex items-center text-5xl font-extrabold dark:text-black justify-center p-20">Cinemas<span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">PRO</span></h1>
                    <div className='flex justify-evenly'>
                        {cinemas && cinemas.map(cinema => (
                            <Cinema key={cinema.id} cinema={cinema} /> 
                        ))}
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
