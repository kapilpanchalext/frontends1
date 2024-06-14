import { TransactionData } from "./TransactionData"

export type PaginationData = {
    content: TransactionData []
    pageNumber: number
    pageSize: number
    totalElements: number
    first: boolean
    last: boolean
    totalPages: number
};