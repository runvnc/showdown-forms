import {makeHtml} from './showdown';

let form = `
## Form fields
name = ___[10]
sex = (x) male () female
phones = [x] Android [x] iPhone [] Windows
city = {BOS, SFO, (NYC)}
zip code* = ___
`

console.log(makeHtml(form));
