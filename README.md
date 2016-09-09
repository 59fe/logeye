# logger

用户行为统计打点工具    
User behavior statistics tool

## Explanation

UMD Specification

support __AMD, CommonJS, Node, window.logger__

## Usage

  npm i logger --save

``` 
import logger from logger
logger.emit({opt1:33, opt2: 'eewr'})
```

### OR

```
<script src="./index.js"></script>
<script>
    logger.emit({
        opt1:33,
        opt2: 'eewr',
        opt3: Math.random()
    })
</script>
```

## Develop & Maintain

1. npm i
1. edit/update ```index.js```
1. ``` npm start```
