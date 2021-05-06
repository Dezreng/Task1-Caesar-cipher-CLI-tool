### Task1-Caesar-cipher-CLI-tool

## Instalation

use `git clone https://github.com/Dezreng/Task1-Caesar-cipher-CLI-tool` to download the app

use `npm install` to install dependencies` 



## Usage

To start the cipher, use `node index -s <number> -a <string> -i <string -o <string>`, with your parameters or `npm run start`, to start a ready set, 
where: 
  >`-s / --shift`- (required) encryption step. If the offset is a positive number - normal text will be shifted from 'a' to 'z', if negative - in the other direction 'z' - 'a'  
  >
  >`-a / --action` - (required) type of action. You can encode and decode plain text. use '-a encode' to encode text or '-a decode' to decode text. Or use the long command '-action' instead of '-a'.
  >
  >`-i / --input` - path to file with plain text. You can run app without this flag, in this case plain text will taken from command line.
  >
  >`-o / --output` - path to result file. You can run app without this flag, in this case result will output to command line.
  
  
  
  
## Expample


```bash
$ npm run start
```
> input.txt
> `My test. "__" The work of the program!`

> output.txt
> `Tf alza. "__" Aol dvyr vm aol wyvnyht!`