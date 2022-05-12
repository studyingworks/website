// Chemistry calculators / reference

var selectedi = -1;

// Set appearance
function setAppearanceToThisi(inthisi) {
    var selected = elements[ptabledata[inthisi]-1];
    document.getElementById('lk-name').innerText = selected.name + ' (' + selected.symbol + ')';
    document.getElementById('lk-name').href = selected.source
    document.getElementById('el-data1').innerText = selected.number + ' • ' + selected.atomic_mass + ' g/mol';
    document.getElementById('el-data2').innerText = selected.category + ' • ' + selected.phase + ' • (' + selected.xpos + ',' + selected.ypos + ')';
    document.getElementById('el-spec-heat').innerText = 'c = ' + selected.molar_heat + ' j/g°C';
    document.getElementById('el-electron').innerText = selected.electron_configuration_semantic+' ';
    document.getElementById('el-electron-open').title = selected.electron_configuration;
    document.getElementById('el-appear').innerText = selected.appearance;
}
setAppearanceToThisi(0);

// Fill out ptable based on data
for(let i = 0; i < ptabledata.length; i++) {
    var tospawn = document.createElement('div');
    tospawn.style = 'margin:1px; height:23px; width:31px; display:inline-block;'
    // Exception blocks
    if(ptabledata[i] == -3) {
        var tobreak = document.createElement('br');
        document.getElementById('ptable-spawn').append(tobreak);
    } else if(ptabledata[i] == 0) {
        document.getElementById('ptable-spawn').append(tospawn);
    } else if(ptabledata[i] == -1) {
        tospawn.innerText = '57-71';
        document.getElementById('ptable-spawn').append(tospawn);
    } else if(ptabledata[i] == -4) {
        tospawn.innerText = '^ 57-71';
        document.getElementById('ptable-spawn').append(tospawn);
    } else if(ptabledata[i] == -5) {
        tospawn.innerText = '^ 89-103';
        document.getElementById('ptable-spawn').append(tospawn);
    } else if(ptabledata[i] == -2) {
        tospawn.innerText = '89-103';
        document.getElementById('ptable-spawn').append(tospawn);
    }
    // Find element and add
    else {
        // Data
        var selected = elements[ptabledata[i]-1];
        // Style
        tospawn.className = 'elemItem';
        // HTML
        tospawn.innerHTML =
        '<span style="font-size:8px; margin-top:0px;">'+(ptabledata[i])+'</span>'
        +'<span style="font-size:11px; margin-top:0px;">'+selected.symbol+'</span>'
        +'<br><span style="font-size:8px; margin-top:0px;">'+Math.round(selected.atomic_mass*100)/100+'</span>';
        // On hover / click
        let thisi = i;
        tospawn.onmouseover = function() {
            if(selectedi == -1) {
                // Set appearance
                setAppearanceToThisi(thisi);
            }
        }
        tospawn.onclick = function() {
            if(selectedi == thisi) {
                // Unselect
                selectedi = -1;
            } else {
                // Set appearance + selectedi
                selectedi = thisi;
                setAppearanceToThisi(thisi);
            }
        }
        // Add
        document.getElementById('ptable-spawn').append(tospawn);
    }
}