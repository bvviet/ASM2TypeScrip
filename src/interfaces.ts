export interface IStation {
    _id: string;
    name: string;
    province: string;
}

export interface busHouseId {
    _id: string;
    stations: IStation;
    name: string;
    address: string;
    phone: string;
}

export interface ITrip {
    _id: string;
    fromStations: IStation;
    toStations: IStation;
    startTime: string;
    seats: number;
    price: number;
    busHouseId: busHouseId;
}
