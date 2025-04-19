import { useQuery } from '@tanstack/react-query';
import { api } from './api';

export const useGetStoreData = () => {
    return useQuery({
        queryKey: ['storeData'],
        queryFn: async () => {
            const [productsRes, categoriesRes] = await Promise.all([
                api.getAllProducts(),
                api.getCategories(),
            ]);

            return {
                products: productsRes.data,
                categories: categoriesRes.data,
            };
        },
    });
};
