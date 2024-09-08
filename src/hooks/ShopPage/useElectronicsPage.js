import useShopPage from './useShopPage';
import { electonicsCategories } from '@/utils/ShopPage/electonicsCategories';

export default function useElectronicsPage() {
    return useShopPage(electonicsCategories);
}
