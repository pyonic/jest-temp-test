const inCorrectClosed = require('./main.js');

const tests = [
	{key: '{{([{()])}}', value: false},
	{key: '{}{',value: false},
	{key: '(})}',value: false},
	{key: '{()}{}[]()',value: true},
	{key: '[]][',value:false},
	{key: '{({)}',value:false},
	{key: '([][]{}(()))',value:true},
	{key: '[[{}]',value:false},
	{key: '([]{{{}{}{}{}{}{}}}[])',value: true},
	{key: '{{([({[]})])}}', value: true},
	{key: '{{([({[[]})])}}', value: false},
]

test('Should return true if scopes closed correctly',()=>{

	tests.forEach( (tst) =>{
		expect(inCorrectClosed(tst.key)).toBe(tst.value)
	})
})