export class Activity {
    id?: number;
    name: string;
    description: string;

}

export class PaginatedActivities {
    firstPages: number[];
    lastPages: number[];
    previousPages: number[];
    nextPages: number[];
    totalEntities: number;
    entities: Activity[];
}
  