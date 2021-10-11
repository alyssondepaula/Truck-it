import { useState } from "react";
import { Box } from "../../../components/Box";
import Map from "../../../components/Map";
import { TCourses } from "../../../types_interfaces/gpsData";

export function Home() {

    const [selectedCourse, setSelectedCourse] = useState<TCourses | null>(null);
    

    return (
        <>
        <Box setSelectedCourse={setSelectedCourse} selectedCourse={selectedCourse} />
        <Map selectedCourse={selectedCourse} />
        </>
    );
    
}