
var map = []
var map_create = function () {
	if (!map['active']) {
		map['active'] = true
	}
	if (!map['picture']) {
		map['picture'] = []
	}
	if (!map['picture']['width']) {
		map['picture']['width'] = 0
	}
	if (!map['picture']['height']) {
		map['picture']['height'] = 0
	}
	if (!map['number']) {
		map['number'] = []
	}
	if (!map['number']['width']) {
		map['number']['width'] = 0
	}
	if (!map['number']['height']) {
		map['number']['height'] = 0
	}
}
var map_active = function () {
	
}
var map_picture_width = function () {
	map['picture']['width'] = 100
}
var map_picture_height = function () {
	map['picture']['height'] = 100
}
var map_number_width = function () {
	map['number']['width'] = Math.floor(screen['width'] / map['picture']['width'])
}
var map_number_height = function () {
	map['number']['height'] = Math.floor(screen['height'] / map['picture']['height'])
}
var map_array = function () {
	for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
		for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
			if (!map[i]) {
				map[i] = []
			}
			if (!map[i][j]) {
				map[i][j] = []
			}
			if (!map[i][j]['x']) {
				map[i][j]['x'] = 0
			}
			if (!map[i][j]['y']) {
				map[i][j]['y'] = 0
			}
			if (!map[i][j]['select']) {
				map[i][j]['select'] = false
			}
			if (!map[i][j]['selected']) {
				map[i][j]['selected'] = false
			}
			if (!map[i][j]['build']) {
				map[i][j]['build'] = undefined
			}
			if (!map[i][j]['builded']) {
				map[i][j]['builded'] = false
			}
		}
	}
}
var map_array_x = function () {
	for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
		for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
			map[i][j]['x'] = screen['width'] / 2 + i * map['picture']['width']
		}
	}
}
var map_array_y = function () {
	for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
		for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
			map[i][j]['y'] = screen['height'] / 2 + j * map['picture']['height']
		}
	}
}
var map_array_select = function () {
	if (mouse['left']['click'] == true) {
		for (var m = - map['number']['width']; m <= map['number']['width']; m ++) {
			for (var n = - map['number']['height']; n <= map['number']['height']; n ++) {
				if (map[m][n]['select'] == true) {
					return
				}
			}
		}
		for (var m = - map['number']['width']; m <= map['number']['width']; m ++) {
			for (var n = - map['number']['height']; n <= map['number']['height']; n ++) {
				if (map[m][n]['x'] + 100 > mouse['x']) {
					if (map[m][n]['x'] < mouse['x']) {
						if (map[m][n]['y'] + 100 > mouse['y']) {
							if (map[m][n]['y'] < mouse['y']) {
								map[m][n]['select'] = true
							}
						}
					}
				}
			}
		}
	}
}
var map_array_selected = function () {
	if (mouse['left']['click'] == false) {
		for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
			for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
				if (map[i][j]['select'] == true) {
					map[i][j]['selected'] = true
				}
			}
		}
	}
}
var map_array_builded = function () {
	if (mouse['left']['click'] == false) {
		for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
			for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
				if (map[i][j]['build'] != undefined) {
					map[i][j]['select'] = false
					map[i][j]['selected'] = false
					button[i][j]['select'] = false
					button[i][j]['selected'] = false
				}
			}
		}
	}
}
var map_animation = function () {
	for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
		for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
			if (map[i][j]['select'] == false) {
				screen_paint('', 0, map[i][j]['x'], map[i][j]['y'])
			}
			if (map[i][j]['select'] == true) {
				screen_paint('', 1, map[i][j]['x'], map[i][j]['y'])
			}
			if (map[i][j]['build'] == 'road') {
				screen_paint('', 2, map[i][j]['x'], map[i][j]['y'])
			}
		}
	}
}
var map_timer = function () {
	map_create()
	map_picture_width()
	map_picture_height()
	map_number_width()
	map_number_height()
	map_array()
	map_array_x()
	map_array_y()
	map_array_select()
	map_array_selected()
	map_animation()
}

