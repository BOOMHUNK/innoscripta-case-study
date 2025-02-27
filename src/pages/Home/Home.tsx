
import { NewsFeed } from "@/features";
import "./style.css";

export default function Home() {
 

    return (
        <div className="home">
            {/* News Article Posts */}
            <NewsFeed />
        </div>
    );
}
