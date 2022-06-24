import "./App.css";
import { Banner } from "./components/Banner";
import { Scheduler } from "./components/Scheduler";
import { Tagline } from "./components/Tagline";

function App() {
    return (
        <div className="App">
            <main className="container-fluid row">
                <Banner />
                <Tagline />
                <Scheduler />
            </main>
        </div>
    );
}

export default App;
