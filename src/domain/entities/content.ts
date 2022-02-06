
export interface IContent<T> {
    lastSearched: string;
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T;
}