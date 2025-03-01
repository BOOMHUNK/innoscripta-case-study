
import { SearchSection, NewsFeed } from "@/features";
import "./style.css";
export default function Home() {
    return (
        <div className="home">
            <SearchSection />
            <NewsFeed />
        </div>
    );
}
