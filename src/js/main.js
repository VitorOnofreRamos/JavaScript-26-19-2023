/*
    //Criar Elemento
    const dogItem = document.createElement('li');
    dogItem.textContent = 'Dog'

    //Criar Elemento Dentro de Elemento
    const span = document.createElement('span');
    span.textContent = 'Cat'
    
    const catItem = document.createElement('li');
    catItem.append(span)

    list.append(catItem, dogItem);
*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const animals = [
        'Cat',
        'Dog',
        'Penguim',
        'Bear',
    ];

    //animals.push('Dolphin');

    const animalsMap = animals.map((item) => {
        const li = document.createElement('li');
        li.textContent = item
        return li
    });

    const list = document.querySelector('.js-list');

    animalsMap.forEach((item) => {
        list.append(item)
    });

    // forEach
    /*animals.forEach((item) => {
        const span = document.createElement('span');
        span.textContent = item
        
        const li = document.createElement('li');
        li.append(span)

        list.append(li);
    });*/


    // For
    /*for(let i = 0; i < animals.length; i++){
        const li = document.createElement('li');
        li.textContent = animals[i];

        list.append(li);
    }*/

});