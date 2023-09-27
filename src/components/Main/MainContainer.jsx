import Sidebar from "./Sidebar";


const MainContainer = ({children}) => {
    return ( 
        <div className="w-screen">
            <Sidebar />
            <div className="w-4/5 ml-auto">{children}</div>
        </div>
    );
}
 
export default MainContainer;