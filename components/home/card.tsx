import Image from "next/image";


const Card = () => {
    return (
        <div className="bg-gray-300 h-60 flex justify-center items-center">
            <Image
                width={200}
                height={200}
                src={'/profile.jpeg'}
                alt="Profile"
            />
        </div>
    );
}

export default Card;