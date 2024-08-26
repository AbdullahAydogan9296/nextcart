import useShopPage from '@/app/shop/hooks/useShopPage';
import { categories } from '../utils/categories';

export default function useMainShopPage() {
    return useShopPage(categories);
}
