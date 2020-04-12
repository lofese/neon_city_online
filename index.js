var data = []

data['screen'] = []
data['screen']['value'] = []
data['screen']['function'] = function () {
	
}
data['screen']['canvas'] = []
data['screen']['canvas']['value'] = []
data['screen']['canvas']['function'] = function () {
	document.getElementById('canvas').fillStyle = "#E5CCCC"
	document.getElementById('canvas').getContext('2d').fillRect(0, 0, document.body.clientWidth, document.body.clientHeight)
	
	document.getElementById('canvas').width = document.body.clientWidth
	document.getElementById('canvas').height = document.body.clientHeight
}
data['screen']['width'] = []
data['screen']['width']['value'] = []
data['screen']['width']['function'] = function () {
	data['screen']['width']['value'] = document.body.clientWidth
}
data['screen']['height'] = []
data['screen']['height']['value'] = []
data['screen']['height']['function'] = function () {
	data['screen']['height']['value'] = document.body.clientHeight
}
data['screen']['picture'] = []
data['screen']['picture']['value'] = []
data['screen']['picture']['function'] = function () {
	
}
data['screen']['paint'] = []
data['screen']['paint']['value'] = []
data['screen']['paint']['function'] = function (path, number, x, y) {
	if (!data['screen']['picture']['value'][path]) {
		data['screen']['picture']['value'][path] = []
	}
	if (!data['screen']['picture']['value'][path][number]) {
		data['screen']['picture']['value'][path][number] = new Image()
		data['screen']['picture']['value'][path][number].src = 'picture/' + path + number + '.png'
	}
	document.getElementById('canvas').getContext('2d').drawImage(data['screen']['picture']['value'][path][number], x, y)
}
data['screen']['pixel'] = []
data['screen']['pixel']['value'] = []
data['screen']['pixel']['function'] = function (x, y) {
	document.getElementById('canvas').getContext('2d').fillRect(x, y, 4, 4)
}
data['screen']['timer'] = []
data['screen']['timer']['value'] = []
data['screen']['timer']['function'] = function () {
	data['screen']['canvas']['function']()
	data['screen']['width']['function']()
	data['screen']['height']['function']()
}

