const responseMsg = (response, contentType, msg, content=false, status=200) => {
    response.writeHead(status, { 'Content-Type': contentType });
    content ? response.end(content, 'utf-8') : response.end(msg);

}

const genText = () => {
    const text = [
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
       "Duis scelerisque, nulla vitae facilisis suscipit, quam quam luctus libero, quis vestibulum massa nisl ut lacus. In quis consequat nulla.",
       "Etiam semper bibendum nunc, vitae pharetra leo elementum vitae.",
       "Integer sit amet erat sed justo porttitor ultrices.",
       "In hac habitasse platea dictumst. Nam interdum massa id metus porta imperdiet.",
       "Proin vitae elit quis nisi molestie maximus id non nulla.",
       "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
       "Ut sodales non ligula sit amet semper.",
       "Maecenas non mauris eget lacus suscipit facilisis ut a tellus.",
       "Aenean sit amet porta nisi.",
       "Nam non risus neque. Duis sit amet tempus augue.",
       "Fusce sed tempus orci.",
       "Sed maximus tortor quam, quis interdum dui congue vitae.",
       "Mauris aliquet condimentum metus, vitae efficitur eros hendrerit quis.",
       "Phasellus ornare ac velit ac ultrices.",
       "Ut fringilla eleifend metus ut aliquet.",
       "Proin ut ligula nisl. Pellentesque sed lacinia quam.",
       "In hac habitasse platea dictumst. Nam interdum massa id metus porta imperdiet.",
       "Proin vitae elit quis nisi molestie maximus id non nulla.",
       "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
       "Ut sodales non ligula sit amet semper.",
       "Maecenas non mauris eget lacus suscipit facilisis ut a tellus.",
       "Aenean sit amet porta nisi.",

    ];
    return text[Math.floor(Math.random() * text.length)]
}


module.exports.genText = genText;
module.exports.responseMsg = responseMsg;
