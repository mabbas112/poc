import CeSdk from "../ceSdk";
import Card from "./card";

const Home = () => {

    const config = {
        license: "",
        baseURL: ''
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                [1, 2, 3, 4, 5, 6].map((item, index) => {
                    return <Card key={index} />
                })
            }
            <CeSdk config={config} />
        </div>
    );
}

export default Home;