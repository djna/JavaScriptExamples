
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import fs from 'fs';

var csvFile = fs.openSync('shadows.csv', 'w');

const { JSDOM } = jsdom;

const response = await fetch('http://goran.tangring.com/index-filer/backings.htm');
const body = await response.text();

let dom = new JSDOM(body);

let rows = dom.window.document.querySelectorAll("#AutoNumber1 tr");
Array.from(rows).forEach(( row, rindex) => {
    
    let backingTrackAnchor = row.cells[0].getElementsByTagName("a"); 
    let tabAnchor = row.cells[2].getElementsByTagName("a");
    let chordsAnchor = row.cells[3].getElementsByTagName("a");
    let performanceAnchor = row.cells[4].getElementsByTagName("a");;

    let title;
    let backingTrack = "";
    let tab = "";
    let chords = "";
    let performance ="";

    if(backingTrackAnchor.length > 0 ) {
        title = getTextFromElement(backingTrackAnchor[0]);
        backingTrack = expandUrl(backingTrackAnchor[0].href);
    } else {
        title = getTextFromElement(row.cells[0]);
    }
    title = removeSpace(title);

    if(tabAnchor.length > 0 ) {      
        tab = expandUrl(tabAnchor[0].href);
    } 
    if(chordsAnchor.length > 0 ) {      
        chords = expandUrl(chordsAnchor[0].href);
    } 

    if(performanceAnchor.length > 0 ) {      
        performance = expandUrl(performanceAnchor[0].href);
    } 
    let line = `${rindex}, "${title}", "${backingTrack}", "${tab}", "${chords}", "${performance}"`
    console.log(line);
    
    fs.writeSync(csvFile, line + '\n');
    
});
fs.closeSync(csvFile);

function getTextFromElement(element){
    let fonts = element.getElementsByTagName("font");
    if ( fonts.length > 0 ){
        return fonts[0].innerHTML;
    } else {
        return element.innerHTML;
    }
}
function removeSpace(text){
    text = text.replace(/\&nbsp;/g, "");
    text = text.replace(/\\n/g, "");
    text = text.replace(/\s+/g, " ");
    text = text.trim();
    return text;
}

function expandUrl( url ) {
    return url.replace(/\.\./, "http://goran.tangring.com");
}
 

