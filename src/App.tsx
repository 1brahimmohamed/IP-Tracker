import './style/App.css'
import MainLayout from "./ui/layouts/MainLayout.tsx";
import {Toaster} from 'react-hot-toast';

const App = () => {

    return (
        <>
            <MainLayout/>
            <Toaster position={"bottom-center"}/>
        </>
    )
}

export default App
