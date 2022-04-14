"use strict";

//declare global vars here
let divGlobalData;
let slcCountries;
let divCountriesImages;
let divCountryData;
let jsonCountriesData;
const apiUrl = 'https://howest-gp-wfa.github.io/oe-JSON-CovidData/api/covid.json';
//wait for document load
window.addEventListener('load',initialize);

function initialize()
{
    bindElements();
    addEventListeners();
    loadCountriesFromJson();
    fillCountriesList();
}

function bindElements()
{
    divGlobalData = document.querySelector('#divGlobalData');
    divCountriesImages = document.querySelector('#divCountriesImages');
    divCountryData = document.querySelector('#divCountryData');
    slcCountries = document.querySelector('#slcCountries'); 
}

function fillCountriesList(data)
{
    //fill the selectlist with the countries
}

function addEventListeners()
{
    slcCountries.addEventListener('change',ShowCountryData);
}

async function loadCountriesFromJson()
{
    //load the countries data from covid.js into jsonCountriesData
    
    //or from github page 
    
}

async function loadCountriesFromFetch(url)
{
     //use fetch to load data and return it   
}

function showCountryData()
{
    //show the selected country data
}


