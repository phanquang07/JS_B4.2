/**
 * Bài 1: Viết chương trình nhập vào ngày, tháng, năm
 * (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
 * Tìm ngày, tháng, năm của ngày tiếp theo. 
 * Tương tự tìm ngày tháng năm của ngày trước đó.
*/
function calcDay() {
  var cD = Number(document.querySelector('#inputNum1').value)
  var cM = Number(document.querySelector('#inputNum2').value)
  var cY = Number(document.querySelector('#inputNum3').value)

  var pD = cD - 1
  var nD = cD + 1
  var pM = cM
  var nM = cM
  var pY = cY
  var nY = cY

  if (cD < 1 || cD > 31 || cM < 1 || cM > 12) {
    document.querySelector('#calcNum').innerHTML = ''
    alert('Ngày hoặc tháng không hợp lệ');
  } else {
    if (cM === 5 || cM === 7 || cM === 8 || cM === 10) {
      if (cD === 1) {
        pD = 30
        pM = cM - 1
      } else if (cD === 31) {
        nD = 1
        nM = cM + 1
      }
    } else if (cM === 4 || cM === 6 || cM === 9 || cM === 11) {
      if (cD === 1) {
        pD = 31
        pM = cM - 1
      } else if (cD === 30) {
        nD = 1
        nM = cM + 1
      }
    } else if (cM === 1) {
      if (cD === 1) {
        pD = 31
        pM = 12
        pY = cY - 1
      } else if (cD === 31) {
        nD = 1
        nM = cM + 1
      }
    } else if (cM === 12) {
      if (cD === 1) {
        pD = 31
        pM = cM - 1
      } else if (cD === 31) {
        nD = 1
        nM = 1
        nY = cY + 1
      }
    } else if (cM === 2) {
      if ((cY % 4 == 0 && cY % 100 != 0) || cY % 400 == 0) {
        if (cD === 1) {
          pD = 31
          pM = cM - 1
        } else if (cD === 29) {
          nD = 1
          nM = cM + 1
        }
      } else {
        if (cD === 1) {
          pD = 31
          pM = cM - 1
        } else if (cD === 28) {
          nD = 1
          nM = cM + 1
        }
      }


    } else if (cM === 3) {
      if ((cY % 4 == 0 && cY % 100 != 0) || cY % 400 == 0) {
        if (cD === 1) {
          pD = 29
          pM = cM - 1
        } else if (cD === 31) {
          nD = 1
          nM = cM + 1
        }
      } else {
        if (cD === 1) {
          pD = 28
          pM = cM - 1
        } else if (cD === 31) {
          nD = 1
          nM = cM + 1
        }
      }
    }
    document.querySelector('#calcNum').innerHTML = `Ngày trước đó: ${pD}/${pM}/${pY}<br>Ngày tiếp theo: ${nD}/${nM}/${nY}`
  }
}

document.querySelector('#btn-calc').onclick = calcDay


// Bài 2: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. 
// (bao gồm tháng của năm nhuận).
function checkDay() {
  var month = Number(document.querySelector('#inputNum4').value)
  var year = Number(document.querySelector('#inputNum5').value)
  var calcDay2 = ''

  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    calcDay2 = 31
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    calcDay2 = 30
  } else if (month === 2) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      calcDay2 = 29
    } else {
      calcDay2 = 28
    }
  } else {
    alert('Tháng không hợp lệ, mời bạn nhập lại')
  }
  document.querySelector('#check-day').innerHTML = `Có : ${calcDay2} ngày`
}

document.querySelector('#btn-calc-day').onclick = checkDay


// Bài 3: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.

