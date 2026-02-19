const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.getAttribute('data-target');

        views.forEach(view => view.classList.remove('active'));

        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
    });
});
