var transform_origin_matrix = {
  front: [
           // for rotateX, for rotateY, for rotateZ
           ['0px 150px -150px', '150px 0px -150px', '150px 150px 0px'] ,
           ['0px 150px -150px', ' 50px 0px -150px', ' 50px 150px 0px'] ,
           ['0px 150px -150px', '-50px 0px -150px', '-50px 150px 0px'] ,
           ['0px  50px -150px', '150px 0px -150px', '150px  50px 0px'] ,
           ['0px  50px -150px', ' 50px 0px -150px', ' 50px  50px 0px'] ,
           ['0px  50px -150px', '-50px 0px -150px', '-50px  50px 0px'] ,
           ['0px -50px -150px', '150px 0px -150px', '150px -50px 0px'] ,
           ['0px -50px -150px', ' 50px 0px -150px', ' 50px -50px 0px'] ,
           ['0px -50px -150px', '-50px 0px -150px', '-50px -50px 0px']
         ],
  middle:    [
           ['0px 150px -50px', '150px 0px -50px', '150px 150px 0px'] ,
           ['0px 150px -50px', ' 50px 0px -50px', ' 50px 150px 0px'] ,
           ['0px 150px -50px', '-50px 0px -50px', '-50px 150px 0px'] ,
           ['0px  50px -50px', '150px 0px -50px', '150px  50px 0px'] ,
           ['0px  50px -50px', ' 50px 0px -50px', ' 50px  50px 0px'] ,
           ['0px  50px -50px', '-50px 0px -50px', '-50px  50px 0px'] ,
           ['0px -50px -50px', '150px 0px -50px', '150px -50px 0px'] ,
           ['0px -50px -50px', ' 50px 0px -50px', ' 50px -50px 0px'] ,
           ['0px -50px -50px', '-50px 0px -50px', '-50px -50px 0px']
         ],
  back:  [
           ['0px 150px 50px', '150px 0px 50px', '150px 150px 0px'] ,
           ['0px 150px 50px', ' 50px 0px 50px', ' 50px 150px 0px'] ,
           ['0px 150px 50px', '-50px 0px 50px', '-50px 150px 0px'] ,
           ['0px  50px 50px', '150px 0px 50px', '150px  50px 0px'] ,
           ['0px  50px 50px', ' 50px 0px 50px', ' 50px  50px 0px'] ,
           ['0px  50px 50px', '-50px 0px 50px', '-50px  50px 0px'] ,
           ['0px -50px 50px', '150px 0px 50px', '150px -50px 0px'] ,
           ['0px -50px 50px', ' 50px 0px 50px', ' 50px -50px 0px'] ,
           ['0px -50px 50px', '-50px 0px 50px', '-50px -50px 0px']
         ]
}

