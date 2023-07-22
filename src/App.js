import ProfileCard from "./ProfileCard";

function App() {
    const img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Christ_Pantocrator_mosaic_from_Hagia_Sophia_2744_x_2900_pixels_3.1_MB.jpg/210px-Christ_Pantocrator_mosaic_from_Hagia_Sophia_2744_x_2900_pixels_3.1_MB.jpg"
    const img2 = "https://upload.wikimedia.org/wikipedia/commons/2/21/Evangelist_Luka_pishustchiy_ikonu.jpg"
    const img3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Byzantine_-_Saint_Arethas_-_Walters_4820862.jpg/330px-Byzantine_-_Saint_Arethas_-_Walters_4820862.jpg"

    return (

        <div>
            <h1>Presonal Digital Assistants</h1>
            <ProfileCard title="siri" handle="apple" image={img1} />
            <br />
            <ProfileCard title="cortana" handle="microsoft" image={img2} />
            <br />
            <ProfileCard title="google assisstant" handle="google" image={img3} />
        </div>)
}

export default App;