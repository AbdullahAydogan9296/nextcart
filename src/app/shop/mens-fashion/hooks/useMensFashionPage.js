import useShopPage from '@/app/shop/hooks/useShopPage';
import { categories } from '../utils/categories';

export default function useMensFashionPage() {
    return useShopPage(categories);
}