var color_change_matrix_90_deg = {
  x1: [".front.i1 > .side1",
       ".front.i7 > .side3",
       ".front.i4 > .side1",
       ".middle.i7 > .side3",
       ".front.i7 > .side1",
       ".back.i7 > .side3",
       ".front.i7 > .side3",
       ".back.i7 > .side6",
       ".middle.i7 > .side3",
       ".back.i4 > .side6",
       ".back.i7 > .side3",
       ".back.i1 > .side6",
       ".back.i7 > .side6",
       ".back.i1 > .side2",
       ".back.i4 > .side6",
       ".middle.i1 > .side2",
       ".back.i1 > .side6",
       ".front.i1 > .side2",
       ".back.i1 > .side2",
       ".front.i1 > .side1",
       ".middle.i1 > .side2",
       ".front.i4 > .side1",
       ".front.i1 > .side2",
       ".front.i7 > .side1",
       ".front.i1 > .side4",
       ".front.i7 > .side4",
       ".front.i4 > .side4",
       ".middle.i7 > .side4",
       ".front.i7 > .side4",
       ".back.i7 > .side4",
       ".middle.i7 > .side4",
       ".back.i4 > .side4",
       ".back.i7 > .side4",
       ".back.i1 > .side4",
       ".back.i4 > .side4",
       ".middle.i1 > .side4",
       ".back.i1 > .side4",
       ".front.i1 > .side4",
       ".middle.i1 > .side4",
       ".front.i4 > .side4"] ,
  
  x2: [".front.i2 > .side1",
       ".front.i8 > .side3",
       ".front.i5 > .side1",
       ".middle.i8 > .side3",
       ".front.i8 > .side1",
       ".back.i8 > .side3",
       ".front.i8 > .side3",
       ".back.i8 > .side6",
       ".middle.i8 > .side3",
       ".back.i5 > .side6",
       ".back.i8 > .side3",
       ".back.i2 > .side6",
       ".back.i8 > .side6",
       ".back.i2 > .side2",
       ".back.i5 > .side6",
       ".middle.i2 > .side2",
       ".back.i2 > .side6",
       ".front.i2 > .side2",
       ".back.i2 > .side2",
       ".front.i2 > .side1",
       ".middle.i2 > .side2",
       ".front.i5 > .side1",
       ".front.i2 > .side2",
       ".front.i8 > .side1"] ,
  
  x3: [".front.i3 > .side1",
       ".front.i9 > .side3",
       ".front.i6 > .side1",
       ".middle.i9 > .side3",
       ".front.i9 > .side1",
       ".back.i9 > .side3",
       ".front.i9 > .side3",
       ".back.i9 > .side6",
       ".middle.i9 > .side3",
       ".back.i6 > .side6",
       ".back.i9 > .side3",
       ".back.i3 > .side6",
       ".back.i9 > .side6",
       ".back.i3 > .side2",
       ".back.i6 > .side6",
       ".middle.i3 > .side2",
       ".back.i3 > .side6",
       ".front.i3 > .side2",
       ".back.i3 > .side2",
       ".front.i3 > .side1",
       ".middle.i3 > .side2",
       ".front.i6 > .side1",
       ".front.i3 > .side2",
       ".front.i9 > .side1",
       ".front.i3 > .side5",
       ".front.i9 > .side5",
       ".front.i6 > .side5",
       ".middle.i9 > .side5",
       ".front.i9 > .side5",
       ".back.i9 > .side5",
       ".middle.i9 > .side5",
       ".back.i6 > .side5",
       ".back.i9 > .side5",
       ".back.i3 > .side5",
       ".back.i6 > .side5",
       ".middle.i3 > .side5",
       ".back.i3 > .side5",
       ".front.i3 > .side5",
       ".middle.i3 > .side5",
       ".front.i6 > .side5"] ,
  
  y1: [".front.i1 > .side1",
       ".back.i1 > .side4",
       ".front.i2 > .side1",
       ".middle.i1 > .side4",
       ".front.i3 > .side1",
       ".front.i1 > .side4",
       ".back.i1 > .side4",
       ".back.i3 > .side6",
       ".middle.i1 > .side4",
       ".back.i2 > .side6",
       ".front.i1 > .side4",
       ".back.i1 > .side6",
       ".back.i3 > .side6",
       ".front.i3 > .side5",
       ".back.i2 > .side6",
       ".middle.i3 > .side5",
       ".back.i1 > .side6",
       ".back.i3 > .side5",
       ".front.i3 > .side5",
       ".front.i1 > .side1",
       ".middle.i3 > .side5",
       ".front.i2 > .side1",
       ".back.i3 > .side5",
       ".front.i3 > .side1",
       ".front.i1 > .side2",
       ".back.i1 > .side2",
       ".front.i2 > .side2",
       ".middle.i1 > .side2",
       ".front.i3 > .side2",
       ".front.i1 > .side2",
       ".back.i1 > .side2",
       ".back.i3 > .side2",
       ".middle.i1 > .side2",
       ".back.i2 > .side2",
       ".back.i3 > .side2",
       ".front.i3 > .side2",
       ".back.i2 > .side2",
       ".middle.i3 > .side2",
       ".middle.i3 > .side2",
       ".front.i2 > .side2"] ,
  
  y2: [".front.i4 > .side1",
       ".back.i4 > .side4",
       ".front.i5 > .side1",
       ".middle.i4 > .side4",
       ".front.i6 > .side1",
       ".front.i4 > .side4",
       ".back.i4 > .side4",
       ".back.i6 > .side6",
       ".middle.i4 > .side4",
       ".back.i5 > .side6",
       ".front.i4 > .side4",
       ".back.i4 > .side6",
       ".back.i6 > .side6",
       ".front.i6 > .side5",
       ".back.i5 > .side6",
       ".middle.i6 > .side5",
       ".back.i4 > .side6",
       ".back.i6 > .side5",
       ".front.i6 > .side5",
       ".front.i4 > .side1",
       ".middle.i6 > .side5",
       ".front.i5 > .side1",
       ".back.i6 > .side5",
       ".front.i6 > .side1"] ,
  
  y3: [".front.i7 > .side1",
       ".back.i7 > .side4",
       ".front.i8 > .side1",
       ".middle.i7 > .side4",
       ".front.i9 > .side1",
       ".front.i7 > .side4",
       ".back.i7 > .side4",
       ".back.i9 > .side6",
       ".middle.i7 > .side4",
       ".back.i8 > .side6",
       ".front.i7 > .side4",
       ".back.i7 > .side6",
       ".back.i9 > .side6",
       ".front.i9 > .side5",
       ".back.i8 > .side6",
       ".middle.i9 > .side5",
       ".back.i7 > .side6",
       ".back.i9 > .side5",
       ".front.i9 > .side5",
       ".front.i7 > .side1",
       ".middle.i9 > .side5",
       ".front.i8 > .side1",
       ".back.i9 > .side5",
       ".front.i9 > .side1",
       ".front.i7 > .side3",
       ".back.i7 > .side3",
       ".front.i8 > .side3",
       ".middle.i7 > .side3",
       ".front.i9 > .side3",
       ".front.i7 > .side3",
       ".back.i7 > .side3",
       ".back.i9 > .side3",
       ".middle.i7 > .side3",
       ".back.i8 > .side3",
       ".back.i9 > .side3",
       ".front.i9 > .side3",
       ".back.i8 > .side3",
       ".middle.i9 > .side3",
       ".middle.i9 > .side3",
       ".front.i8 > .side3"] ,
  
  z1: [".front.i1 > .side2",
       ".front.i7 > .side4",
       ".front.i2 > .side2",
       ".front.i4 > .side4",
       ".front.i3 > .side2",
       ".front.i1 > .side4",
       ".front.i7 > .side4",
       ".front.i9 > .side3",
       ".front.i4 > .side4",
       ".front.i8 > .side3",
       ".front.i1 > .side4",
       ".front.i7 > .side3",
       ".front.i9 > .side3",
       ".front.i3 > .side5",
       ".front.i8 > .side3",
       ".front.i6 > .side5",
       ".front.i7 > .side3",
       ".front.i9 > .side5",
       ".front.i3 > .side5",
       ".front.i1 > .side2",
       ".front.i6 > .side5",
       ".front.i2 > .side2",
       ".front.i9 > .side5",
       ".front.i3 > .side2",
       ".front.i1 > .side1",
       ".front.i7 > .side1",
       ".front.i2 > .side1",
       ".front.i4 > .side1",
       ".front.i3 > .side1",
       ".front.i1 > .side1",
       ".front.i4 > .side1",
       ".front.i8 > .side1",
       ".front.i6 > .side1",
       ".front.i2 > .side1",
       ".front.i7 > .side1",
       ".front.i9 > .side1",
       ".front.i8 > .side1",
       ".front.i6 > .side1",
       ".front.i9 > .side1",
       ".front.i3 > .side1"] ,
  
  z2: [".middle.i1 > .side2",
       ".middle.i7 > .side4",
       ".middle.i2 > .side2",
       ".middle.i4 > .side4",
       ".middle.i3 > .side2",
       ".middle.i1 > .side4",
       ".middle.i7 > .side4",
       ".middle.i9 > .side3",
       ".middle.i4 > .side4",
       ".middle.i8 > .side3",
       ".middle.i1 > .side4",
       ".middle.i7 > .side3",
       ".middle.i9 > .side3",
       ".middle.i3 > .side5",
       ".middle.i8 > .side3",
       ".middle.i6 > .side5",
       ".middle.i7 > .side3",
       ".middle.i9 > .side5",
       ".middle.i3 > .side5",
       ".middle.i1 > .side2",
       ".middle.i6 > .side5",
       ".middle.i2 > .side2",
       ".middle.i9 > .side5",
       ".middle.i3 > .side2"] ,
  
  z3: [".back.i1 > .side2",
       ".back.i7 > .side4",
       ".back.i2 > .side2",
       ".back.i4 > .side4",
       ".back.i3 > .side2",
       ".back.i1 > .side4",
       ".back.i7 > .side4",
       ".back.i9 > .side3",
       ".back.i4 > .side4",
       ".back.i8 > .side3",
       ".back.i1 > .side4",
       ".back.i7 > .side3",
       ".back.i9 > .side3",
       ".back.i3 > .side5",
       ".back.i8 > .side3",
       ".back.i6 > .side5",
       ".back.i7 > .side3",
       ".back.i9 > .side5",
       ".back.i3 > .side5",
       ".back.i1 > .side2",
       ".back.i6 > .side5",
       ".back.i2 > .side2",
       ".back.i9 > .side5",
       ".back.i3 > .side2",
       ".back.i1 > .side6",
       ".back.i7 > .side6",
       ".back.i2 > .side6",
       ".back.i4 > .side6",
       ".back.i3 > .side6",
       ".back.i1 > .side6",
       ".back.i4 > .side6",
       ".back.i8 > .side6",
       ".back.i6 > .side6",
       ".back.i2 > .side6",
       ".back.i7 > .side6",
       ".back.i9 > .side6",
       ".back.i8 > .side6",
       ".back.i6 > .side6",
       ".back.i9 > .side6",
       ".back.i3 > .side6"]
}

