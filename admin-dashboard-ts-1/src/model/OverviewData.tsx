import { DailyData } from "./DailyData";
import { MonthlyData } from "./MonthlyData";

export interface OverViewData {
    id: string
    productId: string
    totalCustomers: number
    yearlySalesTotal: number
    yearlyTotalSoldUnits: number
    year: number
    monthlyData: MonthlyData []
    dailyData: DailyData[]
};