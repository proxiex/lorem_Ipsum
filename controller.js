const helper = require('./helper');

class GenerateText{
    genText (type) {
        let minChar;
        if (type === 'paragraph'){
            minChar = 512;
        } else {
            minChar = 50;
        }
        let text = ''
        while(text.length < minChar){
            if(text.length < 1) {
                text = text.concat(helper.genText());
            } else {
                text = text.concat(' ' + helper.genText());
            }
        }
        return text;
    }

    texts(number, type) {
        const text = []
        while(text.length < number) {
            text.push(this.genText(type))
        }
        return text;
    }
}

const generateText = new GenerateText();

module.exports.text = generateText.texts;
module.exports.genText = generateText.genText;
