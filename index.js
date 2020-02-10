import $ from 'jquery';

function render() {
  $('.submit-form').submit((event) => {
    event.preventDefault()
    console.log('click')
  })
}

$(render)