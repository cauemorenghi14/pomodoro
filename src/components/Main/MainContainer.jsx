import Sidebar from "./Sidebar";


const MainContainer = ({children}) => {
    return ( 
        <>
            <Sidebar />
            <div>{children}</div>
        </>
    );
}
 
export default MainContainer;