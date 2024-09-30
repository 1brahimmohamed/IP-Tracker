import {twMerge} from "tailwind-merge";

const stats = [
    {id: 1, name: 'IP Address', value: '192.212.174.101'},
    {id: 2, name: 'Location', value: 'Brooklyn, NY 10001'},
    {id: 3, name: 'Time Zone', value: 'UTC -05:00'},
    {id: 4, name: 'ISP', value: 'SpaceX Starlink'},
]

const generateInfoArr = (ipInfo) => {
    return [
        {id: 1, name: 'IP Address', value: ipInfo.ip},
        {id: 2, name: 'Location', value: ipInfo.location},
        {id: 3, name: 'Time Zone', value: ipInfo.timezone},
        {id: 4, name: 'ISP', value: ipInfo.isp},
    ]
}


const Info = ({ipInfo}) => {

    const info = ipInfo ? generateInfoArr(ipInfo) : stats;

    return (
        <div
            className={twMerge('h-72 w-full',
                'max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none',
                'mx-auto',
                'font-rubik'
            )}
        >

            <dl
                className={twMerge(
                    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5',
                    ' bg-white  rounded-3xl',
                    'text-center sm:text-left',
                    'overflow-hidden shadow-lg'
                )}
            >
                {info.map((ip) => (
                    <div
                        key={ip.id}
                        className={twMerge(
                            'flex w-full flex-col items-center sm:items-start justify-start',
                            'overflow-hidden bg-gray-400/5 p-4 sm:p-8',
                            'border-r-1 border-l-black'
                        )}
                    >
                        <dt className="text-xs tracking-widest uppercase font-medium leading-6 text-dark-gray mb-2">
                            {ip.name}
                        </dt>
                        <dd className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-medium text-gray-900">
                            {ip.value}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>


    )
}

export default Info
