
import { Filters, NewsFeed } from "@/features";
import "./style.css";

export default function Home() {


    return (
        <div className="home">

            <Filters />
            <NewsFeed />

        </div>
    );
}
