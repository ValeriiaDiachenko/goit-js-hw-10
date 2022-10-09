import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { createCountryInfoMarkup } from './createCountryInfoMarkup';
import { createCountryListMarkup } from './createCountryListMarkup';

const DEBOUNCE_DELAY = 300;
const refs = {
    searchBox: document.querySelector("#search-box"),
    countryList: document.querySelector(".js-country-list"),
    countryInfo: document.querySelector(".js-country-info")
};

refs.searchBox.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
    const value = event.target.value.trim();
    if (value === "") {
        clearMarkup();
        return;
    }
    fetchCountries(value).then(inputData).catch(onError);
};

function inputData(data) {
    if (data.length > 10) {
        clearMarkup();
        onTooMany();
        return;
    } else if (data.length === 1) {
        onCountryInfo(data[0]);
        return;
    } else {
        onCountryList(data);
    }
};

function onTooMany() {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
};
 
function clearMarkup() {
    refs.countryList.innerHTML = "";
    refs.countryInfo.innerHTML = "";
};

function onError() {
    clearMarkup();
    Notiflix.Notify.failure("Oops, there is no country with that name");
};

function onCountryInfo(data) {
    clearMarkup();
    const markup = data.map(createCountryInfoMarkup).join("");
    refs.countryInfo.innerHTML = markup;
};

function onCountryList(data) {
    clearMarkup();
    const markup = data.map(createCountryListMarkup).join("");
    refs.countryList.innerHTML = markup;
};
