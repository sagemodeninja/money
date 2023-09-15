import '@/components/wallet-card';

document.addEventListener('DOMContentLoaded', () => {
    const testContainer = document.querySelector('#test_container');
    const forwardBtn = document.querySelector('#forward');
    const backwardBtn = document.querySelector('#backward');

    const {width} = testContainer.getBoundingClientRect();

    let index = 0;

    testContainer.addEventListener('scroll', () => {
        console.log(1);
        const left = testContainer.scrollLeft;
        index = Math.round(left / width);
    });

    forwardBtn.addEventListener('click', () => {
        index += 1;
        goToIndex(index);
    });

    backwardBtn.addEventListener('click', () => {
        index -= 1;
        goToIndex(index);
    });

    function goToIndex(index: number) {
        testContainer.scrollTo({
            left: index * width,
            behavior: 'smooth'
        })
    }
});