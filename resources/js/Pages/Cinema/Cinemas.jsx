import { Link } from '@inertiajs/react';

export default function Cinema({ cinema }) {

    return (
        <>
            <div key={cinema.id}>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <svg className='w-44' fill="grey" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.442 197.442" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M186.696,83.902H40.775l136.473-49.707c1.246-0.454,2.261-1.384,2.821-2.586c0.56-1.202,0.62-2.577,0.166-3.823 l-8.923-24.497c-0.945-2.596-3.815-3.928-6.409-2.987L9.035,57.074c-1.246,0.454-2.26,1.384-2.821,2.586 c-0.56,1.202-0.62,2.577-0.166,3.823l8.922,24.496c0.159,0.436,0.381,0.828,0.638,1.188v103.275c0,2.762,2.239,5,5,5h166.088 c2.762,0,5-2.238,5-5v-77.469V88.902C191.696,86.14,189.458,83.902,186.696,83.902z M166.123,18.262l3.005,8.248l-4.662,1.698 L166.123,18.262z M128.872,24.068l19.34-7.044l-3.034,18.209l-19.34,7.044L128.872,24.068z M90.245,38.137l19.339-7.044 l-3.034,18.209l-19.339,7.044L90.245,38.137z M51.617,52.207l19.339-7.044l-3.034,18.208l-19.338,7.044L51.617,52.207z M32.328,59.233l-3.034,18.208l-6.638,2.418l-5.5-15.1L32.328,59.233z M32.876,109.973h-7.065V93.902h16.148L32.876,109.973z M73.986,109.973H53.405l9.083-16.071h20.582L73.986,109.973z M115.097,109.973H94.515l9.082-16.071h20.583L115.097,109.973z M156.208,109.973h-20.583l9.083-16.071h20.583L156.208,109.973z M181.696,109.973h-4.961l4.961-8.778V109.973z"></path> </g></svg>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white cursor-pointer">
                        <Link
                            href={route('cinemas.show', { id: cinema.id})}
                        >
                            {cinema.name}
                        </Link>
                    </h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">The best cinema you can find. The experience of the life.</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        {cinema.location}
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}
