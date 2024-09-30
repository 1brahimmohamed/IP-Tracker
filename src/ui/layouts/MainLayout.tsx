import Header from "../components/Header.tsx";
import Map from "../../features/tracker/Map.tsx";
import Info from "../../features/tracker/Info.tsx";
import UserInput from "../../features/tracker/UserInput.tsx";
import {useEffect, useState} from "react";
import {getAddressOrDomainInfo, getDefaultIpAddress} from "../../services/apiAdressIP.ts";
import Loading from "../components/Loading.tsx";
import toast from "react-hot-toast";
import {classifyInput} from "../../utils/classifyUserInput.ts";

type TIPConfig = {
    ipInfo: {
        ip: string;
        location: string;
        timezone: string;
        isp: string;
    };
    location: {
        lat: number;
        lng: number;
    };
};

const initIPConfig: TIPConfig = {
    ipInfo: {
        ip: '',
        location: '',
        timezone: '',
        isp: ''
    },
    location: {
        lat: 0,
        lng: 0
    }
};

const MainLayout = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [ipConfig, setIpConfig] = useState<TIPConfig>(initIPConfig);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {

        // Function to fetch the current IP info
        const fetchDefaultIPConfig = async () => {

            // Set the loading state to true
            setIsLoading(true);

            // // Fetch the default IP address
            const data = await getDefaultIpAddress();

            // If the data is available, set the IP info
            if (data) {
                setIpConfig({
                    ipInfo: {
                        ip: data.ip,
                        location: `${data.location.region}, ${data.location.country} ${data.as.asn}`,
                        timezone: `UTC ${data.location.timezone}`,
                        isp: data.isp
                    },
                    location: {
                        lat: data.location.lat,
                        lng: data.location.lng
                    },
                });

            }
            // Set the loading state to false
            setIsLoading(false);
        };
        fetchDefaultIPConfig();
    }, []);

    if (isLoading) {
        return <Loading/>;
    }

    const location = [ipConfig.location.lat, ipConfig.location.lng];

    const handleSubmit = async () => {
        if (!inputValue || inputValue === '') {
            toast.error('Please enter an address or domain');
            return;
        }

        const type = classifyInput(inputValue);

        if (type === 'Unknown') {
            toast.error('Please enter a valid address or domain');
            return;
        }

        // Fetch the IP address info
        const data = await getAddressOrDomainInfo(inputValue);

        if (data) {
            setIpConfig({
                ipInfo: {
                    ip: data.ip,
                    location: `${data.location.region}, ${data.location.country} ${data.as.asn}`,
                    timezone: `UTC ${data.location.timezone}`,
                    isp: data.isp
                },
                location: {
                    lat: data.location.lat,
                    lng: data.location.lng
                },
            });
        }
    }

    return (
        <div className="relative flex flex-col h-[100vh]">

            <div className="h-1/3">
                <Header>
                    <UserInput inputValue={inputValue} setInputValue={setInputValue} submitHandler={handleSubmit}/>
                </Header>
            </div>

            <div className="h-2/3 w-auto bg-pink-400">
                <Map position={location}/>
            </div>

            {/* Overlay Div */}
            <div
                className="absolute -top-72  md:-top-44  z-10 inset-0 flex items-center justify-center pointer-events-none">
                <div className={"mx-10 w-full md:w-2/3 "}>
                    <Info ipInfo={ipConfig.ipInfo}/>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
