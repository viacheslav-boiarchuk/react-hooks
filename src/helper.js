/**
 * function which create unique ID for person
 */

function createId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * function which create persons list
 */

export function createPersonsList() {
    let personsList = [
        {name:'Antony'},
        {name:'Simon'},
        {name:'O\'Really'},
        {name:'Mike'},
        {name:'Kristine'},
        {name:'Kimberly'},
        {name:'Cole'}
    ];

    personsList.map((item) => {
        item['uniqueId'] = createId();
    });

    return personsList;
}