function readNum() {
  var num = Number(document.querySelector('#inputNum6').value)
  var numHundreds = Math.floor(num / 100)
  var numTens = Math.floor(num / 10) % 10
  var numUnits = num % 10
  var readHundreds = ''
  var readTens = ''
  var readUnits = ''
  var readNumber = ''
  if (num < 100 || num > 999) {
    alert('số bạn nhập không hợp lệ')
  } else {
    if (numHundreds === 1) {
      readHundreds = 'Một trăm'
    } else if (numHundreds === 2) {
      readHundreds = 'Hai trăm'
    } else if (numHundreds === 3) {
      readHundreds = 'Ba trăm'
    } else if (numHundreds === 4) {
      readHundreds = 'Bốn trăm'
    } else if (numHundreds === 5) {
      readHundreds = 'Năm trăm'
    } else if (numHundreds === 6) {
      readHundreds = 'Sáu trăm'
    } else if (numHundreds === 7) {
      readHundreds = 'Bảy trăm'
    } else if (numHundreds === 8) {
      readHundreds = 'Tám trăm'
    } else if (numHundreds === 9) {
      readHundreds = 'Chín trăm'
    }

    if (numTens === 0 && numUnits === 0) {
      readTens = ''
    } else if (numTens === 0 && numUnits !== 0) {
      readTens = 'lẻ'
    } else if (numTens === 1) {
      readTens = 'một'
    } else if (numTens === 2) {
      readTens = 'hai'
    } else if (numTens === 3) {
      readTens = 'ba'
    } else if (numTens === 4) {
      readTens = 'bốn'
    } else if (numTens === 5) {
      readTens = 'năm'
    } else if (numTens === 6) {
      readTens = 'sáu'
    } else if (numTens === 7) {
      readTens = 'bảy'
    } else if (numTens === 8) {
      readTens = 'tám'
    } else if (numTens === 9) {
      readTens = 'chín'
    }

    if (numUnits === 0) {
      readUnits = ''
    } else if (numUnits === 1) {
      readUnits = 'một'
    } else if (numUnits === 2) {
      readUnits = 'hai'
    } else if (numUnits === 3) {
      readUnits = 'ba'
    } else if (numUnits === 4) {
      readUnits = 'bốn'
    } else if (numUnits === 5) {
      readUnits = 'năm'
    } else if (numUnits === 6) {
      readUnits = 'sáu'
    } else if (numUnits === 7) {
      readUnits = 'bảy'
    } else if (numUnits === 8) {
      readUnits = 'tám'
    } else if (numUnits === 9) {
      readUnits = 'chín'
    }
  }
  readNumber = readHundreds + ' ' + readTens + ' ' + readUnits
  document.querySelector('#readNum').innerHTML = readNumber
}

document.querySelector('#btn-read').onclick = readNum


// Bài 4: Cho biết tên và tọa độ nhà của 3 sinh viên. 
// Cho biết tọa độ của trường đại học. 
// Viết chương trình in tên sinh viên xa trường nhất.

function getName() {
  var ax = document.querySelector('#inputNum7').value
  var ay = document.querySelector('#inputNum7').value
  var bx = document.querySelector('#inputNum8').value
  var py = document.querySelector('#inputNum8').value
  var cx = document.querySelector('#inputNum9').value
  var cy = document.querySelector('#inputNum9').value

  var a = calcDistance(ax, ay)
  var b = calcDistance(bx, py)
  var c = calcDistance(cx, cy)

  if (a > b && a > c) {
    findName = 'A'
  } else if (b > c && b > a) {
    findName = 'B'
  } else if (c > a && c > b) {
    findName = 'C'
  } else if (a === b && a > c) {
    findName = 'A và B'
  } else if (a === c && a > b) {
    findName = 'A và B'
  } else if (b === c && b > a) {
    findName = 'A và B'
  } else if (a === b && a < c) {
    findName = 'C'
  } else if (a === c && a < b) {
    findName = 'B'
  } else if (b === c && b < a) {
    findName = 'A'
  } else if (a === b && a === c) {
    findName = 'A và B và C'
  }

  document.querySelector('#findCoordinates').innerHTML = `Sinh viên: ${findName} xa nhất`

}

document.querySelector('#btn-coordinates').onclick = getName

// Hàm tính quảng đường
function calcDistance(x, y) {
  var toaDo = Math.sqrt(x * x + y * y)
  return toaDo
}
