;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M919.843 210.418h-678.669l-11.765-97.064c-1.92-15.839-16.544-28.797-32.497-28.797h-6.45c-2.725 0-5.315 0.386-7.735 1.092h-82.953c-19.144 0-34.809 14.358-34.809 31.908s15.664 31.908 34.809 31.908h69.548l66.407 547.876c1.92 15.839 16.544 28.797 32.497 28.797h6.45c2.695 0 5.26-0.378 7.657-1.069h548.821c19.145 0 34.809-14.358 34.809-31.909 0-17.549-15.664-31.908-34.809-31.908h-535.334l-8.134-67.111h545.177c15.954 0 31.893-12.73 35.42-28.29l74.156-327.145c3.526-15.557-6.641-28.287-22.595-28.287z"  ></path>' +
    '' +
    '<path d="M294.588 865.719c0 42.808 34.703 77.511 77.511 77.511s77.511-34.703 77.511-77.511c0-42.808-34.703-77.511-77.511-77.511-42.808 0-77.511 34.703-77.511 77.511z"  ></path>' +
    '' +
    '<path d="M678.827 865.719c0 42.808 34.703 77.511 77.511 77.511s77.511-34.703 77.511-77.511c0-42.808-34.703-77.511-77.511-77.511-42.808 0-77.511 34.703-77.511 77.511z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lianyiqun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M794.9677 862.007559c-44.191478 3.656273-90.293469-20.262486-137.194662-17.434068-46.898123 2.825348-65.256236 51.212382-120.045073 52.289923-54.791907 1.086751-140.543943-16.19996-154.347321-34.855856-2.518357-5.819542-7.222495-38.220487 34.299177-17.434068 0.683569-0.606821 45.284369 19.192108 102.898555 17.434068 57.617256-1.76111 70.187549-41.37534 120.04098-52.286854 49.860595-10.926864 94.064352 20.709671 137.197732 17.417695 28.604478-2.182712 45.971008-30.001291 51.448766-34.852786-8.15268-117.299543-120.386858-213.96207-137.194662-226.609111-11.470239-8.619308-55.146994-30.30112-81.772398-76.128865-23.030529 11.968589-71.254857 24.094768-106.874099 23.825638-34.222429-0.258896-74.453712-11.202133-99.44285-22.538319-12.83533 26.744107-35.58752 45.316092-72.049966 74.840522-38.415938 31.103392-135.740544 137.76669-137.610124 224.793766 1.396813 7.689123 17.031908 28.622898 51.861158 19.249413 23.423479 6.024204 19.163455 31.765471 0 34.852786-49.838082 8.002254-85.748966-19.559475-85.748966-34.852786 0-133.698025 105.234763-228.992391 137.200802-261.480316 31.959899-32.477692 85.744873-57.45148 85.744873-122.009821 0-52.433186-68.598354-190.985776-68.598354-261.477246 0-0.412392 120.045073-34.858926 120.045073-34.858926 17.789155 32.161491 34.92851 69.710688 68.598354 69.710688s51.334155-35.661198 72.66702-69.710688c0 0 115.979478 33.851992 115.979478 34.858926 0 85.403089-68.601424 211.597209-68.601424 261.477246 0 60.59917 66.703191 92.76987 102.898555 122.009821 36.19127 29.233811 137.194662 122.927727 137.194662 261.480316C863.618243 827.116911 827.160913 859.358219 794.9677 862.007559L794.9677 862.007559zM657.774061 182.188412c0.396019-2.163269-63.433728-16.068977-68.602448-17.434068-17.07898 36.006052-35.593659 69.720921-85.744873 69.720921-52.100612 0-69.995167-37.06722-85.744873-69.720921-2.569522-3.432169-68.199265 16.747429-68.602448 17.434068-0.409322 35.798321 68.602448 208.493521 68.602448 226.609111 0 20.326954-1.255597 36.802184-3.889587 50.915623 1.336438 0.517793 2.444679 0.696872 3.889587 1.36816 20.006659 9.472745 40.966017 16.142655 85.744873 17.437138 44.781926 1.300622 77.221756-12.796444 85.744873-17.437138 2.588965-1.393743 5.065366-2.26253 7.440459-2.75167-4.595668-14.679327-7.427156-31.061436-7.440459-49.53109C589.165474 391.286708 657.774061 219.395826 657.774061 182.188412L657.774061 182.188412z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)