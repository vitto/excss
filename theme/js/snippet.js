$(function () {
  var cookies = Cookies.getJSON()
  var snippet = {
    viewport: 'desktop',
    background: 'light'
  }

  if (typeof cookies.snippet === 'undefined') {
    Cookies.set('snippet', snippet)
  } else {
    snippet = cookies.snippet
  }

  function setViewport (viewport) {
    $('.render').removeClass(function (index, className) {
      return (className.match(/render--(desktop|tablet|mobile)/g) || []).join(' ')
    })
    $('.options__action[data-viewport]').removeClass('options__action--selected')
    $('.options__action[data-viewport=' + viewport + ']').addClass('options__action--selected')
    $('.render').addClass('render--' + viewport)
  }

  setViewport(snippet.viewport)

  $('.options__action[data-viewport]').on('click', function (e) {
    e.preventDefault()
    snippet.viewport = $(this).data('viewport')
    Cookies.set('snippet', snippet)
    setViewport(snippet.viewport)
  })

  function setBackground (background) {
    $('.render').removeClass(function (index, className) {
      return (className.match(/render--(transparency|light|dark)/g) || []).join(' ')
    })
    $('.options__action[data-background]').removeClass('options__action--selected')
    if (background !== '') {
      $('.options__action[data-background=' + background + ']').addClass('options__action--selected')
      $('.render').addClass('render--' + background)
    }
  }

  setBackground(snippet.background)

  $('.options__action[data-background]').on('click', function (e) {
    e.preventDefault()
    snippet.background = $(this).data('background')
    Cookies.set('snippet', snippet)
    setBackground(snippet.background)
  })
})
