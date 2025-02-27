
import { Filters, NewsFeed } from "@/features";
import "./style.css";

export default function Home() {


    return (
        <div className="home">
            <Filters />
            {/* News Article Posts */}
            <NewsFeed />

            <div className="footnotes">
                <span>This is a case study assignment done for joining innoscripta by Shayan Valiyari</span>
            </div>
        </div>
    );
}
