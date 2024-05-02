function updateTime () {
  // get the time and current date
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  let hour = hours < 10 ? '0' + hours : hours

  let hourNow = hours % 12 || 12
  // expression to get the time though in a 12 hour format

  let hourStamp = hours >= 12 ? 'PM' : 'AM'

  let timeStringOut = `${hourNow <10 ? '0' : ''}${hourNow}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}${hourStamp}`

  let time = document.getElementById('prayer-time').innerHTML = timeStringOut
  let purpose = document.getElementById('pray-purpose')
  let greeting = document.getElementById('prayer-greeting')

  let scriptures = document.getElementById('scripture')
  // the prayer times i desire to be alerted at

  const prayerTimes = [0, 3, 6, 9, 12, 15 ]

  let scripturesOut = [
    'Romans 12:1 - I appeal to you therefore,brothers,by the mercies of God,to present your bodies as a living sacrifice,holy and acceptable to God,which is your spiritual worship. <b>-ESV </b>',
    'Mark 1:35 - And rising  very early in the morning,while it was still dark, he departed and went out to a desolate place,and there he prayed. <b>-ESV</b>',
    'Luke 18:1 -And he told them a parable to the effect that they always not lose heart. <b>-ESV</b>'
  ]

  switch (hourNow) {
    case 9:
      purpose.innerHTML = "IT'S TIME TO PRAY"
      greeting.innerHTML = ' FLESH DEALING TIME'
      scriptures.innerHTML = scripturesOut[0]
      break
    case 3:
      purpose.innerHTML = "IT'S TIME TO PRAY"
      greeting.innerHTML = ' HOUR OF MERCY AND OBLATION'
      break
    case 6:
      purpose.innerHTML = "IT'S TIME TO PRAY"
      greeting.innerHTML = 'COMMUNION TIME '
      break
    case 12:
      purpose.innerHTML = "IT'S TIME TO PRAY"
      greeting.innerHTML = 'INTERCESSION TIME'
      scriptures.innerHTML = scripturesOut[2]
      break
    case 0:
      purpose.innerHTML = "IT'S TIME TO PRAY"
      greeting.innerHTML = 'WARFARE AND GROANING TIME '
      scriptures.innerHTML = scripturesOut[2]
      break
    default:
      purpose.innerHTML = "IT'S NOT YET TIME TO PRAY"
      greeting.innerHTML = 'LET THE LORD QUICKEN YOU '
      scriptures.innerHTML = scripturesOut[0]
      break

  }
}
setInterval(updateTime, 1000)
