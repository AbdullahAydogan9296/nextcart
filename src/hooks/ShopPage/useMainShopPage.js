import useShopPage from './useShopPage';
import { categories } from '@/utils/ShopPage/categories';

export default function useMainShopPage() {
    return useShopPage(categories);
}
