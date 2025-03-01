import { ClientFactory } from "@/clients";
import { AvailableClients } from "@/configs";
import { RootState } from "@/store/store";

import { useSelector } from "react-redux";


/**
 * Retrieves the list of selected clients from the Redux state.
 * 
 * @returns {ClientFactory[]} An array of `ClientFactory` objects representing the selected clients.
 */
export default function useSelectedClients(): ClientFactory[] {
    // Get the client names set from Redux state
    const clientsNames = useSelector((state: RootState) => state.preferences.clients);
    const clientsArray: ClientFactory[] = [...clientsNames]
        .map((name) => AvailableClients[name])
        .filter((client): client is ClientFactory => Boolean(client)); // Ensure filtering out undefined values

    return clientsArray;
}