import '@/components/wallet-card';
import '@/components/snap-view';
import '@/components/cards/account-card';
import { SnapView } from '@/components/snap-view';

document.addEventListener('DOMContentLoaded', () => {
    const testContainer = document.querySelector('#test_container') as SnapView;

    testContainer.addEventListener('snap', () => {
        console.log(testContainer.activeIndex);
    });
});