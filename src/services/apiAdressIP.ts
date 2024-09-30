import axios from 'axios';
import toast from "react-hot-toast";
import {classifyInput} from "../utils/classifyUserInput.ts";



const API_URL = `${import.meta.env.VITE_API}?apiKey=${import.meta.env.VITE_API_KEY}`;


export const getDefaultIpAddress = async () => {

    try {
        const response =
            await axios.get(API_URL);

        return response.data;
    } catch (error) {
        toast.error('Error fetching data of IP address or domain');
    }

}

export const getAddressOrDomainInfo = async (inputValue) => {

    const type = classifyInput(inputValue);

    if (type === 'Unknown') {
        toast.error('Please enter a valid address or domain');
        return;
    }

    const apiExtensionString = type === 'IP Address' ? `ipAddress=${inputValue}` : `domain=${inputValue}`;

    try {
        const response = await axios.get(`${API_URL}&${apiExtensionString}`);
        return response.data;
    } catch (error) {
        toast.error('Error fetching data of IP address or domain');
    }
}
