// call to update time at every second
setInterval(showTime, 1000)

function showTime () {
  // get the time and current time(hours,minutes and seconds)
  let today = new Date()
  todayHour = today.getHours()
  todayMinutes = today.getMinutes()
  todaySeconds = today.getSeconds()

  let time = document.getElementById('alert-times')

  let greeting = ''
  let greetElement = document.getElementById('alert-time-purpose')

  let hour = todayHour < 10 ? '0' + todayHour : todayHour
  let minute = todayMinutes < 10 ? '0' + todayMinutes : todayMinutes
  let seconds = todaySeconds < 10 ? '0' + todaySeconds : todaySeconds

  let hourStamp = todayHour >= 12 ? 'PM' : 'AM'
  // get the timestamp and check if the time is less than the requisite hour or time of launch and testing at the range thatv was given and specified 

  // console.log(hour +":" + minute +":" +seconds)

  if (todayHour >= 12 && todayHour <= 18) {

    // check time
    todayHour = todayHour % 12 || 12
    hour = todayHour < 10 ? '0' + todayHour : todayHour

    if (hour == 3) {
      time.innerHTML = hour + ':' + minute + ':' + seconds + ':' + hourStamp
      greetElement.innerHTML = 'MERCY AND OBLATION TIME'
    }else if (hour == 6) {
      time.innerHTML = hour + ':' + minute + ':' + seconds + ':' + hourStamp
      greetElement.innerHTML = "IT'S TIME FOR COMMUNION WITH OUR FATHER"
    }else if (hour == 9) {
      time.innerHTML = hour + ':' + minute + ':' + seconds + ':' + hourStamp
      greetElement.innerHTML = "IT'S TIME TO REBEL AGAINST THE DEVIL"
    }else {
      time.innerHTML = hour + ':' + minute + ':' + seconds + ':' + hourStamp
      alert = document.getElementById('alert-alert').innerHTML = 'GO AHEAD AND MOVE IN THE SPIRIT'
      greetElement.innerHTML = 'JUST PRAY IN THE SPIRIT'
      playSong()
    //   if (playSong() == true) {
    //     audio.pause = true
    //   }
    }
  }
  else if (todayHour >= 0 && todayHour <= 11) {
    hourStamp = 'AM'
    time.innerHTML = todayHour + ':' + todayMinutes + ':' + todaySeconds + ':' + hourStamp
    greetElement.innerHTML = 'Good Morning'
  }
}
showTime()

function playSong () {
  //   songs to alert me with when it is time
  let audio = ['Tongues of fire.mp3',
    'ANOTHER MEASURE CHANT BY APOSTLE EDU UDECHUKWU _ DRUNK SESSION (64 kbps).mp3',
    '8_Gates_of_prayer_Everyday_-_Apostle_Michael_orokpo(144p).mp3',
    'Hide_me_in_your_secret_place_Min_Theophilus_Sunday%28Prayer.mp3',
    'Min.-Theophilus-Sunday-_-I-CAME-BY-PRAYERS-_-ETERNITY-IN-VIEW.mp3',
    'MIN THEOPHILUS SUNDAY - WHAT IS THAT PRAYER (64 kbps).mp3',
    'Tongues of fire.mp3',
    'y2mate.com - Spirit Help Me Pray  Prophetic Warfare Prayer Instrumental.mp3'
  ]

  let audioPlay = new Audio()
  audioPlay.src = audio[(Math.floor(Math.random() * audio.length))]
  audioPlay.play()
}
playSong()
