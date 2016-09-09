# logeye

用户行为统计打点工具    
User behavior statistics tool

## Explanation

UMD Specification

support __AMD, CommonJS, Node, window.logeye__

## Usage

### CommonJS

  npm i logeye --save

``` 
import logeye from logeye
logeye.emit({opt1:33, opt2: 'eewr'})
```

### winow.logeye

```
<script src="./index.js"></script>
<script>
    logeye.emit({
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