data['mouse'] = []
data['mouse']['value'] = []
data['mouse']['function'] = function () {
	
}
data['mouse']['x'] = []
data['mouse']['x']['value'] = []
data['mouse']['x']['function'] = function () {
	
}
data['mouse']['x']['2d'] = []
data['mouse']['x']['2d']['value'] = []
data['mouse']['x']['2d']['function'] = function () {
	data['mouse']['x']['2d']['value'] = data['mouse']['x']['3d']['value']
}
data['mouse']['x']['3d'] = []
data['mouse']['x']['3d']['value'] = []
data['mouse']['x']['3d']['function'] = document.addEventListener('mousemove', function(event) {
	data['mouse']['x']['3d']['value'] = event.x
})
data['mouse']['y'] = []
data['mouse']['y']['value'] = []
data['mouse']['y']['function'] = function () {
	
}
data['mouse']['y']['2d'] = []
data['mouse']['y']['2d']['value'] = []
data['mouse']['y']['2d']['function'] = function () {
	data['mouse']['y']['2d']['value'] = data['mouse']['y']['3d']['value']
}
data['mouse']['y']['3d'] = []
data['mouse']['y']['3d']['value'] = []
data['mouse']['y']['3d']['function'] = document.addEventListener('mousemove', function(event) {
	data['mouse']['y']['3d']['value'] = event.y
})
data['mouse']['z'] = []
data['mouse']['z']['value'] = []
data['mouse']['z']['function'] = function () {
	
}
data['mouse']['z']['2d'] = []
data['mouse']['z']['2d']['value'] = []
data['mouse']['z']['2d']['function'] = function () {
	data['mouse']['z']['2d']['value'] = 0
}
data['mouse']['z']['3d'] = []
data['mouse']['z']['3d']['value'] = []
data['mouse']['z']['3d']['function'] = function () {
	data['mouse']['z']['3d']['value'] = (data['mouse']['y']['3d']['value'] - data['screen']['height']['value'] / 2) * Math.sin(45 * Math.PI / 180) / Math.cos(45 * Math.PI / 180)
}
data['mouse']['rotate'] = []
data['mouse']['rotate']['value'] = []
data['mouse']['rotate']['function'] = function () {
	data['mouse']['y']['2d']['value'] = data['screen']['height']['value'] / 2 + (data['mouse']['y']['3d']['value'] - data['screen']['height']['value'] / 2) * Math.cos(45 * Math.PI / 180) + data['mouse']['z']['3d']['value'] * Math.sin(45 * Math.PI / 180)
	data['mouse']['x']['2d']['value'] = data['screen']['width']['value'] / 2 + (data['mouse']['x']['3d']['value'] - data['screen']['width']['value'] / 2) * Math.cos(-45 * Math.PI / 180) - (data['mouse']['y']['2d']['value'] - data['screen']['height']['value'] / 2) * Math.sin(-45 * Math.PI / 180)
	data['mouse']['y']['2d']['value'] = data['screen']['height']['value'] / 2 + (data['mouse']['x']['3d']['value'] - data['screen']['width']['value'] / 2) * Math.sin(-45 * Math.PI / 180) + (data['mouse']['y']['2d']['value'] - data['screen']['height']['value'] / 2) * Math.cos(-45 * Math.PI / 180)
}
data['mouse']['left'] = []
data['mouse']['left']['click'] = []
data['mouse']['left']['click']['value'] = []
data['mouse']['left']['click']['function'] = function () {
	if (!data['mouse']['left']['click']['value']) {
		data['mouse']['left']['click']['value'] = 0
	}
}
data['mouse']['left']['down'] = []
data['mouse']['left']['down']['value'] = []
data['mouse']['left']['down']['function'] = document.addEventListener('mousedown', function(event) {if (event.which == 1) {
	data['mouse']['left']['click']['value'] = 1
}})
data['mouse']['left']['up'] = []
data['mouse']['left']['up']['value'] = []
data['mouse']['left']['up']['function'] = document.addEventListener('mouseup', function(event) {if (event.which == 1) {
	data['mouse']['left']['click']['value'] = 0
}})
data['mouse']['timer'] = []
data['mouse']['timer']['value'] = []
data['mouse']['timer']['function'] = function () {
	data['mouse']['x']['2d']['function']()
	data['mouse']['y']['2d']['function']()
	data['mouse']['z']['2d']['function']()
	data['mouse']['z']['3d']['function']()
	data['mouse']['rotate']['function']()
	data['mouse']['left']['click']['function']()
}

data['keyboard'] = []
data['keyboard']['value'] = []
data['keyboard']['function'] = document.body.onkeydown = function(event) {
	//spacebar
	if (event.which == 32) {
		//console.log(data['map']['z']['3d']['value'][0][0][0][0][0])
		//console.log(data['mouse']['y']['2d']['value'])
	}
	//left
	if (event.which == 37) {
		console.log(data['map']['move']['x']['2d']['value'])
		data['map']['move']['x']['2d']['value'] -= 1
		data['map']['move']['x']['3d']['value'] -= 1
	}
	//up
	if (event.which == 38) {
		data['map']['move']['y']['2d']['value'] -= 1
		data['map']['move']['y']['3d']['value'] -= 1
	}
	//right
	if (event.which == 39) {
		data['map']['move']['x']['2d']['value'] += 1
		data['map']['move']['x']['3d']['value'] += 1
	}
	//down
	if (event.which == 40) {
		data['map']['move']['y']['2d']['value'] += 1
		data['map']['move']['y']['3d']['value'] += 1
	}
}

var x = 45
var y = 45
var z = 45

