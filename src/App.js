import { StartPage } from "./components/StartPage/StartPage";
import { Research } from "./components/Research/Research";
import { WorkLifeBalance } from "./components/WorkLifeBalance/WorkLifeBalance";
import { Protection } from "./components/Protection/Protection";
import { Spam } from "./components/Spam/Spam";
import { AdvertisementBlock } from "./components/AdvertisementBlock/AdvertisementBlock";

function App() {
    return (
        <div>
            <StartPage />
            <Research />
            <WorkLifeBalance />
            <Protection />
            <Spam />
            <AdvertisementBlock />
        </div>
    );
}

export default App;
