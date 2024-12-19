function makeList() {
    let listState = document.querySelector('.colorList');
    
    if (listState) {
        listState.remove();
    } else {
    
    //creates the list
    let list = document.createElement('div');

    //styles
    list.style.width = '350px';
    list.style.height = '50px';
    list.style.backgroundColor = 'beige';

    //class for it
    list.classList.add('colorList');

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

    colors.forEach(color => {
        let colorBox = document.createElement('div');
        colorBox.style.width = '40px'; 
        colorBox.style.height = '40px';
        colorBox.style.backgroundColor = color;
        colorBox.style.display = 'inline-block';
        colorBox.style.margin = '5px'; 
        colorBox.style.cursor = 'pointer';

        colorBox.addEventListener('click', function() {
            let circle = document.querySelector('.circle');
            circle.style.backgroundColor = color;
        });

        list.appendChild(colorBox);
    })

    //adds it to page
    document.body.appendChild(list);
    }
}

document.getElementById('colorButton').onclick = function() {
    makeList();
};

// ----------------------------------------------------------------

function makeInput() {
    let inputState = document.querySelector('.inputSpace');

    if(inputState) {
        inputState.remove();
    } else {
        let inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.style.width = '200px';
        inputField.style.height = '50px';
        inputField.classList.add('inputSpace')
        inputField.placeholder = "Name here...";

        inputField.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                let userName = inputField.value;

                let mainNameElements = document.querySelectorAll('.mainName');
                mainNameElements.forEach(function (element) {
                    element.innerText = userName;
                });

                inputField.remove();
            }
        });

        document.body.appendChild(inputField);

        
    }
}

document.getElementById('nameButton').onclick = function() {
    makeInput();
};

// ----------------------------------------------------------------------

function changeSize() {
    let sizesListState = document.querySelector('.sizesListC');

    if(sizesListState) {
        sizesListState.remove();
    } else {
        let sizesList = document.createElement('div');

        sizesList.style.width = '220px';
        sizesList.style.height = '50px';
        sizesList.style.backgroundColor = 'beige';
        sizesList.classList.add('sizesListC')
        
        const sizeOptions = [
            {name: 'Small', size: '100px'},
            {name: 'Medium', size: '200px'},
            {name: 'Large', size: '300px'}
        ];

        sizeOptions.forEach(option => {
            let sizeBox = document.createElement('div');
            sizeBox.style.width = '60px';
            sizeBox.style.height = '30px';
            sizeBox.style.gap = '10px';
            sizeBox.style.backgroundColor = 'white';
            sizeBox.style.margin = '5px';
            sizeBox.style.display = 'inline-block';
            sizeBox.style.textAlign = 'center';
            sizeBox.style.cursor = 'pointer';
            sizeBox.style.lineHeight = '30px';
            sizeBox.textContent = option.name;
            
            sizeBox.addEventListener('click', function() {
                let circle = document.querySelector('.circle');
                circle.style.width = option.size;
                circle.style.height = option.size;
            });

            sizesList.appendChild(sizeBox);
        });

        document.body.appendChild(sizesList);
    }
}

document.getElementById('sizeButton').onclick = function() {
    changeSize();
}