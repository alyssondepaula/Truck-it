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

export type TCourses = {

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

export type TStopPoints = {

    type: string;
    crs: TCrs;
    coordinates: any[][];
    
}

export type TCrs = {

    type: string;
    properties: TProperties;
    
}

export type TProperties = {

    name: string;

}

export type TGps = {

    longitude: number;
    latitude: number;
    acquisition_time_unix: number;
    speed: number;
    direction: number;
    acquisition_time: string;
    address?: string;

}

export type TVehicle = {
    plate: string;
    vin: string;
    color: string;
    picture: TPicture;

}

export type TPicture = {
    address: string;
}