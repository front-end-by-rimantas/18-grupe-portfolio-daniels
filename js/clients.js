const clientNumbers = document.querySelectorAll('.counter');
const speed = 600;
clientNumbers.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const loadSpeed = target / speed;

        if (count < target && target !== 9450) {
            counter.innerText = Math.ceil(count + loadSpeed);
            setTimeout(updateCount, 1)
        } if (count < target && target == 9450) {
            counter.innerText = Math.floor(count + loadSpeed);
            setTimeout(updateCount, 1)
        }
        else {
            count.innerText = target;
        }

    }
    updateCount();
});

export default clients;