import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {twMerge} from 'tailwind-merge'

const UserInput = ({inputValue, setInputValue, submitHandler}) => {

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <h1
                className={twMerge(
                    'text-white text-3xl md:text-4xl text-center',
                    'font-medium, font-rubik'
                )}
            >
                IP Address Tracker
            </h1>

            <div className="mt-5 flex rounded-2xl w-full sm:w-1/2 lg:w-1/3">
                <div className="relative flex flex-grow items-stretch">
                    <input
                        id="ip"
                        name="ip"
                        type="text"
                        placeholder="Search for any IP address or domain"
                        value={inputValue}
                        onChange={handleInputChange}
                        className={twMerge(
                            'block w-full flex-grow ',
                            'rounded-none rounded-l-2xl border-0 ',
                            'text-black sm:text-lg placeholder:text-gray-400 font-rubik',
                            'sm:leading-3 py-1.5 pl-5',
                            'focus:outline-none',
                        )}
                    />
                </div>
                <button
                    type="button"
                    onClick={submitHandler}
                    className={twMerge(
                        "relative -ml-px flex justify-center items-center",
                        "bg-black rounded-r-2xl px-3 py-3 text-xs font-semibold text-white",
                        "hover:bg-very-dark-gray",
                    )}
                >
                    <KeyboardArrowRightIcon/>
                </button>
            </div>

            <div className={"mt-36 md:mt-20 "}>

            </div>
        </>
    )
}

export default UserInput;
