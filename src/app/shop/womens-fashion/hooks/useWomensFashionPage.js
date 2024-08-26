import useShopPage from '@/app/shop/hooks/useShopPage';
import { categories } from '../utils/categories';

export default function useWomensFashionPage() {
    return useShopPage(categories);
}