data['map'] = []
data['map']['value'] = []
data['map']['function'] = function () {
	
}
data['map']['picture'] = []
data['map']['picture']['width'] = []
data['map']['picture']['width']['value'] = []
data['map']['picture']['width']['function'] = function () {
	data['map']['picture']['width']['value'] = 120
}
data['map']['picture']['height'] = []
data['map']['picture']['height']['value'] = []
data['map']['picture']['height']['function'] = function () {
	data['map']['picture']['height']['value'] = 120
}
data['map']['number'] = []
data['map']['number']['width'] = []
data['map']['number']['width']['value'] = []
data['map']['number']['width']['function'] = function () {
	data['map']['number']['width']['value'] = 1//Math.floor(data['screen']['width']['value'] / data['map']['picture']['width']['value'])
}
data['map']['number']['height'] = []
data['map']['number']['height']['value'] = []
data['map']['number']['height']['function'] = function () {
	data['map']['number']['height']['value'] = 1//Math.floor(data['screen']['height']['value'] / data['map']['picture']['height']['value'])
}
data['map']['active'] = []
data['map']['active']['value'] = []
data['map']['active']['function'] = function () {
	
}
data['map']['x'] = []
data['map']['x']['array'] = []
data['map']['x']['function'] = function () {
	
}
data['map']['x']['2d'] = []
data['map']['x']['2d']['array'] = []
data['map']['x']['2d']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['x']['2d']['array'][i]) {
				data['map']['x']['2d']['array'][i] = []
			}
			if (!data['map']['x']['2d']['array'][i][j]) {
				data['map']['x']['2d']['array'][i][j] = []
			}
			data['map']['x']['2d']['array'][i][j] = data['screen']['width']['value'] / 2 + i * data['map']['picture']['width']['value'] + data['map']['move']['x']['2d']['value']
		}
	}
}
data['map']['x']['3d'] = []
data['map']['x']['3d']['array'] = []
data['map']['x']['3d']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['x']['3d']['array'][i]) {
				data['map']['x']['3d']['array'][i] = []
			}
			if (!data['map']['x']['3d']['array'][i][j]) {
				data['map']['x']['3d']['array'][i][j] = []
			}
			data['map']['x']['3d']['array'][i][j] = data['screen']['width']['value'] / 2 + i * data['map']['picture']['width']['value'] + data['map']['move']['x']['3d']['value']
		}
	}
}
data['map']['y'] = []
data['map']['y']['array'] = []
data['map']['y']['function'] = function () {
	
}
data['map']['y']['2d'] = []
data['map']['y']['2d']['array'] = []
data['map']['y']['2d']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['y']['2d']['array'][i]) {
				data['map']['y']['2d']['array'][i] = []
			}
			if (!data['map']['y']['2d']['array'][i][j]) {
				data['map']['y']['2d']['array'][i][j] = []
			}
			data['map']['y']['2d']['array'][i][j] = data['screen']['height']['value'] / 2 + j * data['map']['picture']['height']['value'] + data['map']['move']['y']['2d']['value']
		}
	}
}
data['map']['y']['3d'] = []
data['map']['y']['3d']['array'] = []
data['map']['y']['3d']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['y']['3d']['array'][i]) {
				data['map']['y']['3d']['array'][i] = []
			}
			if (!data['map']['y']['3d']['array'][i][j]) {
				data['map']['y']['3d']['array'][i][j] = []
			}
			data['map']['y']['3d']['array'][i][j] = data['screen']['height']['value'] / 2 + j * data['map']['picture']['height']['value'] + data['map']['move']['y']['3d']['value']
		}
	}
}
data['map']['rotate'] = []
data['map']['rotate']['value'] = []
data['map']['rotate']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			data['map']['x']['3d']['array'][i][j] = data['screen']['width']['value'] / 2 + (data['map']['x']['2d']['array'][i][j] - data['screen']['width']['value'] / 2) * Math.cos(z * Math.PI / 180) - (data['map']['y']['2d']['array'][i][j] - data['screen']['height']['value'] / 2) * Math.sin(z * Math.PI / 180)
			data['map']['y']['3d']['array'][i][j] = data['screen']['height']['value'] / 2 + (data['map']['x']['2d']['array'][i][j] - data['screen']['width']['value'] / 2) * Math.sin(z * Math.PI / 180) + (data['map']['y']['2d']['array'][i][j] - data['screen']['height']['value'] / 2) * Math.cos(z * Math.PI / 180)
			data['map']['y']['3d']['array'][i][j] = data['screen']['height']['value'] / 2 + (data['map']['y']['3d']['array'][i][j] - data['screen']['height']['value'] / 2) * Math.cos(x * Math.PI / 180)
		}
	}
}
data['map']['move'] = []
data['map']['move']['value'] = []
data['map']['move']['function'] = function () {
	
}
data['map']['move']['x'] = []
data['map']['move']['x']['value']
data['map']['move']['x']['function'] = function () {
	
}
data['map']['move']['x']['2d'] = []
data['map']['move']['x']['2d']['value']
data['map']['move']['x']['2d']['function'] = function () {
	if (!data['map']['move']['x']['2d']['value']) {
		data['map']['move']['x']['2d']['value'] = 0
	}
}
data['map']['move']['x']['3d'] = []
data['map']['move']['x']['3d']['value']
data['map']['move']['x']['3d']['function'] = function () {
	if (!data['map']['move']['x']['3d']['value']) {
		data['map']['move']['x']['3d']['value'] = 0
	}
}
data['map']['move']['y'] = []
data['map']['move']['y']['value']
data['map']['move']['y']['function'] = function () {
	
}
data['map']['move']['y']['2d'] = []
data['map']['move']['y']['2d']['value']
data['map']['move']['y']['2d']['function'] = function () {
	if (!data['map']['move']['y']['2d']['value']) {
		data['map']['move']['y']['2d']['value'] = 0
	}
}
data['map']['move']['y']['3d'] = []
data['map']['move']['y']['3d']['value']
data['map']['move']['y']['3d']['function'] = function () {
	if (!data['map']['move']['y']['3d']['value']) {
		data['map']['move']['y']['3d']['value'] = 0
	}
}
data['map']['score'] = []
data['map']['score']['array'] = []
data['map']['score']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['score']['array'][i]) {
				data['map']['score']['array'][i] = []
			}
			if (!data['map']['score']['array'][i][j]) {
				data['map']['score']['array'][i][j] = []
			}
			data['map']['score']['array'][i][j] = 0
		}
	}
}
data['map']['score']['house'] = []
data['map']['score']['house']['array'] = []
data['map']['score']['house']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (data['map']['build']['array'][i][j] == 'house') {
				for (var m = i - 1; m <= i + 1; m ++) {
					for (var n = i - 1; n <= i + 1; n ++) {
						if (data['map']['build']['array'][m][n] == 'road') {
							data['map']['score']['array'][i][j] += 1
						}
					}
				}
			}
		}
	}
}
data['map']['select'] = []
data['map']['select']['array'] = []
data['map']['select']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['select']['array'][i]) {
				data['map']['select']['array'][i] = []
			}
			if (!data['map']['select']['array'][i][j]) {
				data['map']['select']['array'][i][j] = []
			}
		}
	}
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (data['map']['select']['array'][i][j] == 'select') {
				return
			}
		}
	}
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (data['map']['x']['2d']['array'][i][j] + 60 > data['mouse']['x']['2d']['value']) {
				if (data['map']['x']['2d']['array'][i][j] - 60 < data['mouse']['x']['2d']['value']) {
					if (data['map']['y']['2d']['array'][i][j] + 60 > data['mouse']['y']['2d']['value']) {
						if (data['map']['y']['2d']['array'][i][j] - 60 < data['mouse']['y']['2d']['value']) {
							if (data['mouse']['left']['click']['value'] == 1) {
								data['mouse']['left']['click']['value'] += 1
								data['map']['select']['array'][i][j] = 'select'
							}
						}
					}
				}
			}
		}
	}
}
data['map']['build'] = []
data['map']['build']['array'] = []
data['map']['build']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['build']['array'][i]) {
				data['map']['build']['array'][i] = []
			}
			if (!data['map']['build']['array'][i][j]) {
				data['map']['build']['array'][i][j] = []
			}
		}
	}
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (data['map']['select']['array'][i][j] == 'select') {
				for (var m = 0; m < data['button']['number']['width']['value']; m ++) {
					for (var n = 0; n < data['button']['number']['height']['value']; n ++) {
						if (data['button']['select']['array'][m][n] == 'select') {
							data['map']['build']['array'][i][j] = data['button']['build']['array'][m][n]
							data['map']['select']['array'][i][j] = []
							data['button']['select']['array'][m][n] = []
							data['button']['active']['value'] = undefined
						}
					}
				}
			}
		}
	}
}
data['map']['backlight'] = []
data['map']['backlight']['array'] = []
data['map']['backlight']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['backlight']['array'][i]) {
				data['map']['backlight']['array'][i] = []
			}
			if (!data['map']['backlight']['array'][i][j]) {
				data['map']['backlight']['array'][i][j] = []
			}
		}
	}
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (data['map']['backlight']['array'][i][j] = 'backlight') {
				data['map']['backlight']['array'][i][j] = []
			}
		}
	}
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (data['map']['x']['2d']['array'][i][j] + 60 > data['mouse']['x']['2d']['value']) {
				if (data['map']['x']['2d']['array'][i][j] - 60 < data['mouse']['x']['2d']['value']) {
					if (data['map']['y']['2d']['array'][i][j] + 60 > data['mouse']['y']['2d']['value']) {
						if (data['map']['y']['2d']['array'][i][j] - 60 < data['mouse']['y']['2d']['value']) {
							data['map']['backlight']['array'][i][j] = 'backlight'
						}
					}
				}
			}
		}
	}
}
data['map']['animation'] = []
data['map']['animation']['value'] = []
data['map']['animation']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			data['screen']['paint']['function']('', 0, data['map']['x']['3d']['array'][i][j] - 200, data['map']['y']['3d']['array'][i][j] - 235)
			if (data['map']['build']['array'][i][j] == 'road') {
				data['screen']['paint']['function']('', 3, data['map']['x']['3d']['array'][i][j] - 200, data['map']['y']['3d']['array'][i][j] - 235)
			}
			if (data['map']['backlight']['array'][i][j] == 'backlight') {
				data['screen']['paint']['function']('', 2, data['map']['x']['3d']['array'][i][j] - 200, data['map']['y']['3d']['array'][i][j] - 235)
			}
			//data['screen']['paint']['function']('', 6, data['map']['x']['2d']['array'][i][j] - 60, data['map']['y']['2d']['array'][i][j] - 60)
			//data['screen']['pixel']['function'](data['map']['x']['2d']['array'][i][j], data['map']['y']['2d']['array'][i][j])
			//data['screen']['pixel']['function'](data['map']['x']['3d']['array'][i][j], data['map']['y']['3d']['array'][i][j])
			//data['screen']['pixel']['function'](data['mouse']['x']['2d']['value'], data['mouse']['y']['2d']['value'])
		}
	}
}
data['map']['timer'] = []
data['map']['timer']['value'] = []
data['map']['timer']['function'] = function () {
	data['map']['picture']['width']['function']()
	data['map']['picture']['height']['function']()
	data['map']['number']['width']['function']()
	data['map']['number']['height']['function']()
	data['map']['x']['2d']['function']()
	data['map']['x']['3d']['function']()
	data['map']['y']['2d']['function']()
	data['map']['y']['3d']['function']()
	data['map']['rotate']['function']()
	data['map']['move']['x']['2d']['function']()
	data['map']['move']['x']['3d']['function']()
	data['map']['move']['y']['2d']['function']()
	data['map']['move']['y']['3d']['function']()
	data['map']['select']['function']()
	data['map']['build']['function']()
	data['map']['score']['function']()
	data['map']['score']['house']['function']()
	data['map']['backlight']['function']()
	data['map']['animation']['function']()
}

