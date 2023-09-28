import { relatoriosHoras } from "@/constants/relatorios";
import RelatorioHorasModel from "@/models/RelatorioHorasModel";
import { createContext } from "react";
import {useState} from "react"

const UserContext = createContext({} as any)
export default UserContext

export const UserProvider = (props: any) => {

    const [relatorios, setrelatorios] = useState<RelatorioHorasModel[]>(relatoriosHoras);

    return (
        <UserContext.Provider value={{relatorios, setrelatorios}}>
            {props.children}
        </UserContext.Provider>
    )
}

