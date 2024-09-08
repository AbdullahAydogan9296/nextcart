import useShopPage from './useShopPage';
import { womensFashionCategories } from '@/utils/ShopPage/womensFashionCategories';

export default function useWomensFashionPage() {
    return useShopPage(womensFashionCategories);
}