import * as React from "react";

function App() {
    React.useEffect(() => {
        console.log('Hello world');
        console.log("ENV: ", process.env);
    }, []);
    return <div>Hello World! Welcome to React App with Webpack!</div>;
}

export default App;
