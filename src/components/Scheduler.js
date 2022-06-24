export function Scheduler() {
    return (
        <div className="scheduler">
            <div id="pointer">
                <p>
                    <span className="demo">SCHEDULE A DEMO</span>
                    <span>More About FloQast</span>
                </p>
            </div>
            <div className="learn">
                <span className="grey">Learn How FloQast Can </span>
                <span className="green">Improve Your Month-End</span>
                <div className="form">
                    <input className="left" placeholder="First Name*" />
                    <input placeholder="Email*" />
                    <button>SCHEDULE NOW</button>
                </div>
            </div>
        </div>
    );
}
