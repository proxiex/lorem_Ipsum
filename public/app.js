// alert('ok it works');
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('controles');
    const dataDiv = document.getElementById('data');
    const span = document.getElementById('copy');

    console.log(span);
    const baseUrl = location.href;

    const createNode = (element) => {
        return document.createElement(element);
    }
  
    const  append = (parent, el) => {
      return parent.appendChild(el);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const number = document.getElementById('number').value;
        dataDiv.innerHTML = '';
        const copySpan = createNode('span');
        var att = document.createAttribute("class");      
        att.value = "copy";                           // Set the value of the class attribute
        copySpan.setAttributeNode(att);
        copySpan.textContent = 'copy text'

        append(dataDiv, copySpan);

        let type;
        
        if (document.getElementById('list').checked) {

            type = document.getElementById('list').value;

        } else if (document.getElementById('paragraph').checked) {

            type = document.getElementById('paragraph').value;
        }

        let data = {
            number,
            type
        }

        let fetchData = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            // `number=${number}&type=${type}`,
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }

        fetch(baseUrl, fetchData)
            .then((resp) => resp.json())
            .then(function(data) {
                const texts = data.data;
                dataDiv.style.display = 'block';
                type === 'list'? elmtType = 'li' : elmtType = 'p';
                texts.forEach((text) => {
                    const element = createNode(elmtType);
                    element.textContent = text;
                    append(dataDiv, element);
                });


            })

    });
});
