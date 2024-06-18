import { TransactionData } from "./TransactionData"

export interface PaginationData {
    content: TransactionData []
    pageNumber: number
    pageSize: number
    totalElements: number
    first: boolean
    last: boolean
    totalPages: number
};