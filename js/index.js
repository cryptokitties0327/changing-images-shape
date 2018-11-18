var image = document.getElementById('image');
var image2 = document.getElementById('image2');

//changing photo
image.addEventListener('click', change)

function change(e){
    console.log(e)
    if(e.target.src == 'data:image/jpeg;base64,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'){
        e.target.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFRUXGBcYFxcVFRUXFRYXFRcXFhcYFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANkA6AMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwcCAf/EADoQAAEDAgQEBQIEBAUFAAAAAAEAAhEDBAUSITEGQVFhE3GBkaEisTLB0fAHFeHxFBYjQlIzYnKSov/EABkBAAIDAQAAAAAAAAAAAAAAAAADAQIEBf/EACQRAAIDAAICAgMBAQEAAAAAAAABAgMREiEEMUFREyIycWEU/9oADAMBAAIRAxEAPwD3FERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABEVLjeL+H9DCM32USkorWTGLbxFldXAaN9VW/wAw16Kkp3BOrjJPqpzHQOSz/n30P/Dnsu7K6zaL6deCY+VTUTzbovog9fNMVnRR19l5TrtdsV1WdfTcNWldrbFHtgVBp15qVYvkh1v4LxF8U6gcJBBHZfaYLCIiACIiACIiACIiACIiACIiACIiACIiACIiACj310KbS4mF3JhYzinFgXZOQ5dT36Jdk1COjKoOcsI+I8QPMmSByA3KytniL6lZxcYHyu19ck6D1P6KLg1OCSdSSPaVzXY5e2dFVqK6NrhtPTMYA77nyUg3bZgLNcQY222pl7jAGn76LKYNxc6vVaA1wBmJBgxpoSNVdal0imJvtnrds4e6+Lupl09UsqRDWg7/AKqNjDvpPLlPZNeqApJOR8UsS1gH99l1uKunIrPWlVjj9J9jPwrIv+k8/LY/oUpTeDXBaSrLGPDO+nQrR2WJsqaDQry7ELoh8DkVYYTcOaQ4E5T8K9fkNPGVn46ktR6eii4fcZ2A81KXQT0wNZ0EREEBERABEUG8vmt0BBPmobwlLScipmX57hWH+MGQO6oTTJcWiSiiMvm81Ka4HbVSVw/UREAEREAEREAf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'
    }else
    (e.target.src = 'data:image/jpeg;base64,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')
}

//changing the shape of the photo
image2.addEventListener('click', changeShape)
// var clicks = 0;
function changeShape(e){
    // console.log(++clicks);
    if (e.target.style.borderRadius=='500px'){
        e.target.style.borderRadius='0px'
    }else{
        e.target.style.borderRadius='500px'
    }

}

