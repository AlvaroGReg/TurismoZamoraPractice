function loadData(list) {

    closeNav();

    let upperList = document.getElementById('listtop');

    list.forEach(element => {

        let newItem = document.createElement('li');
        newItem.className = 'subpagelistitem';

        let newDiv = document.createElement('div');
        newDiv.className = 'itemimgdiv';

        newDiv.onclick = () => {
            expand(newDataDiv);
        }

        let newTxt = document.createElement('p');
        newTxt.innerHTML = element.name;
        newTxt.className = 'subitemtxt';

        let newImg = document.createElement('img');
        newImg.className = "itemimg"
        newImg.src = element.photo1;
        newImg.alt = element.name;

        upperList.appendChild(newItem);
        newItem.appendChild(newDiv);
        newDiv.appendChild(newTxt);
        newDiv.appendChild(newImg);

        let newDataDiv = document.createElement('div');
        newDataDiv.className = 'datadiv';

        let dataImg = document.createElement('img');
        dataImg.className = 'dataimg';

        if (element.photo2 != undefined) {
            dataImg.src = element.photo2;
        } else {
            dataImg.src = element.photo1;
        }

        let closeIcon = document.createElement('i');
        closeIcon.className = 'bx bx-x';
        closeIcon.onclick = () => {
            expand(newDataDiv);
        }

        let dataTitle = document.createElement('p');
        dataTitle.className = 'dataname';
        dataTitle.innerHTML = element.name;

        let dataDescription = document.createElement('p');
        dataDescription.className = 'datadescription';
        dataDescription.innerHTML = element.description;

        let dataWeb = document.createElement('a');
        dataWeb.target = "_blank";
        dataWeb.className = 'dataweb';
        dataWeb.href = element.web;
        dataWeb.innerHTML = "Enlace a la web";

        upperList.appendChild(newDataDiv);
        newDataDiv.appendChild(dataImg);
        newDataDiv.appendChild(closeIcon);
        newDataDiv.appendChild(dataTitle);
        newDataDiv.appendChild(dataDescription);

        if (element.map != "") {
            let dataMap = document.createElement('iframe');
            dataMap.className = 'mapiframe';
            dataMap.src = element.map;
            newDataDiv.appendChild(dataMap);
        }

        let newBr = document.createElement('br');
        newDataDiv.appendChild(newBr);
        
        newDataDiv.appendChild(dataWeb);

    });
}

function expand(divToExpand, closeIcon) {

    if (divToExpand.classList.length == 1) {
        divToExpand.classList.add('expanded');
    } else if (divToExpand.classList.length == 2) {
        closeDiv(divToExpand);
    }
}

function closeDiv(divToClose) {
    divToClose.classList.remove('expanded');
}