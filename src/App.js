import ProfileCard from "./ProfileCard";

function App() {
    let myId = "this is waht we meant";
    let min = 7;

    return (
        <div>
            <h1>Presonal Digital Assistants</h1>
            <ProfileCard title="siri" handle="apple" />
            <br />
            <ProfileCard title="cortana" handle="microsoft" />
            <br />
            <ProfileCard title="google assisstant" handle="google" />
        </div>)
}

export default App;