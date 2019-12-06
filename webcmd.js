ver = 'alpha 1.0'

function getcmd() {
return document.getElementById('input1').value
}

function print(text) {
document.getElementById('output').innerHTML += ('<p>' + text + '</p>')
}

function docmd() {
command = getcmd().split(' ')
cmd = command[0]
if (cmd == 'help') {
print('Commands:')
print('help----displays this help')
print('ver-----prints current version of webcmd')
print('time----prints date & time')
print('hello---for testing purposes')
print('print---print variable')
print('set-----set variable')
} else if (cmd == 'ver') {
print(ver)
} else if (cmd == 'time') {
print(Date())
} else if (cmd == 'hello') {
print('Hello, World.')
} else if (cmd == 'print') {
print(eval(command[1]))
} else if (cmd == 'set') {
eval(var (command[1]) + (' = ' + window.prompt('set variable \'' + command[1] + '\' to:')))
print(hi)
}

else {
print('unknown command. type \'help\' for a list of avalible commands.')
}
}
