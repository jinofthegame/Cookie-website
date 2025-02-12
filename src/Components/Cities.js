"use client"
import { useState } from "react";

const City = (props) => {
    const { title } = props;
    let [city, setCity] = useState(1);

    const KTM = () => {
        setCity(city = "https://imgs.search.brave.com/unsJwGXPofz0kNUDLFBuNMtjp7AAZUQW4szID76pnMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE2/MjQyODA0L3Bob3Rv/L2JvdWRoYW5hdGgt/c3R1cGEta2F0aG1h/bmR1LW5lcGFsLWZl/YnJ1YXJ5LTI3LTIw/MTcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUg4dU9QNFJM/TEpYd21HREV4d2V5/RGdlb2FiUUZFd0df/Z2Z5NVFtSGtXSjQ9");
    };

    const LIT = () => {
        setCity(city = "https://media.gettyimages.com/id/1207251582/photo/religious-buildings-at-sunset-overlooking-the-himalayas.jpg?s=612x612&w=0&k=20&c=EmrXqN4o4_38-fKWV45tFQUhCSZlWtlevnTjqSV7Mgg=");
    };
    const BHT = () => {
        setCity(city = "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2017/08/IMG_4336.jpg?resize=1000,1500&ssl=1");
    };
    return (
        <div>
            <h1 className="text-6xl"> City:</h1>
            <img src={city}></img>
            <button
                className="mt-4 bg-gray-600 text-white px-3 py-2 rounded-lg"
                onClick={KTM}
            >
                KTM
            </button>

            <button
                className="mt-4 bg-gray-600 text-white px-3 py-2 rounded-lg"
                onClick={LIT}
            >
                LIT
            </button>

            <button
                className="mt-4 bg-gray-600 text-white px-3 py-2 rounded-lg"
                onClick={BHT}
            >
                BHT
            </button>
        </div>
    );
};
export default City;
