import Card from "./card";

const Home = () => {

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                [1, 2, 3, 4, 5, 6].map((item, index) => {
                    return <Card key={index} />
                })
            }
        </div>
    );
}

export default Home;