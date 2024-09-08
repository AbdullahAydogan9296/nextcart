import useShopPage from './useShopPage';
import { cosmeticCategories } from '@/utils/ShopPage/cosmeticCategories';

export default function useCosmeticsPage() {
    return useShopPage(cosmeticCategories);
}