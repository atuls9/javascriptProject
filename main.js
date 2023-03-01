var expence = document.getElementById('expence');
var description = document.getElementById('description');
var category = document.getElementById('category');



document.addEventListener('submit', addItem)

function addItem(e) {
    e.preventDefault();
    var obj = {
        expence: expence.value,
        description: description.value,
        category: category.value
    }
    localStorage.setItem(obj.description, JSON.stringify(obj))

    var itemList = document.getElementById('users');

    var li = document.createElement('li');
    li.className = "list-group-item fs-5 bg-primary-subtle rounded-pill align-top";
    var display = document.createTextNode(`For ${obj.category}, Paid= ₹ ${obj.expence}, Details:- ${obj.description} `);
    li.appendChild(display);
    itemList.appendChild(li);

    var delbtn = document.createElement('button');
    delbtn.className = 'btn btn-danger float-end';
    delbtn.appendChild(document.createTextNode('DELETE'));
    li.appendChild(delbtn)

    document.addEventListener('click', deleteItem)
    function deleteItem(e) {

        if (e.target == delbtn) {

            if (confirm('Are U sure?')) {
                var li = e.target.parentElement;
                console.log(li)
                localStorage.removeItem(obj.description);

                itemList.removeChild(li);
            }
        }
    }


    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-warning float-end';
    editbtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editbtn)

    document.addEventListener('click', editItem)
    function editItem(e) {

        if (e.target == editbtn) {
            var li = e.target.parentElement;
            
            expence.value = obj.expence;
            category.value = obj.category;
            description.value = obj.description;
            localStorage.removeItem(obj.description);

            itemList.removeChild(li);
        }
    }

}