var button = []
var button_create = function () {
	if (!button['active']) {
		button['active'] = false
	}
	if (!button['picture']) {
		button['picture'] = []
	}
	if (!button['picture']['width']) {
		button['picture']['width'] = 0
	}
	if (!button['picture']['height']) {
		button['picture']['height'] = 0
	}
	if (!button['number']) {
		button['number'] = []
	}
	if (!button['number']['width']) {
		button['number']['width'] = 0
	}
	if (!button['number']['height']) {
		button['number']['height'] = 0
	}
}
var button_active = function () {
	for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
		for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
			if (map[i][j]['select'] == true) {
				button['active'] = true
			}
		}
	}
	for (var i = 0; i < button['number']['width']; i ++) {
		for (var j = 0; j < button['number']['height']; j ++) {
			if (button[i][j]['select'] == true) {
				button['active'] = false
			}
		}
	}
}
var button_picture_width = function () {
	button['picture']['width'] = 100
}
var button_picture_height = function () {
	button['picture']['height'] = 100
}
var button_number_width = function () {
	button['number']['width'] = 1
}
var button_number_height = function () {
	button['number']['height'] = 4
}
var button_array = function () {
	for (var i = 0; i < button['number']['width']; i ++) {
		for (var j = 0; j < button['number']['height']; j ++) {
			if (!button[i]) {
				button[i] = []
			}
			if (!button[i][j]) {
				button[i][j] = []
			}
			if (!button[i][j]['x']) {
				button[i][j]['x'] = 0
			}
			if (!button[i][j]['y']) {
				button[i][j]['y'] = 0
			}
			if (!button[i][j]['select']) {
				button[i][j]['select'] = false
			}
			if (!button[i][j]['build']) {
				button[i][j]['build'] = undefined
			}
		}
	}
	if (!button[0][0]['build']) {
		button[0][0]['build'] = 'clear'
	}
	if (!button[0][1]['build']) {
		button[0][1]['build'] = 'road'
	}
	if (!button[0][2]['build']) {
		button[0][2]['build'] = 'shop'
	}
	if (!button[0][3]['build']) {
		button[0][3]['build'] = 'factory'
	}
}
var button_array_x = function () {
	for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
		for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
			if (map[i][j]['select'] == true) {
				for (var m = 0; m < button['number']['width']; m ++) {
					for (var n = 0; n < button['number']['height']; n ++) {
						button[m][n]['x'] = map[i][j]['x'] + m * button['picture']['width']
					}
				}
			}
		}
	}
}
var button_array_y = function () {
	for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
		for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
			if (map[i][j]['select'] == true) {
				for (var m = 0; m < button['number']['width']; m ++) {
					for (var n = 0; n < button['number']['height']; n ++) {
						button[m][n]['y'] = map[i][j]['y'] + n * button['picture']['height']
					}
				}
			}
		}
	}
}
var button_array_select = function () {
	if (mouse['left']['click'] == true) {
		if (button['active'] == true) {
			for (var m = 0; m < button['number']['width']; m ++) {
				for (var n = 0; n < button['number']['height']; n ++) {
					if (button[m][n]['select'] == true) {
						return
					}
				}
			}
			for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
				for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
					if (map[i][j]['selected'] == true) {
						for (var m = 0; m < button['number']['width']; m ++) {
							for (var n = 0; n < button['number']['height']; n ++) {
								if (button[m][n]['x'] + 100 > mouse['x']) {
									if (button[m][n]['x'] < mouse['x']) {
										if (button[m][n]['y'] + 100 > mouse['y']) {
											if (button[m][n]['y'] < mouse['y']) {
												button[m][n]['select'] = true
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
var button_array_build = function () {
	for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
		for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
			if (map[i][j]['builded'] == true) {
				return
			}
		}
	}
	for (var m = 0; m < button['number']['width']; m ++) {
		for (var n = 0; n < button['number']['height']; n ++) {
			if (button[m][n]['select'] == true) {
				for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
					for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
						if (map[i][j]['select'] == true) {
							map[i][j]['build'] = button[m][n]['build']
							map[i][j]['builded'] = true
						}
					}
				}
			}
		}
	}
}
var button_array_builded = function () {
	if (mouse['left']['click'] == false) {
		for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
			for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
				if (map[i][j]['select'] == true) {
					
					for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
						for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
							if (map[i][j]['selected'] == true) {
								
								for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
									for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
										if (map[i][j]['builded'] == true) {
											
											for (var m = 0; m < button['number']['width']; m ++) {
												for (var n = 0; n < button['number']['height']; n ++) {
													if (button[m][n]['select'] == true) {
														
														for (var i = - map['number']['width']; i <= map['number']['width']; i ++) {
															for (var j = - map['number']['height']; j <= map['number']['height']; j ++) {
																if (map[i][j]['select'] == true) {
																	map[i][j]['select'] = false
																}
																if (map[i][j]['selected'] == true) {
																	map[i][j]['selected'] = false
																}
																if (map[i][j]['builded'] == true) {
																	map[i][j]['builded'] = false
																}
															}
														}
														for (var m = 0; m < button['number']['width']; m ++) {
															for (var n = 0; n < button['number']['height']; n ++) {
																if (button[m][n]['select'] == true) {
																	button[m][n]['select'] = false
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
var button_animation = function () {
	if (button['active'] == true) {
		for (var i = 0; i < button['number']['width']; i ++) {
			for (var j = 0; j < button['number']['height']; j ++) {
				if (button[i][j]['select'] == false) {
					screen_paint('', 4, button[i][j]['x'], button[i][j]['y'])
				}
				if (button[i][j]['select'] == true) {
					screen_paint('', 1, button[i][j]['x'], button[i][j]['y'])
				}
			}
		}
	}
}
var button_timer = function () {
	button_create()
	button_active()
	button_picture_width()
	button_picture_height()
	button_number_width()
	button_number_height()
	button_array()
	button_array_x()
	button_array_y()
	button_array_select()
	button_array_build()
	button_array_builded()
	button_animation()
}

var timer = function () {
	map_timer()
	button_timer()
}

//bag
var bag = []
var picture = []
var screen = []
var screen_create = function () {
	if (!screen['canvas']) {
		screen['canvas'] = []
	}
	if (!screen['width']) {
		screen['width'] = []
	}
	if (!screen['height']) {
		screen['height'] = []
	}
}
var screen_canvas = function () {
	document.getElementById('canvas').fillStyle = "#E5CCCC"
	document.getElementById('canvas').getContext('2d').fillRect(0, 0, document.body.clientWidth, document.body.clientHeight)
	
	document.getElementById('canvas').width = document.body.clientWidth
	document.getElementById('canvas').height = document.body.clientHeight
}
var screen_width = function () {
	screen['width'] = document.body.clientWidth
}
var screen_height = function () {
	screen['height'] = document.body.clientHeight
}
var screen_paint = function (path, number, x, y) {
	if (!picture[path]) {
		picture[path] = []
	}
	if (!picture[path][number]) {
		for (var i = 0; i <= number; i++) {
			picture[path][i] = new Image();
			picture[path][i].src = 'picture/' + path + i + '.png';
		}
	}
	document.getElementById('canvas').getContext('2d').drawImage(picture[path][number], x, y)
}
var mouse = []
var mouse_create = function () {
	if (!mouse['x']) {
		mouse['x'] = []
	}
	if (!mouse['y']) {
		mouse['y'] = []
	}
	if (!mouse['left']) {
		mouse['left'] = []
	}
	if (!mouse['left']['click']) {
		mouse['left']['click'] = []
	}
}
var mouse_x= document.addEventListener('mousemove', function(event) {
	mouse['x'] = event.x
})
var mouse_y = document.addEventListener('mousemove', function(event) {
	mouse['y'] = event.y
})
var mouse_left_down = document.addEventListener('mousedown', function(event) {if (event.which == 1) {
	mouse['left']['click'] = true
	
}})
var mouse_left_up = document.addEventListener('mouseup', function(event) {if (event.which == 1) {
	mouse['left']['click'] = false
}})
var keyboard = []
var keyboard_create = function () {
	if (!keyboard['spacebar']) {
		keyboard['spacebar'] = []
	}
}
var keyboard_down = document.body.onkeydown = function(event) {
	if (event.which == 32) {
		keyboard['spacebar'] = true
	}
}
var keyboard_up = document.body.onkeyup = function(event) {
	if (event.which == 32) {
		keyboard['spacebar'] = false
	}
}
var timer_create = setInterval(function () {
	screen_create()
	screen_canvas()
	screen_width()
	screen_height()
	mouse_create()
	keyboard_create()
	timer()
}, 40)

