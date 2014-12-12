meteor-lscache [![Build Status](https://travis-ci.org/zhouzhuojie/meteor-lscache.svg?branch=master)](https://travis-ci.org/zhouzhuojie/meteor-lscache)
================

lscache[pamelafox/lscache](https://github.com/pamelafox/lscache) is a simple library that emulates memcache functions using HTML5 localStorage, so that you can cache data on the client and associate an expiration time with each piece of data. If the localStorage limit (~5MB) is exceeded, it tries to create space by removing the items that are closest to expiring anyway. If localStorage is not available at all in the browser, the library degrades by simply not caching and all cache requests return null.


```
meteor add rexzh0u:lscache
```


Basic usage
-------------

For example, you can store a string for 2 minutes using lscache.set():

``` js
lscache.set('greeting', 'Hello World!', 2);
```

More
-----------
Official Documentation for [lscache](https://github.com/pamelafox/lscache).

LICENSE
-----------
MIT
