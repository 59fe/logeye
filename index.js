(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory)
  } else if (typeof exports === 'object') {
    // Node, CommonJS之类的
    module.exports = factory()
  } else {
    // 浏览器全局变量(root 即 window)
    root.logeye = factory()
  }
}(this, function () {
  var logeye = {
    // 把URL的queryString格式化成json对象，参数url如果不传，则取location.search
    parseUrl: function(url) {
      var search = url ? url.replace(/^.+?\?/, '').replace(/#.*$/, '') : location.search.substring(1),
        paramJson
      try {
        paramJson = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
      } catch(err) {
        paramJson = {}
      }
      return paramJson
    },

    // 把json对象格式化成URL的queryString
    stringifyUrl: function(json) {
      var paramStr = Object.keys(json).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(json[k])
      }).join('&')
      return paramStr
    },

    emit: function(statsParam) {
      if (!Object.keys) return
      var urlParam = logeye.parseUrl()
      // 添加默认参数
      statsParam._t = +new Date()
      statsParam.url = location.href
      statsParam.token = urlParam.token || ''

      var paramStr = logeye.stringifyUrl(statsParam)

      var url = 'http://s.59shangcheng.com/v.gif?' + paramStr

      // emit log request
      new Image().src = url
    }
  }

  //    暴露公共方法
  return logeye
}))
