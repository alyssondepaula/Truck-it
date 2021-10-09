export type TGpsData = {
    accOn: string;
    total_time: number;
    total_distance: number;
    speed_max: number;
    speed_avg: number;
    num_courses: number;
    stops: number;
    total_stop_time: number;
    perc_fixed: number;
    gps_count: number;
    courses: TCourses[];
    vehicle: TVehicle;
}

 type TCourses = {

    start_at: string;
    end_at: string;
    distance: number;
    speed_max: number;
    stops: number;
    total_stop_time: number;
    stop_points: TStopPoints;
    gps_count: number;
    duration: number;
    speed_avg: number;
    gps: TGps[];
    
}

 type TStopPoints = {

    type: string;
    crs: TCrs;
    coordinates: any[][];
    
}

 type TCrs = {

    type: string;
    properties: TProperties;
    
}

 type TProperties = {

    name: string;

}

 type TGps = {

    longitude: number;
    latitude: number;
    acquisition_time_unix: number;
    speed: number;
    direction: number;
    acquisition_time: string;
    address?: string;

}

 type TVehicle = {
    plate: string;
    vin: string;
    color: string;
    picture: TPicture;

}

 type TPicture = {
    address: string;
}