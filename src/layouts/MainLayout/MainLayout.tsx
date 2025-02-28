import "./style.css";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <div className="main-layout">
    <div className="papernoise"></div>
    <h1 className="logo">NA</h1>
    <span className="title">News Aggregator</span>

    {children}

    <div className="footnotes">
      <span>This is a case study assignment for joining innoscripta done by <br />Shayan Valiyari</span>
    </div>
  </div>;
}
