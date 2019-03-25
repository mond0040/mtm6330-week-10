// console.log('IMIN')

$(document).ready(function ($) {
// basic selector
//
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.first small').css('background-color', 'lightgrey')

  // Content - text, html, and input
  //
  //   $('.first').text('Lets learn <em>jQuery</em>')
  $('.first').html('Lets learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')
  $('#yourName').val('Bob Builder')

  //   Attribute Selector
  //
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href="#"]').css('color', 'grey')
  $('a[href*="google"]').css('font-weight', 'bold')

  //   Animation Functions
  //   $('.card:first').delay(1000).hide(400).show(800, function () {
  //     alert('we\'re back')
  //   })
  $('.card').animate({borderRadius: '20px'}, 400)

  // Attribute Method
  //
  $('img:first').attr('src', './img/image-5.jpg')

  // Class Method
  //
  //   console.log($('img:first').hasClass('special'))
  //   $('img').addClass('special')
  $('img').toggleClass('special')

  // Events
  $('img').on('click', function () {
    // Do domething on click
  })

  $('img').click(function () {
    console.log($(this).attr('src'))
    $(this).toggleClass('special')
    $(this).attr('src', './img/image-4.jpg')
  })

  // AJAX
  $('content').load('./about.html')
  // $('#contentNav .nav-link').click(function (e) {
  //   e.preventDefault()
  //   var page = $(this).attr('href')
  //   // console.log(page)
  //   $('#content').load(page)

  $('#contentNav .nav-link').click(function (e) {
    e.preventDefault()
    var page = $(this).attr('href')
    $('.active').removeClass('active')
    $(this).addClass('active')
    // console.log(page)
    // $('#content').load(page)

    $('#content').fadeOut(500, function () {
      $('#content').load(page)
    }).fadeIn(500)
  })

  // Using local JSON file with AJAX
  $.ajax({
    url: 'data/posts.json',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    // var posts = JSON.parse(data)
    console.log(data)
    var numPosts = data.posts.length
    for (var i = 0; i < numPosts; i++) {
      var post = '<div class="col-sm-6 p-5"><h3>'
      post += (i + 1) + '.' + data.posts[i].title
      post += '</h3><p>'
      post += data.posts[i].body
      post += '</p></div>'
      $('#posts').append(post)
    }
  })
})
