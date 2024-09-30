
const Header = ({children}) => {
    return (
        <header className={`h-full bg-center imageBg flex-col justify-start`}>
            <div className="flex flex-col items-center justify-center p-4 h-full mx-7">
                {children}
            </div>
        </header>
    );
}

export default Header;
