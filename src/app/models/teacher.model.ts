import { Activity } from "./activity.model";

export class Teacher {
    id?: number;
    firstName: string;
    lastName: string;
    description: string;
    activities: Activity[];
}

export const ACTIVITIES_TYPE = ['Football', 'Volleyball', 'Basketball', 'Tenis', 'Rugby'];

export class PaginatedTeachers {
    firstPages: number[];
    lastPages: number[];
    previousPages: number[];
    nextPages: number[];
    totalEntities: number;
    entities: Teacher[];
}
  