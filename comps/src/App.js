import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button success>Button_1</Button>
            </div>
            <div>
                <Button primary>Button_2</Button>
            </div>
            <div>
                <Button secondary>Button_3</Button>
            </div>
            <div>
                <Button danger>Button_4</Button>
            </div>
            <div>
                <Button warning>Button_5</Button>
            </div>
        </div>
    );
}

export default App;
