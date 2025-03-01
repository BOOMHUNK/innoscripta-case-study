import { ClientFactory } from "@/clients";
import { AvailableClients } from "@/configs";
import { RootState } from "@/store/store";

import { useSelector } from "react-redux";


export default function useSelectedClients() {
    // Get the client names set from Redux state
    const clientsNames = useSelector((state: RootState) => state.news.clients);
    const clientsArray: ClientFactory[] = [...clientsNames]
        .map((name) => AvailableClients[name])
        .filter((client): client is ClientFactory => Boolean(client)); // Ensure filtering out undefined values

    // console.log(clientsArray);

    return clientsArray;
}