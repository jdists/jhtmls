# @jdists/jhtmls

jhtmls as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [jhtmls](https://github.com/zswang/jhtmls)

## Example

```html
<!--data>
kids:
  - name: Jimmy
    age: '12'
  - name: Sally
    age: '4'
</data-->

<!--jdists encoding="jhtmls" data="?data"-->
<ul>
kids.forEach((item) => {
  <li>#{item.name} - #{item.age}</li>
})
</ul>
<!--/jdists-->

<!--jhtmls data="?data"-->
<ul>
kids.forEach((item) => {
  <li>#{item.name} - #{item.age}</li>
})
</ul>
<!--/jhtmls-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fjhtmls
[npm-image]: https://badge.fury.io/js/%40jdists%2Fjhtmls.svg
[travis-url]: https://travis-ci.org/jdists/jhtmls
[travis-image]: https://travis-ci.org/jdists/jhtmls.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/jhtmls?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/jhtmls/badge.svg?branch=master&service=github