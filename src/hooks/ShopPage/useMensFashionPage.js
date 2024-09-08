import useShopPage from './useShopPage';
import { mensFashionCategories } from '@/utils/ShopPage/mensFashionCategories';

export default function useMensFashionPage() {
    return useShopPage(mensFashionCategories);
}