data['button'] = []
data['button']['value'] = []
data['button']['function'] = function () {
	
}
data['button']['picture'] = []
data['button']['picture']['width'] = []
data['button']['picture']['width']['value'] = []
data['button']['picture']['width']['function'] = function () {
	data['button']['picture']['width']['value'] = 100
}
data['button']['picture']['height'] = []
data['button']['picture']['height']['value'] = []
data['button']['picture']['height']['function'] = function () {
	data['button']['picture']['height']['value'] = 100
}
data['button']['number'] = []
data['button']['number']['width'] = []
data['button']['number']['width']['value'] = []
data['button']['number']['width']['function'] = function () {
	data['button']['number']['width']['value'] = 4
}
data['button']['number']['height'] = []
data['button']['number']['height']['value'] = []
data['button']['number']['height']['function'] = function () {
	data['button']['number']['height']['value'] = 1
}
data['button']['active'] = []
data['button']['active']['value'] = []
data['button']['active']['function'] = function () {
	for (var i = - data['map']['number']['width']['value']; i <= data['map']['number']['width']['value']; i ++) {
		for (var j = - data['map']['number']['height']['value']; j <= data['map']['number']['height']['value']; j ++) {
			if (!data['map']['select']['array'][i]) {
				return
			}
			if (!data['map']['select']['array'][i][j]) {
				return
			}
			if (data['map']['select']['array'][i][j] == 'select') {
				data['button']['active']['value'] = 'active'
			}
		}
	}
	for (var i = 0; i < data['button']['number']['width']['value']; i ++) {
		for (var j = 0; j < data['button']['number']['height']['value']; j ++) {
			if (!data['button']['select']['array'][i]) {
				return
			}
			if (!data['button']['select']['array'][i][j]) {
				return
			}
			if (data['button']['select']['array'][i][j] == 'select') {
				data['button']['active']['value'] = undefined
			}
		}
	}
}
data['button']['x'] = []
data['button']['x']['array'] = []
data['button']['x']['function'] = function () {
	for (var i = 0; i < data['button']['number']['width']['value']; i ++) {
		for (var j = 0; j < data['button']['number']['height']['value']; j ++) {
			if (!data['button']['x']['array'][i]) {
				data['button']['x']['array'][i] = []
			}
			if (!data['button']['x']['array'][i][j]) {
				data['button']['x']['array'][i][j] = []
			}
			data['button']['x']['array'][i][j] = data['screen']['width']['value'] / 2 - data['button']['number']['width']['value'] * data['button']['picture']['width']['value'] / 2 + i * data['button']['picture']['width']['value']
		}
	}
}
data['button']['y'] = []
data['button']['y']['array'] = []
data['button']['y']['function'] = function () {
	for (var i = 0; i < data['button']['number']['width']['value']; i ++) {
		for (var j = 0; j < data['button']['number']['height']['value']; j ++) {
			if (!data['button']['y']['array'][i]) {
				data['button']['y']['array'][i] = []
			}
			if (!data['button']['y']['array'][i][j]) {
				data['button']['y']['array'][i][j] = []
			}
			data['button']['y']['array'][i][j] = data['screen']['height']['value'] / 2 - data['button']['number']['height']['value'] * data['button']['picture']['height']['value'] / 2 + j * data['button']['picture']['height']['value']
		}
	}
}
data['button']['select'] = []
data['button']['select']['array'] = []
data['button']['select']['function'] = function () {
	for (var i = 0; i < data['button']['number']['width']['value']; i ++) {
		for (var j = 0; j < data['button']['number']['height']['value']; j ++) {
			if (!data['button']['select']['array'][i]) {
				data['button']['select']['array'][i] = []
			}
			if (!data['button']['select']['array'][i][j]) {
				data['button']['select']['array'][i][j] = []
			}
		}
	}
	
	if (data['button']['active']['value'] == 'active') {
		for (var i = 0; i < data['button']['number']['width']['value']; i ++) {
			for (var j = 0; j < data['button']['number']['height']['value']; j ++) {
					if (data['button']['select']['array'][i][j] == 'select') {
						return
					}
				}
			}
		for (var i = 0; i < data['button']['number']['width']['value']; i ++) {
			for (var j = 0; j < data['button']['number']['height']['value']; j ++) {
				if (data['button']['x']['array'][i][j] + data['button']['picture']['width']['value'] > data['mouse']['x']['3d']['value']) {
					if (data['button']['x']['array'][i][j] < data['mouse']['x']['3d']['value']) {
						if (data['button']['y']['array'][i][j] + data['button']['picture']['height']['value'] > data['mouse']['y']['3d']['value']) {
							if (data['button']['y']['array'][i][j] < data['mouse']['y']['3d']['value']) {
								if (data['mouse']['left']['click']['value'] == 1) {
									data['mouse']['left']['click']['value'] += 1
									data['button']['select']['array'][i][j] = 'select'
									
								}
							}
						}
					}
				}
			}
		}
	}
}
data['button']['build'] = []
data['button']['build']['array'] = []
data['button']['build']['function'] = function () {
	for (var i = 0; i < data['button']['number']['width']['value']; i ++) {
		for (var j = 0; j < data['button']['number']['height']['value']; j ++) {
			if (!data['button']['build']['array'][i]) {
				data['button']['build']['array'][i] = []
			}
			if (!data['button']['build']['array'][i][j]) {
				data['button']['build']['array'][i][j] = []
			}
		}
	}
	data['button']['build']['array'][0][0] = 'cansel'
	data['button']['build']['array'][1][0] = 'road'
	data['button']['build']['array'][2][0] = 'shop'
	data['button']['build']['array'][3][0] = 'factory'
}
data['button']['animation'] = []
data['button']['animation']['value'] = []
data['button']['animation']['function'] = function () {
	if (data['button']['active']['value'] == 'active') {
		for (var i = 0; i < data['button']['number']['width']['value']; i ++) {
			for (var j = 0; j < data['button']['number']['height']['value']; j ++) {
				data['screen']['paint']['function']('', 1, data['button']['x']['array'][i][j], data['button']['y']['array'][i][j])
			}
		}
	}
}
data['button']['timer'] = []
data['button']['timer']['value'] = []
data['button']['timer']['function'] = function () {
	data['button']['picture']['width']['function']()
	data['button']['picture']['height']['function']()
	data['button']['number']['width']['function']()
	data['button']['number']['height']['function']()
	data['button']['active']['function']()
	data['button']['x']['function']()
	data['button']['y']['function']()
	data['button']['select']['function']()
	data['button']['build']['function']()
	data['button']['animation']['function']()
}

