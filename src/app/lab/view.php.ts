import '@styles/lab.scss';
import '@/components/snap-view';
import '@/components/cards';

import { SnapView } from '@/components';

document.addEventListener('DOMContentLoaded', () => {
    const testContainer = document.querySelector('#test_container') as SnapView;

    testContainer.addEventListener('snap', () => {
        console.log(testContainer.activeIndex);
    });
});