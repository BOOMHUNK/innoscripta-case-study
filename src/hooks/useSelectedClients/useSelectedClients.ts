import { AvailableClients, ClientFactory } from "@/clients";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";


export default function useSelectedClients() {
    // Get the client names set from Redux state
    const clientsNames = useSelector((state: RootState) => state.news.clients);
    const clientsArray: ClientFactory<any>[] = [...clientsNames]
        .map((name) => AvailableClients[name as keyof typeof AvailableClients])
        .filter((client): client is ClientFactory<any> => Boolean(client)); // Ensure filtering out undefined values

    return clientsArray;
}