"use strict";

//declare global vars here
var divGlobalData;
var slcCountries;
var divCountriesImages;
var divCountryData;
var JsonCountriesData;
const apiUrl = 'https://howest-gp-wfa.github.io/oe-JSON-CovidData/api/covid.json';
//wait for document load
window.addEventListener('load',Initialize);

function Initialize()
{
    BindElements();
    AddEventListeners();
    LoadCountriesFromJson();
    FillCountriesList();
}

function BindElements()
{
    divGlobalData = document.querySelector('#divGlobalData');
    divCountriesImages = document.querySelector('#divCountriesImages');
    divCountryData = document.querySelector('#divCountryData');
    slcCountries = document.querySelector('#slcCountries'); 
}

function FillCountriesList(data)
{
    //fill the selectlist with the countries
}

function AddEventListeners()
{
    slcCountries.addEventListener('change',ShowCountryData);
}

async function LoadCountriesFromJson()
{
    //load the countries data from covid.js into JsonCountriesData
    
    //or from github page 
    
}

async function LoadCountriesFromFetch(url)
{
     //use fetch to load data and return it   
}

function ShowCountryData()
{
    //show the selected country data
}


