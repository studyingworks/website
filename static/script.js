// Script
var version = "0.0.3";
console.log('STUDYING WORKS: v'+version);

var existingPages = ["home"];

/*
TO DO:
- Add videos
- Finish adding courses, units, and sections to the coursesSections array
- practice problems? (randomly select based on those in courseInfo.js)
*/

// Functions
function hideAllPages() {
    // Hide existing pages
    for(let i = 0; i < existingPages.length; i++) {
        try {
            if(document.getElementById('pg-'+existingPages[i]).style.display != 'none') {
                document.getElementById('pg-'+existingPages[i]).style.display = 'none';
            }
        } catch(err) {
            // Pg does not exist
        }
    }
}

// Add links / populate page divs
for(let i = 0; i < courses.length; i++) {
    // Get ID
    var thislk = document.getElementById("lk-"+courses[i]);
    // Add links
    for(let j = 0; j < coursesUnits[i]; j++) {
        // Link
        var content = (j+1) + "  ";
        let thisunitlk = document.createElement('a');
        let thisj = j;
        let thiscoursename = courses[i];
        let pgtoload = thiscoursename+"-"+(j+1);
        existingPages.push(pgtoload);
        thisunitlk.id = "lk-"+courses[i]+"-"+(j+1);
        thisunitlk.innerText = content;
        thisunitlk.dataset.pgtoload = pgtoload;
        thislk.append(thisunitlk);
        thisunitlk.onclick = function() {
            try {
                // Hide existing pages
                hideAllPages();
                // Show this page
                var divtoload = document.getElementById('pg-'+thisunitlk.dataset.pgtoload);
                divtoload.style.display = 'block';
                console.log('Page loaded: pg-'+thisunitlk.dataset.pgtoload);
            }
            catch(err) {
                console.log('ERR on loading page: pg-'+thisunitlk.dataset.pgtoload);
            }
        }
        // Populate page divs
        try {
            var thesesections = coursesSections[thiscoursename][thisj];
            for(let t = 0; t < Object.keys(thesesections).length; t++) {
                // Get link divider
                try {
                    // Find this div
                    var divtoload2 = document.getElementById('pg-'+thisunitlk.dataset.pgtoload+'-links');
                    // Append
                    let thissectionlk = document.createElement('span');
                    let vidurl = 'none'; // https://www.youtube.com/channel/UC-9IyDlMjLaLFhD1VJpfBpg
                    if(thesesections[t].url != undefined) {
                        vidurl = thesesections[t].url;
                        thissectionlk.innerHTML = ''
                        +'<a href="'+vidurl+'" class="link">'
                        +'<img src="static/images/icon-yt.svg" width="12px" height="12px">'
                        +'Section 1.'+(t+1)+'</a>: '+thesesections[t].name+'<br>';
                    }
                    else {
                        thissectionlk.innerHTML = ''
                        +'Section 1.'+(t+1)+': '+thesesections[t].name+'<br>';
                    }
                    
                    divtoload2.append(thissectionlk);
                    // Create iframe for video at bottom of page?
                    if(thesesections[t].urliframeID != undefined) {
                        iframeID = thesesections[t].urliframeID;
                        var divtoload3 = document.getElementById('pg-'+thisunitlk.dataset.pgtoload+'-vids');
                        let thisiframe = document.createElement('iframe');
                        thisiframe.width = '300';
                        thisiframe.height = '200';
                        thisiframe.src = 'https://www.youtube.com/embed/'+iframeID;
                        thisiframe.title = 'YouTube video player';
                        frameborder = "0";
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                        thisiframe.allowFullscreen = true; // Is this the correct one?
                        divtoload3.append(thisiframe);
                    }
                } catch(err) {
                    // Div does not exist
                }
            }
        } catch(err) {
            // Course does not exist in list
        }
    }
}

// Home link
document.getElementById('lk-home').onclick = function() {
    hideAllPages();
    document.getElementById('pg-home').style.display = 'block';
}