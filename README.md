# filters
collection of Vue filters

## Install

`npm install @chiaweilee/filters`

## Usage

```JavaScript
import capitalize from '@chiaweilee/filters/capitalize'
capitalize('hello world!') // Hello world!
```

## Usage in Vue (Vue filter)

```JavaScript
import Vue from 'vue'
import filters from '@chiaweilee/filters'
Vue.use(filters)
```

### Custom filter usage

```JavaScript
Vue.use(filters, [
  'capitalize',
  'percentage'
])
```
