window.onclick = (event) => {
    document.querySelectorAll('.modal').forEach((element) => {
        if (event.target === element) {
            element.style.display = 'none';
        }
    });
};
