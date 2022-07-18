const chart = document.querySelector('#chart').getContext('2d');
//Create a new chart  instance
new Chart(chart, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                    label: 'BTC',
                    data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004, 60000],
                    borderColor: 'red',
                    borderWidth: 2
                },
                {
                    label: 'ETH',
                    data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36864, 40000],
                    borderColor: 'blue',
                    borderWidth: 2
                },

            ]
        },
        options: {
            responive: true
        }

    })
    //Show and Hide Aside Bar
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideBar = document.querySelector("aside");
const menuItems = document.querySelectorAll(".menu-item");
menuBtn.addEventListener("click", () => {
    sideBar.style.display = 'block';

});
closeBtn.addEventListener("click", () => {
    sideBar.style.display = 'none';
    // sideBar.style.animation = 'fade';
});

const removeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        removeActive();
        item.classList.add('active');
    });
});
//Change Theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");

    themeBtn.querySelector('span:nth-child(1)').classList.toggle('active');
    themeBtn.querySelector('span:nth-child(2)').classList.toggle('active');
})