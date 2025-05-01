export type EventItem = {
    id: number;
    title: string;
    description: string;
};

export type TimeSlice = {
    id: number;
    label: string;
    stats: string;
    events: EventItem[] | any;
};