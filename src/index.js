import './style.css';
import './about/about.css';
import './analytics/analytics.css';

let cursor = document.querySelector('.search__input');
let field = document.querySelector('.search__field');
document.addEventListener('click', function() {
    if(event.target.classList.value === 'search__input') {
        field.classList.add('search__field_active');
    } else {
        field.classList.remove('search__field_active');
    }
})
