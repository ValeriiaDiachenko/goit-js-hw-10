export function createCountryInfoMarkup({flags, name}) {
    return `<li class="country-item">
    <img class="country-item_flag" src="${flags.svg}" width="30px" height="20px" />
    <p class="country-item_name">${name.official}</p>
    </li>`;
};    

