describe('Primera Prueba', () => {
	test('prueba index.js 02-intro-javascript', () => {
		const msg = 'Hola mundo';
		const msg2 = `Hola mundo`;
	
		expect(msg2).toBe(msg);//para objetos deberia de ser toEqual()
	});
});