export function createCountryListMarkup({flags, name, capital, population, languages}) {
    const languagesStr = Object.values(languages).join(", ");
    return `<img class="country-item_flag" src="${flags.svg}" width="50px" height="30px" />
    <p class="country-item_name">${name.official}</p>
    <div class="description">
    <p>Capital: <span class="country-item_descr" >${capital}</span></p>
    <p>Population: <span class="country-item_descr">  ${population}</span></p>
    <p>Languages: <span class="country-item_descr" >${languagesStr}</span></p>
    </div>`;
};