function App() {
    let myId = "this is waht we meant";
    let min = 7;

    return (
        <div className="wrapper">
            <h1>min is: {min}</h1>
            <textarea
                readOnly={false}
                maxLength={min}
                spellCheck
                style={{ backgroundColor: 'gray', color: 'blue' }}
            />
        </div>)
}

export default App;