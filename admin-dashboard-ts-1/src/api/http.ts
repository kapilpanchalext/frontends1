export async function getUserById(id: string) {
    const response = await fetch(`http://localhost:9001/api/v1/get-users-by-id?userId=` + id);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getProducts() {
    const response = await fetch(`http://localhost:9001/api/v1/get-products`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getProductsStats() {
    const response = await fetch(`http://localhost:9001/api/v1/get-products-stats`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getUsers() {
    const response = await fetch(`http://localhost:9001/api/v1/get-users`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getTransactions() {
    const response = await fetch(`http://localhost:9001/api/v1/get-transactions`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getTransactionsPagination(page: number, size: number) {
    const response = await fetch(`http://localhost:9001/api/v1/get-transactions-pagination?page=${page}&size=${size}`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getChloroplethData() {
    const response = await fetch(`http://localhost:9001/api/v1/get-chloropleth-data`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getSales() {
    const response = await fetch(`http://localhost:9001/api/v1/get-sales`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getSalesPlotOverview() {
    const response = await fetch(`http://localhost:9001/api/v1/get-sales-plot-overview`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getUnitsPlotOverview() {
    const response = await fetch(`http://localhost:9001/api/v1/get-units-plot-overview`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getSalesPlotDaily(startDate: number, endDate: number) {
    const response = await fetch(`http://localhost:9001/api/v1/get-sales-plot-daily?startDate=${startDate}&endDate=${endDate}`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getUnitsPlotDaily(startDate: number, endDate: number) {
    const response = await fetch(`http://localhost:9001/api/v1/get-units-plot-daily?startDate=${startDate}&endDate=${endDate}`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getSalesPlotMonthly() {
    const response = await fetch(`http://localhost:9001/api/v1/get-sales-plot-monthly`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getUnitsPlotMonthly() {
    const response = await fetch(`http://localhost:9001/api/v1/get-units-plot-monthly`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getSalesByCategory() {
    const response = await fetch(`http://localhost:9001/api/v1/get-sales-by-category`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};

export async function getAffiliateSales() {
    const response = await fetch(`http://localhost:9001/api/v1/get-affiliate-sales`);

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error fetching data:', errorMessage);
        throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
};