import { Time } from "@angular/common";

export interface ScheduleTimes {
    origin: string,
    destination: string,
    cost: string
}

export interface Schedule {
    id: number,
    origin: string,
    destination: string,
    note: string,
    img: string,
    price: string,
    depature: string,
    scheduleTimes: ScheduleTimes[],
    news?: string,
}
