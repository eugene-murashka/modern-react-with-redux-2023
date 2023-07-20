import { GoBell, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
    return (
        <div>
      <div>
        <Button secondary rounded outline>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
    );
}

export default App;
