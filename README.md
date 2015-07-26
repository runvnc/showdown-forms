# showdown-forms

Showdown (Markdown) with simple form field syntax.
From https://github.com/maleldil/wmd 

# Usage

```javascript
import {makeHtml} from 'showdown-forms';

let form = `
## Form fields
name = ___[10]
sex = (x) male () female
phones = [x] Android [x] iPhone [] Windows
city = {BOS, SFO, (NYC)}
zip code* = ___
`

console.log(makeHtml(form));
```

