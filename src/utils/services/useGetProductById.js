import { useQuery } from '@tanstack/react-query';
import { api } from './api';

export const useGetProductById = (id) => {
    return useQuery({
        queryKey: ['productDetail', id],
        queryFn: () => api.getProductById(id).then(res => res.data),
        enabled: !!id,
    });
};