// plus 1 button
document.querySelectorAll('.buttons button')[0].addEventListener('click', () =>
        { document.querySelector('#degree').value = 1
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// minus 1 button
document.querySelectorAll('.buttons button')[1].addEventListener('click', () =>
        { document.querySelector('#degree').value = -1
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// plus 10 button
document.querySelectorAll('.buttons button')[2].addEventListener('click', () =>
        { document.querySelector('#degree').value = 10
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// minus 10 button
document.querySelectorAll('.buttons button')[3].addEventListener('click', () =>
        { document.querySelector('#degree').value = -10
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// rotate 90 button
document.querySelectorAll('.buttons button')[4].addEventListener('click', () => 
        { document.querySelector('#degree').value = 90
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// get current degrees button
document.querySelectorAll('.buttons button')[5].addEventListener('click', () => 
        {
          console.log(getCurrentDegrees())
        })
// change view angles
document.querySelectorAll('.buttons button')[6].addEventListener('click', () => 
        {
          let cube = document.querySelector('.cube')
          let current_degrees = getRotateDegreesFromMatrix3dArray(getMatrix3dArray(cube))
          console.log(current_degrees)
          let new_transform = 'rotateX(' + (current_degrees[0] + 90) + 'deg) ' +
                              'rotateY(' + (current_degrees[1] + 90) + 'deg) ' +
                              'rotateZ(' + (current_degrees[2] + 90) + 'deg)'
          cube.style.transform = new_transform
          cube.style.transition = 'transform 1s linear'
        })
// rotate any degree
document.querySelectorAll('.buttons button')[7].addEventListener('click', () =>
        {
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })


function resetCube(target_elems, rotate_direction, target_row_or_column, is_clockwise) {
  target_elems.forEach( function(el) {
    el.style.transition = 'transform 0s linear'
    let current_translations = getTraslationsFromMatrix3dArray(getMatrix3dArray(el))
    el.style.transform = 'translate3d(' +
                                        current_translations[0] + 'px, ' +
                                        current_translations[1] + 'px, ' +
                                        current_translations[2] + 'px) ' +
                          'rotateX(0deg) ' +
                          'rotateY(0deg) ' +
                          'rotateZ(0deg)'
  })
  
  // update color
  updateColor(rotate_direction, target_row_or_column, is_clockwise)
}



function getTransformOrigin(el, rotate_direction) {
  let cn = el.className
  let block_index = parseInt(cn.substring(cn.length-1)) - 1
  let direction_index = rotate_direction === 'x' ? 0 :
                        (rotate_direction === 'y' ? 1 : 2)
  if(cn.indexOf('front') >= 0) {
    return transform_origin_matrix.front[block_index][direction_index]
  } else if(cn.indexOf('middle') >= 0) {
    return transform_origin_matrix.middle[block_index][direction_index]
  } else if(cn.indexOf('back') >= 0) {
    return transform_origin_matrix.back[block_index][direction_index]
  }
}



function getMatrix3dArray(el) {
  let el_style = window.getComputedStyle(el)
  let matrix_string = el_style.getPropertyValue('transform')
  if(matrix_string === 'none') matrix_string = 'matrix(1, 0, 0, 1, 0, 0)'
  let values = getArrayFromMatrixString(matrix_string)
  if(matrix_string.indexOf('matrix3d') < 0) {
    // convert matrix() to matrix3d()
    values = [
               values[0], values[1],
               0, 0,
               values[2], values[3],
               0, 0, 0, 0, 1, 0,
               values[4], values[5],
               0, 1
             ]
  }
  // change some array items from string to number
  return values.map(x => x - 0)
}



function getArrayFromMatrixString(matrix_string) {
  matrix_string = matrix_string.replace('matrix3d(', '')
  matrix_string = matrix_string.replace('matrix(', '')
  matrix_string = matrix_string.replace(')', '')
  return matrix_string.split(',')
}



// this function is only for the patterns :
// rotate3d(1, 0, 0, degree) - rotateX
// rotate3d(0, 1, 0, degree) - rotateY
// rotate3d(0, 0, 1, degree) - rotateZ
function getRotateDegreesFromMatrix3dArray(matrix3d_arr) {
  let sin_value_x = matrix3d_arr[6]
  let sin_value_y = matrix3d_arr[8]
  let sin_value_z = matrix3d_arr[1]
  let cos_value_x = matrix3d_arr[0] === 1 ? matrix3d_arr[5] : 1
  let cos_value_y = matrix3d_arr[5] === 1 ? matrix3d_arr[0] : 1
  let cos_value_z = matrix3d_arr[10] === 1 ? matrix3d_arr[0] : 1
  
  let cos_values = [cos_value_x, cos_value_y, cos_value_z]
  let radian_values = [Math.asin(sin_value_x), Math.asin(sin_value_y), Math.asin(sin_value_z)]
  let degree_values = radian_values.map(function (x, i) {
    if(cos_values[i] >= 0) {
      // only return integer part
      return Math.round(180 / Math.PI * x)
    } else {
      // only return integer part
      return 180 - Math.round(180 / Math.PI * x)
    }
  })
  return degree_values
}



function getTraslationsFromMatrix3dArray(matrix3d_arr) {
  return [matrix3d_arr[12], matrix3d_arr[13], matrix3d_arr[14]]
}



function getCurrentDegrees() {
  let obj_blocks = document.querySelectorAll('.cube > div')
  let arr_obj_blocks = Array.prototype.slice.call(obj_blocks)
  return arr_obj_blocks.map(function (el){
    return { block: el.className, 
             degrees: getRotateDegreesFromMatrix3dArray(getMatrix3dArray(el))
           }
  })
}



function updateColor(rotating_direction, row_column_index, is_clockwise) {
  let color_change_array = color_change_matrix_90_deg[rotating_direction + row_column_index]
  
  if(is_clockwise === true) { 
      // get current(from) color
      let from_colors = []
      for(let i=0; i < color_change_array.length / 2; i++) {
        let update_from_elem = document.querySelector(color_change_array[2 * i + 1])
        from_colors.push(window.getComputedStyle(update_from_elem).getPropertyValue('background-color'))
      }
      // update color
      for(let i=0; i < color_change_array.length / 2; i++) {
        let update_to_elem = document.querySelector(color_change_array[2 * i])
        update_to_elem.style.backgroundColor = from_colors[i]
      }
  } else {
      // get current(from) color
      let from_colors = []
      for(let i=0; i < color_change_array.length / 2; i++) {
        let update_from_elem = document.querySelector(color_change_array[2 * i])
        from_colors.push(window.getComputedStyle(update_from_elem).getPropertyValue('background-color'))
      }
      // update color
      for(let i=0; i < color_change_array.length / 2; i++) {
        let update_to_elem = document.querySelector(color_change_array[2 * i + 1])
        update_to_elem.style.backgroundColor = from_colors[i]
      }
  }
}



document.addEventListener("mousedown", (e) => {
  // click outside the cube to hide arrows
  if(getAllAncestors(e.target).length === 1) {  //only body
    document.querySelectorAll('.arrow').forEach( function (e) {
      e.remove()
    });
  }
    
  // another way to click 4 arrows
  let f_show_arrows = true
  if(document.getElementsByClassName('left arrow').length > 0) {   //arrows exist
    let left_arrow_rect = document.getElementsByClassName('left arrow')[0].getBoundingClientRect()
    let right_arrow_rect = document.getElementsByClassName('right arrow')[0].getBoundingClientRect()
    let up_arrow_rect = document.getElementsByClassName('up arrow')[0].getBoundingClientRect()
    let down_arrow_rect = document.getElementsByClassName('down arrow')[0].getBoundingClientRect()
    
    if(e.clientX >= left_arrow_rect.left &&
       e.clientX <= left_arrow_rect.right &&
       e.clientY >= left_arrow_rect.top &&
       e.clientY <= left_arrow_rect.bottom 
      ) {
            // click within left arrow
            rotateByArrow(document.getElementsByClassName('left arrow')[0])
            // not showing new arrows
            f_show_arrows = false
        
            //console.log('clientX: ', e.clientX)
            //console.log('clientY: ', e.clientY)
            //console.log('left_arrow_rect.left: ', left_arrow_rect.left )
            //console.log('left_arrow_rect.right: ', left_arrow_rect.right)
            //console.log('left_arrow_rect.top: ', left_arrow_rect.top)
            //console.log('left_arrow_rect.bottom : ', left_arrow_rect.bottom )
    } else if(
       e.clientX >= right_arrow_rect.left &&
       e.clientX <= right_arrow_rect.right &&
       e.clientY >= right_arrow_rect.top &&
       e.clientY <= right_arrow_rect.bottom 
      ) {
            // click within right arrow
            rotateByArrow(document.getElementsByClassName('right arrow')[0])
            // not showing new arrows
            f_show_arrows = false
    } else if(
       e.clientX >= up_arrow_rect.left &&
       e.clientX <= up_arrow_rect.right &&
       e.clientY >= up_arrow_rect.top &&
       e.clientY <= up_arrow_rect.bottom 
      ) {
            // click within up arrow
            rotateByArrow(document.getElementsByClassName('up arrow')[0])
            // not showing new arrows
            f_show_arrows = false
    } else if(
       e.clientX >= down_arrow_rect.left &&
       e.clientX <= down_arrow_rect.right &&
       e.clientY >= down_arrow_rect.top &&
       e.clientY <= down_arrow_rect.bottom 
      ) {
            // click within down arrow
            rotateByArrow(document.getElementsByClassName('down arrow')[0])
            // not showing new arrows
            f_show_arrows = false
    }
  }   
  if(f_show_arrows === true) showArrows(e)
})



function showArrows(e) {
  // show arrows
  if (e.target.classList.contains("side1") || 
      e.target.classList.contains("side2") ||  
      e.target.classList.contains("side3") ||  
      e.target.classList.contains("side4") ||  
      e.target.classList.contains("side5") ||  
      e.target.classList.contains("side6")
     ) {
      
    //remove previous arrows
    document.querySelectorAll('.arrow').forEach( function (e) {
      e.remove()
    });
    //reset previously set z-index's
    document.querySelectorAll('div').forEach( function(e) {
      e.style.zIndex = '0'
    })

    var left_arrow = document.createElement('div')
    left_arrow.className = 'left arrow'
    var right_arrow = document.createElement('div')
    right_arrow.className = 'right arrow'
    var up_arrow = document.createElement('div')
    up_arrow.className = 'up arrow'
    var down_arrow = document.createElement('div')
    down_arrow.className = 'down arrow'
    
    e.target.appendChild(left_arrow)
    e.target.appendChild(right_arrow)
    e.target.appendChild(up_arrow)
    e.target.appendChild(down_arrow)
      
    left_arrow.style.transform = 'translateX(-50px)'
    right_arrow.style.transform = 'translateX(100px)'
    up_arrow.style.transform = 'translateY(-50px)'
    down_arrow.style.transform = 'translateY(100px)'
    
    // I don't know why the code below works....yet
    // purpose: pop up 4 arrows
    if(e.target.parentElement.classList.contains('front') && e.target.className === 'side1') {
      e.target.parentNode.style.zIndex = '1'
    } else {
      e.target.parentNode.style.zIndex = '-1'
    }
      
    // add event listener to arrows
      /*
    document.querySelectorAll('.arrow').forEach(function (el) {
      el.addEventListener('mousedown', function (e) {
        rotateByArrow(e.target)
      })
    })
      */
  }
}

// only rotate 90 degree
function rotateByParam(rotate_direction, target_row_or_column) {
  let degreeX = 0, degreeY = 0, degreeZ = 0
  let target_elems = []
  if(rotate_direction === 'x') {
    degreeX = 90
    if(target_row_or_column === 1) {
      target_elems = [
                       document.querySelector('.front.i1') ,
                       document.querySelector('.front.i4') ,
                       document.querySelector('.front.i7') ,
                       document.querySelector('.middle.i1') ,
                       document.querySelector('.middle.i4') ,
                       document.querySelector('.middle.i7') ,
                       document.querySelector('.back.i1') ,
                       document.querySelector('.back.i4') ,
                       document.querySelector('.back.i7')
                     ]
    } else if(target_row_or_column === 2) {
      target_elems = [
                       document.querySelector('.front.i2') ,
                       document.querySelector('.front.i5') ,
                       document.querySelector('.front.i8') ,
                       document.querySelector('.middle.i2') ,
                       document.querySelector('.middle.i5') ,
                       document.querySelector('.middle.i8') ,
                       document.querySelector('.back.i2') ,
                       document.querySelector('.back.i5') ,
                       document.querySelector('.back.i8')
                     ]
    } else if(target_row_or_column === 3) {
      target_elems = [
                       document.querySelector('.front.i3') ,
                       document.querySelector('.front.i6') ,
                       document.querySelector('.front.i9') ,
                       document.querySelector('.middle.i3') ,
                       document.querySelector('.middle.i6') ,
                       document.querySelector('.middle.i9') ,
                       document.querySelector('.back.i3') ,
                       document.querySelector('.back.i6') ,
                       document.querySelector('.back.i9')
                     ]
    }
  } else if(rotate_direction === 'y') {
    degreeY = 90
    if(target_row_or_column === 1) {
      target_elems = [
                       document.querySelector('.front.i1') ,
                       document.querySelector('.front.i2') ,
                       document.querySelector('.front.i3') ,
                       document.querySelector('.middle.i1') ,
                       document.querySelector('.middle.i2') ,
                       document.querySelector('.middle.i3') ,
                       document.querySelector('.back.i1') ,
                       document.querySelector('.back.i2') ,
                       document.querySelector('.back.i3')
                     ]
    } else if(target_row_or_column === 2) {
      target_elems = [
                       document.querySelector('.front.i4') ,
                       document.querySelector('.front.i5') ,
                       document.querySelector('.front.i6') ,
                       document.querySelector('.middle.i4') ,
                       document.querySelector('.middle.i5') ,
                       document.querySelector('.middle.i6') ,
                       document.querySelector('.back.i4') ,
                       document.querySelector('.back.i5') ,
                       document.querySelector('.back.i6')
                     ]
    } else if(target_row_or_column === 3) {
      target_elems = [
                       document.querySelector('.front.i7') ,
                       document.querySelector('.front.i8') ,
                       document.querySelector('.front.i9') ,
                       document.querySelector('.middle.i7') ,
                       document.querySelector('.middle.i8') ,
                       document.querySelector('.middle.i9') ,
                       document.querySelector('.back.i7') ,
                       document.querySelector('.back.i8') ,
                       document.querySelector('.back.i9')
                     ]
    }
  } else if(rotate_direction === 'z') {
    degreeZ = 90
    if(target_row_or_column === 1) {
      target_elems = [
                       document.querySelector('.front.i1') ,
                       document.querySelector('.front.i2') ,
                       document.querySelector('.front.i3') ,
                       document.querySelector('.front.i4') ,
                       document.querySelector('.front.i5') ,
                       document.querySelector('.front.i6') ,
                       document.querySelector('.front.i7') ,
                       document.querySelector('.front.i8') ,
                       document.querySelector('.front.i9')
                     ]
    } else if(target_row_or_column === 2) {
      target_elems = [
                       document.querySelector('.middle.i1') ,
                       document.querySelector('.middle.i2') ,
                       document.querySelector('.middle.i3') ,
                       document.querySelector('.middle.i4') ,
                       document.querySelector('.middle.i5') ,
                       document.querySelector('.middle.i6') ,
                       document.querySelector('.middle.i7') ,
                       document.querySelector('.middle.i8') ,
                       document.querySelector('.middle.i9')
                     ]
    } else if(target_row_or_column === 3) {
      target_elems = [
                       document.querySelector('.back.i1') ,
                       document.querySelector('.back.i2') ,
                       document.querySelector('.back.i3') ,
                       document.querySelector('.back.i4') ,
                       document.querySelector('.back.i5') ,
                       document.querySelector('.back.i6') ,
                       document.querySelector('.back.i7') ,
                       document.querySelector('.back.i8') ,
                       document.querySelector('.back.i9')
                     ]
    }
  }
  
  // rotate
  target_elems.forEach( function(el) {
    el.style.transformOrigin = getTransformOrigin(el, rotate_direction)
    let current_degrees = getRotateDegreesFromMatrix3dArray(getMatrix3dArray(el))
    let current_translations = getTraslationsFromMatrix3dArray(getMatrix3dArray(el))
    let new_transform = 'translate3d(' +
                                      current_translations[0] + 'px, ' +
                                      current_translations[1] + 'px, ' +
                                      current_translations[2] + 'px) ' +
                        'rotateX(' + (current_degrees[0] + degreeX) + 'deg) ' +
                        'rotateY(' + (current_degrees[1] + degreeY) + 'deg) ' +
                        'rotateZ(' + (current_degrees[2] + degreeZ) + 'deg)'
    el.style.transition = 'transform 0.5s linear'
    el.style.transform = new_transform
  })
  // reset 
  target_elems[0].addEventListener('transitionend', function handler() {
    resetCube(target_elems, rotate_direction, target_row_or_column, true)
    this.removeEventListener('transitionend', handler) 
  })
}

function rotateByArrow(arrow_elem) {
  //hide arrows first
  document.querySelectorAll('.arrow').forEach( function (e) {
    e.style.display = 'none'
  });
    
  let all_elems = {}
  all_elems.x = []
  all_elems.y = []
  all_elems.z = []
  all_elems.x = [
      [
       document.querySelector('.front.i1') ,
       document.querySelector('.front.i4') ,
       document.querySelector('.front.i7') ,
       document.querySelector('.middle.i1') ,
       document.querySelector('.middle.i4') ,
       document.querySelector('.middle.i7') ,
       document.querySelector('.back.i1') ,
       document.querySelector('.back.i4') ,
       document.querySelector('.back.i7')
     ],
      [
       document.querySelector('.front.i2') ,
       document.querySelector('.front.i5') ,
       document.querySelector('.front.i8') ,
       document.querySelector('.middle.i2') ,
       document.querySelector('.middle.i5') ,
       document.querySelector('.middle.i8') ,
       document.querySelector('.back.i2') ,
       document.querySelector('.back.i5') ,
       document.querySelector('.back.i8')
     ],
      [
       document.querySelector('.front.i3') ,
       document.querySelector('.front.i6') ,
       document.querySelector('.front.i9') ,
       document.querySelector('.middle.i3') ,
       document.querySelector('.middle.i6') ,
       document.querySelector('.middle.i9') ,
       document.querySelector('.back.i3') ,
       document.querySelector('.back.i6') ,
       document.querySelector('.back.i9')
     ]
  ]
    
  all_elems.y = [
      [
       document.querySelector('.front.i1') ,
       document.querySelector('.front.i2') ,
       document.querySelector('.front.i3') ,
       document.querySelector('.middle.i1') ,
       document.querySelector('.middle.i2') ,
       document.querySelector('.middle.i3') ,
       document.querySelector('.back.i1') ,
       document.querySelector('.back.i2') ,
       document.querySelector('.back.i3')
     ],
      [
       document.querySelector('.front.i4') ,
       document.querySelector('.front.i5') ,
       document.querySelector('.front.i6') ,
       document.querySelector('.middle.i4') ,
       document.querySelector('.middle.i5') ,
       document.querySelector('.middle.i6') ,
       document.querySelector('.back.i4') ,
       document.querySelector('.back.i5') ,
       document.querySelector('.back.i6')
     ],
      [
       document.querySelector('.front.i7') ,
       document.querySelector('.front.i8') ,
       document.querySelector('.front.i9') ,
       document.querySelector('.middle.i7') ,
       document.querySelector('.middle.i8') ,
       document.querySelector('.middle.i9') ,
       document.querySelector('.back.i7') ,
       document.querySelector('.back.i8') ,
       document.querySelector('.back.i9')
     ]
  ]

  all_elems.z = [
      [
       document.querySelector('.front.i1') ,
       document.querySelector('.front.i2') ,
       document.querySelector('.front.i3') ,
       document.querySelector('.front.i4') ,
       document.querySelector('.front.i5') ,
       document.querySelector('.front.i6') ,
       document.querySelector('.front.i7') ,
       document.querySelector('.front.i8') ,
       document.querySelector('.front.i9')
     ],
      [
       document.querySelector('.middle.i1') ,
       document.querySelector('.middle.i2') ,
       document.querySelector('.middle.i3') ,
       document.querySelector('.middle.i4') ,
       document.querySelector('.middle.i5') ,
       document.querySelector('.middle.i6') ,
       document.querySelector('.middle.i7') ,
       document.querySelector('.middle.i8') ,
       document.querySelector('.middle.i9')
     ],
      [
       document.querySelector('.back.i1') ,
       document.querySelector('.back.i2') ,
       document.querySelector('.back.i3') ,
       document.querySelector('.back.i4') ,
       document.querySelector('.back.i5') ,
       document.querySelector('.back.i6') ,
       document.querySelector('.back.i7') ,
       document.querySelector('.back.i8') ,
       document.querySelector('.back.i9')
     ]
  ]
  
  // determine rotate_direction and degreeX, degreeY, degreeZ
  let rotate_direction
  let degreeX = 0, degreeY = 0, degreeZ = 0
  switch(arrow_elem.parentNode.className) {
      case 'side1' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'y'
              degreeY = -90
              break
            case 'right arrow' :
              rotate_direction = 'y'
              degreeY = 90
              break
            case 'up arrow' :
              rotate_direction = 'x'
              degreeX = 90
              break
            case 'down arrow' :
              rotate_direction = 'x'
              degreeX = -90
              break
        }
        break
      case 'side6' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'y'
              degreeY = 90
              break
            case 'right arrow' :
              rotate_direction = 'y'
              degreeY = -90
              break
            case 'up arrow' :
              rotate_direction = 'x'
              degreeX = -90
              break
            case 'down arrow' :
              rotate_direction = 'x'
              degreeX = 90
              break
        }
        break
      case 'side2' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'z'
              degreeZ = -90
              break
            case 'right arrow' :
              rotate_direction = 'z'
              degreeZ = 90
              break
            case 'up arrow' :
              rotate_direction = 'x'
              degreeX = -90
              break
            case 'down arrow' :
              rotate_direction = 'x'
              degreeX = 90
              break
        }
        break
      case 'side3' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'z'
              degreeZ = 90
              break
            case 'right arrow' :
              rotate_direction = 'z'
              degreeZ = -90
              break
            case 'up arrow' :
              rotate_direction = 'x'
              degreeX = -90
              break
            case 'down arrow' :
              rotate_direction = 'x'
              degreeX = 90
              break
        }
        break
      case 'side4' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'y'
              degreeY = 90
              break
            case 'right arrow' :
              rotate_direction = 'y'
              degreeY = -90
              break
            case 'up arrow' :
              rotate_direction = 'z'
              degreeZ = 90
              break
            case 'down arrow' :
              rotate_direction = 'z'
              degreeZ = -90
              break
        }
        break
      case 'side5' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'y'
              degreeY = 90
              break
            case 'right arrow' :
              rotate_direction = 'y'
              degreeY = -90
              break
            case 'up arrow' :
              rotate_direction = 'z'
              degreeZ = -90
              break
            case 'down arrow' :
              rotate_direction = 'z'
              degreeZ = 90
              break
        }
        break
  }
    
  // determine target_row_or_column
  let target_row_or_column
  let target_elems = []
  for(let i=0; i<3; i++) {
    if(all_elems[rotate_direction][i].indexOf(arrow_elem.parentNode.parentNode) >= 0) {
      target_row_or_column = i+1
      target_elems = all_elems[rotate_direction][i]
      break
    }
  }
    
  // rotate
  target_elems.forEach(function(el) {
    el.style.transformOrigin = getTransformOrigin(el, rotate_direction)
    let current_degrees = getRotateDegreesFromMatrix3dArray(getMatrix3dArray(el))
    let current_translations = getTraslationsFromMatrix3dArray(getMatrix3dArray(el))
    let new_transform = 'translate3d(' +
                                      current_translations[0] + 'px, ' +
                                      current_translations[1] + 'px, ' +
                                      current_translations[2] + 'px) ' +
                        'rotateX(' + (current_degrees[0] + degreeX) + 'deg) ' +
                        'rotateY(' + (current_degrees[1] + degreeY) + 'deg) ' +
                        'rotateZ(' + (current_degrees[2] + degreeZ) + 'deg)'
    el.style.transition = 'transform 0.5s linear'
    el.style.transform = new_transform
  })
  // reset
    target_elems[0].addEventListener('transitionend', function handler() {
      let is_clockwise
      if(degreeX >= 0 && degreeY >= 0 && degreeZ >= 0) {
          is_clockwise = true
      } else {
          is_clockwise = false
      }
      resetCube(target_elems, rotate_direction, target_row_or_column, is_clockwise)
      this.removeEventListener('transitionend', handler)
    }) 
    
  //remove arrows
  document.querySelectorAll('.arrow').forEach( function (e) {
    e.remove()
  });
}



function getAllAncestors(elem) {
  var p = elem;
  var p_s = [];
  p_s[0] = p;
  while(p.tagName.toUpperCase() !== 'BODY'){
    p = p.parentNode; 
    if(p == null) break
    p_s[p_s.length] = p;
  }
  return p_s;
}



function getMatrix3dArrayFromStyle(style_string) {
  var str = style_string.replace('matrix3d(', '')
  var str = str.replace(')', '')
  return str.split(', ')
}

function getStyleFromMatrix3dArray(arr_matrix) {
  return 'matrix3d(' + arr_matrix.join(',') + ')'
}

function matrix3dProduct(arr_matrix_1, arr_matrix_2){
  var output_arr_matrix = [];
  var m1 = arr_matrix_1;
  var m2 = arr_matrix_2;
  for(let i=0; i<4; i++) {
    for(let j=0; j<4; j++) {
      output_arr_matrix[4*i + j] = m1[4*i + 0] * m2[4*0 + j] + 
                                   m1[4*i + 1] * m2[4*1 + j] + 
                                   m1[4*i + 2] * m2[4*2 + j] + 
                                   m1[4*i + 3] * m2[4*3 + j] 
    }
  }
  return output_arr_matrix
}



function rotate3d_to_matrix3d(x1, y1, z1, deg) {
  //get unit vector
  var vector_length = Math.sqrt(x1 * x1 + y1 * y1 + z1 * z1)
  var x = x1 / vector_length
  var y = y1 / vector_length
  var z = z1 / vector_length

  let r = Math.PI * deg / 180  // radian
  let m11 = 1 + (1 - Math.cos(r)) * (x * x - 1)
  let m12 = z * Math.sin(r) + x * y * (1 - Math.cos(r))
  let m13 = 0 - y * Math.sin(r) + x * z * (1- Math.cos(r))
  let m14 = 0
  let m21 = 0 - z * Math.sin(r) + x * y * (1 - Math.cos(r))
  let m22 = 1 + (1 - Math.cos(r)) * (y * y - 1)
  let m23 = x * Math.sin(r) + y * z * (1 - Math.cos(r))
  let m24 = 0
  let m31 = y * Math.sin(r) + x * z * (1 - Math.cos(r))
  let m32 = 0 - x * Math.sin(r) + y * z * (1 - Math.cos(r))
  let m33 = 1 + (1 - Math.cos(r)) * (z * z - 1 )
  let m34 = 0
  let m41 = 0
  let m42 = 0
  let m43 = 0
  let m44 = 1

  return 'matrix3d(' + m11 + ', ' + m12 + ', ' + m13 + ', ' + m14 + ', ' 
                     + m21 + ', ' + m22 + ', ' + m23 + ', ' + m24 + ', ' 
                     + m31 + ', ' + m32 + ', ' + m33 + ', ' + m34 + ', ' 
                     + m41 + ', ' + m42 + ', ' + m43 + ', ' + m44 + ')'
}

/*
// slide bar
document.getElementById('rotatex_slider').addEventListener('input', function (e) {
  let old_degree_value = parseInt(document.getElementById('rotatex_value').innerHTML)
  let new_degree_value = parseInt(e.target.value)
  
  document.getElementById('rotatex_value').innerHTML = new_degree_value
  let added_arr_matrix3d = getArrayFromMatrixString(rotate3d_to_matrix3d(1, 0, 0, new_degree_value - old_degree_value))
  
  //get current matrix3d
  let cube = document.getElementsByClassName('cube')[0]
  let current_arr_matrix3d = getArrayFromMatrixString(window.getComputedStyle(cube).transform)
  
  // matrix production to get new transform matrix, added matrix in the back
  let new_matrix3d = matrix3dProduct(current_arr_matrix3d, added_arr_matrix3d)
  
  //update transform
  cube.style.transform = getStyleFromMatrix3dArray(new_matrix3d)
})


document.getElementById('rotatey_slider').addEventListener('input', function (e) {
  let old_degree_value = parseInt(document.getElementById('rotatey_value').innerHTML)
  let new_degree_value = parseInt(e.target.value)
  
  document.getElementById('rotatey_value').innerHTML = new_degree_value
  let added_arr_matrix3d = getArrayFromMatrixString(rotate3d_to_matrix3d(0, 1, 0, new_degree_value - old_degree_value))
  
  //get current matrix3d
  let cube = document.getElementsByClassName('cube')[0]
  let current_arr_matrix3d = getArrayFromMatrixString(window.getComputedStyle(cube).transform)
  
  // matrix production to get new transform matrix, added matrix in the back
  let new_matrix3d = matrix3dProduct(current_arr_matrix3d, added_arr_matrix3d)
  
  //update transform
  cube.style.transform = getStyleFromMatrix3dArray(new_matrix3d)
})
*/



//touch events

var touch_x, touch_y
var move_direction
document.addEventListener('touchstart', function (e) {
  touch_x = e.touches[0].clientX
  touch_y = e.touches[0].clientY
  move_direction = 'none'
  if(e.target === document.getElementsByClassName('spinner')[0]) {
    document.getElementsByClassName('spinner')[0].style.boxShadow = 'rgb(255, 83, 26) 0px -65px 0px 80px inset'
  }
})

document.addEventListener('touchend', function (e) {
  if(e.target === document.getElementsByClassName('spinner')[0]) {
    document.getElementsByClassName('spinner')[0].style.boxShadow = 'lightgray 0px -65px 0px 80px inset'
  }
})

document.addEventListener('touchmove', function (e) {
  // when finger is on the spinner, spin; or else move up-down or left-right to rotate X or Y
  if(document.getElementsByClassName('spinner')[0].style.boxShadow === 'rgb(255, 83, 26) 0px -65px 0px 80px inset') {
    let old_degree_value = parseInt(document.getElementsByClassName('spinner')[0].style.transform.replace('rotate(', ''))
    let new_degree_value
    
    let spinner_center_x = (document.getElementsByClassName('spinner')[0].getBoundingClientRect().left +
                          document.getElementsByClassName('spinner')[0].getBoundingClientRect().right) / 2
    let spinner_center_y = (document.getElementsByClassName('spinner')[0].getBoundingClientRect().top +
                          document.getElementsByClassName('spinner')[0].getBoundingClientRect().bottom) / 2

    let radian = Math.atan((e.touches[0].clientX - spinner_center_x) / (spinner_center_y - e.touches[0].clientY))
    // if |degree| > 90 deg
    if(e.touches[0].clientY > spinner_center_y) {
      if(e.touches[0].clientX > spinner_center_x){
          radian += Math.PI
      } else if(e.touches[0].clientX < spinner_center_x){
          radian -= Math.PI
      }
    }
    let degree = radian * 180 / Math.PI
    document.getElementsByClassName('spinner')[0].style.transform = 'rotate(' + parseInt(degree) + 'deg)'
    new_degree_value = parseInt(degree)
      
    let added_arr_matrix3d = getArrayFromMatrixString(rotate3d_to_matrix3d(0, 0, 1, new_degree_value - old_degree_value))
  
    //get current matrix3d
    let cube = document.getElementsByClassName('cube')[0]
    let current_arr_matrix3d = getArrayFromMatrixString(window.getComputedStyle(cube).transform)
    // matrix production to get new transform matrix, added matrix in the back
    let new_matrix3d = matrix3dProduct(current_arr_matrix3d, added_arr_matrix3d)
    //update transform
    cube.style.transform = getStyleFromMatrix3dArray(new_matrix3d)
  } else {
    // move up-down or left-right to rotate X or Y
    if(Math.abs(e.touches[0].clientX - touch_x) >= 10 && Math.abs(e.touches[0].clientY - touch_y) < 10) {
      // left-right movement, rotateY, one touch only change once
      if(move_direction === 'none') {
          move_direction = 'rotateY' 
          touch_x = e.touches[0].clientX
      }
    } else if(Math.abs(e.touches[0].clientX - touch_x) < 10 && Math.abs(e.touches[0].clientY - touch_y) > 10) {
      // up-down movement, rotateX, one touch only change once
      if(move_direction === 'none') {
          move_direction = 'rotateX' 
          touch_y = e.touches[0].clientY
      }
    }
      
    if(move_direction === 'rotateY') {
          let old_degree_value = touch_x
          let new_degree_value = e.touches[0].clientX
          touch_x = new_degree_value
        
          let added_arr_matrix3d = getArrayFromMatrixString(
              rotate3d_to_matrix3d(
                  0, 1, 0, (new_degree_value - old_degree_value) * 180 / (document.body.clientWidth * 0.5) 
            )
          )

          //get current matrix3d
          let cube = document.getElementsByClassName('cube')[0]
          let current_arr_matrix3d = getArrayFromMatrixString(window.getComputedStyle(cube).transform)

          // matrix production to get new transform matrix, added matrix in the back
          let new_matrix3d = matrix3dProduct(current_arr_matrix3d, added_arr_matrix3d)

          //update transform
          cube.style.transform = getStyleFromMatrix3dArray(new_matrix3d)
        
    } else if(move_direction === 'rotateX') {
          let old_degree_value = touch_y
          let new_degree_value = e.touches[0].clientY
          touch_y = new_degree_value
        
          let added_arr_matrix3d = getArrayFromMatrixString(
              rotate3d_to_matrix3d(
                  1, 0, 0, (old_degree_value - new_degree_value) * 180 / (document.body.clientHeight * 0.5) 
            )
          )

          //get current matrix3d
          let cube = document.getElementsByClassName('cube')[0]
          let current_arr_matrix3d = getArrayFromMatrixString(window.getComputedStyle(cube).transform)

          // matrix production to get new transform matrix, added matrix in the back
          let new_matrix3d = matrix3dProduct(current_arr_matrix3d, added_arr_matrix3d)

          //update transform
          cube.style.transform = getStyleFromMatrix3dArray(new_matrix3d)
    }
  }
})


// ramdomization start

function random123(step) {
  let r
  let arr_result = []
  let direction
  let index
  
  for(let i=0; i<step; i++) {
    //get direction
    r = Math.random()
    if(r>=0 && r<0.33) {
      direction = 'x'
    } else if(r>=0.33 && r<0.66) {
      direction = 'y'
    } else {
      direction = 'z'
    } 
      
    //get index
    r = Math.random()
    if(r>=0 && r<0.33) {
      index = 1
    } else if(r>=0.33 && r<0.66) {
      index = 2
    } else {
      index = 3
    } 
    arr_result[i] = {}
    arr_result[i].index = index
    index = ''
    arr_result[i].direction = direction
    direction = ''
  }
  return arr_result
}

document.getElementsByClassName('randomize_button')[0].addEventListener('click', function (){
  let arr_steps = random123(10)
  let i=0;
  let flag = setInterval(() => {
    rotateByParam(arr_steps[i].direction, arr_steps[i].index)
    if(++i >= arr_steps.length) {
      clearInterval(flag)
    }
  }, 1200);
})