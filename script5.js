document.addEventListener("DOMContentLoaded", function() {
    const itemsList = document.getElementById('items');
    const sortBySelect = document.getElementById('sortby');

    // Function to sort items based on selected option
    function sortItems(sortBy) {
        const items = Array.from(itemsList.querySelectorAll('li'));

        if (sortBy === 'name') {
            // Show painting names
            items.forEach(item => {
                item.textContent = item.dataset.name;
            });
        } else if (sortBy === 'date') {
            // Show painting dates
            items.forEach(item => {
                item.textContent = item.dataset.date;
            });
        }
    }

    // Event listener for sort form change
    sortBySelect.addEventListener('change', function() {
        const sortBy = this.value;
        sortItems(sortBy);
    });

    // Initially sort based on selected option (default is empty)
    sortItems(sortBySelect.value);
});