data['cloud'] = []
data['cloud']['value'] = []
data['cloud']['function'] = function () {
	
}
data['cloud']['picture'] = []
data['cloud']['picture']['width'] = []
data['cloud']['picture']['width']['value'] = []
data['cloud']['picture']['width']['function'] = function () {
	data['cloud']['picture']['width']['value'] = 120
}
data['cloud']['picture']['height'] = []
data['cloud']['picture']['height']['value'] = []
data['cloud']['picture']['height']['function'] = function () {
	data['cloud']['picture']['height']['value'] = 120
}
data['cloud']['number'] = []
data['cloud']['number']['array'] = []
data['cloud']['number']['function'] = function () {
	
}
data['cloud']['number']['width'] = []
data['cloud']['number']['width']['value'] = []
data['cloud']['number']['width']['function'] = function () {
	data['cloud']['number']['width']['value'] = 10
}
data['cloud']['number']['height'] = []
data['cloud']['number']['height']['value'] = []
data['cloud']['number']['height']['function'] = function () {
	data['cloud']['number']['height']['value'] = 10
}
data['cloud']['x'] = []
data['cloud']['x']['array'] = []
data['cloud']['x']['function'] = function () {
	for (var i = 0; i < data['cloud']['number']['width']['value']; i ++) {
		for (var j = 0; j < data['cloud']['number']['height']['value']; j ++) {
			if (!data['cloud']['x']['array'][i]) {
				data['cloud']['x']['array'][i] = []
			}
			if (!data['cloud']['x']['array'][i][j]) {
				data['cloud']['x']['array'][i][j] = []
			}
			data['cloud']['x']['array'][i][j] = i * data['cloud']['picture']['width']['value']
		}
	}
}
data['cloud']['y'] = []
data['cloud']['y']['array'] = []
data['cloud']['y']['function'] = function () {
	for (var i = 0; i < data['cloud']['number']['width']['value']; i ++) {
		for (var j = 0; j < data['cloud']['number']['height']['value']; j ++) {
			if (!data['cloud']['y']['array'][i]) {
				data['cloud']['y']['array'][i] = []
			}
			if (!data['cloud']['y']['array'][i][j]) {
				data['cloud']['y']['array'][i][j] = []
			}
			data['cloud']['y']['array'][i][j] = j * data['cloud']['picture']['height']['value']
		}
	}
}
data['cloud']['animation'] = []
data['cloud']['animation']['value'] = []
data['cloud']['animation']['function'] = function () {
	for (var i = 0; i < data['cloud']['number']['width']['value']; i ++) {
		for (var j = 0; j < data['cloud']['number']['height']['value']; j ++) {
			data['screen']['paint']['function']('', 1, data['button']['x']['array'][i][j], data['button']['y']['array'][i][j])
		}
	}
}
data['cloud']['timer'] = []
data['cloud']['timer']['array'] = []
data['cloud']['timer']['function'] = function () {
	data['cloud']['number']['width']['function']()
	data['cloud']['number']['height']['function']()
	data['cloud']['x']['function']()
	data['cloud']['y']['function']()
}



data['timer'] = []
data['timer']['value'] = []
data['timer']['function'] = setInterval(function () {
	data['screen']['timer']['function']()
	data['mouse']['timer']['function']()
	data['map']['timer']['function']()
	data['button']['timer']['function']()
	data['cloud']['timer']['function']()
}, 40)




