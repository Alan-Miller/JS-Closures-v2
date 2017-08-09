describe('closures', function () {

	describe('inner', function () {
		it('should exist', function () {
			expect(inner).toBeDefined();
		})
		it('should be a function', function () {
			expect(inner).toEqual(jasmine.any(Function));
		})
		it('should be the outer function', function () {
			expect(JSON.stringify(inner)).toEqual(JSON.stringify(outer()));
		})
	})

	describe('mamaBird', function () {
		it('should exist', function () {
			expect(mamaBird).toBeDefined();
		})
		it('should be a function', function () {
			expect(mamaBird).toEqual(jasmine.any(Function));
		})
		it('should return \"Look what hatched! A little baby chicken!\"', function () {
			expect(chicken('little')).toBe('Look what hatched! A little baby chicken!');
		})
		it('should use the dial function', function () {
			var newCall = mamaBird('chicken');
			expect(newCall('test')).toEqual(chicken('test'));
		})

	})


	describe('makeCounter', function () {
		it('should exist', function () {
			expect(makeCounter).toBeDefined();
		})
		it('should be a function', function () {
			expect(makeCounter).toEqual(jasmine.any(Function));
		})
		it('should return a function', function () {
			expect(makeCounter()).toEqual(jasmine.any(Function));
		})
		it('should make count() increment', function () {
			var count = makeCounter();
			var first = count();
			var second = count();
			var third = count();
			expect(first).toBe(1);
			expect(second).toBe(2);
			expect(third).toBe(3);

		})
	})

	describe('counterFactory', function() {
		it('should exist', function() {
			expect(counterFactory).toBeDefined();
			expect(counter).toBeDefined();
		})

		it('should be a module', function() {
			expect(counter.inc).toEqual(jasmine.any(Function));
			expect(counter.dec).toEqual(jasmine.any(Function));
		})

		it('should increment', function() {
			var c = counterFactory(5);
			expect(c.inc()).toEqual(6);
			expect(c.inc()).toEqual(7);
		})

		it('should decrement', function() {
			var c = counterFactory(5);
			expect(c.dec()).toEqual(4);
			expect(c.dec()).toEqual(3);
		})
	})

	describe('santasWorkshop', function() {
		var niceList = (function() {
			var names = [
				'Brett Caudill',
				'Jessica Hathaway',
				'Breiden Busch',
				'Brian Kemper'
			];

			var thisName = names[Math.floor(Math.random() * names.length)].split(" ");

			return {
				first: thisName[0],
				last: thisName[1]
			}
		})();

		it('should exist', function() {
			expect(santasWorkshop).toEqual(jasmine.any(Function))
		})

		it('should greet correctly', function() {
			expect(santasWorkshop(niceList.first, niceList.last)).toEqual(
				"Santa and his elves wish you a very merry Christmas, " + niceList.first + " " + niceList.last + "!"
			)
		})
	})

	describe('module', function() {
		it('should exist', function() {
			expect(module).toEqual(jasmine.any(Object));
		})

		it('should have a property called publicMethod', function() {
			expect(module.publicMethod).toEqual(jasmine.any(Function));
		})

		it('should invoke publicMethod to get the privateMethod', function() {
			expect(module.publicMethod()).toEqual('Hi, I\'m Phillip, age 29 from Utah');
		})
	})

	describe('findPotentialFriends', function() {
		it('should exist', function() {
			expect(findPotentialFriends).toEqual(jasmine.any(Function));
		})

		it('should return a function', function() {
			expect(findPotentialFriends([])).toEqual(jasmine.any(Function));
		})

		it('should return false if a given user is already a friend', function() {
			expect(findPotentialFriends(["Tom"])("Tom")).toEqual(false)
		})

		it('should return true if a given user is not a friend', function() {
			expect(findPotentialFriends(["Tom"])("Tim")).toEqual(true);
		})

		describe('Black Diamond', function() {
			it('should create an array of potential second level friends', function() {
				expect(potentialSecondLevelFriends).toEqual(jasmine.any(Array));
				expect(potentialSecondLevelFriends).toEqual(['Anne', 'Quinton'])
			})
			it('should create an array of potential friends from all users', function() {
				expect(allPotentialFriends).toEqual(jasmine.any(Array));
				expect(allPotentialFriends).toEqual(['Anne', 'Quinton', 'Katie', 'Mary'])
			})
		})
	})

	describe('timeOutCounter', function() {
		beforeEach(function() {
			jasmine.clock().install();
			spyOn(console, 'log');
		});

		afterEach(function() {
			jasmine.clock().uninstall();
		})

		it('should exist', function() {
			expect(timeOutCounter).toEqual(jasmine.any(Function))
		})

		it('should call setTimeout 6 times', function() {
			timeOutCounter();

			jasmine.clock().tick(500);
			expect(console.log.calls.count()).toEqual(1);
			expect(console.log).toHaveBeenCalledWith(0);

			jasmine.clock().tick(1000);
			expect(console.log.calls.count()).toEqual(2);
			expect(console.log).toHaveBeenCalledWith(1);

			jasmine.clock().tick(1000);
			expect(console.log.calls.count()).toEqual(3);
			expect(console.log).toHaveBeenCalledWith(2);

			jasmine.clock().tick(1000);
			expect(console.log.calls.count()).toEqual(4);
			expect(console.log).toHaveBeenCalledWith(3);

			jasmine.clock().tick(1000);
			expect(console.log.calls.count()).toEqual(5);
			expect(console.log).toHaveBeenCalledWith(4);

			jasmine.clock().tick(1000);
			expect(console.log.calls.count()).toEqual(6);
			expect(console.log).toHaveBeenCalledWith(5);
		})
	})

	describe('earnings', function () {
		it('should exist', function () {
			expect(earnings).toBeDefined();
		})
		it('should be a function', function () {
			expect(earnings).toEqual(jasmine.any(Function));
		})
		it('should return \"The CEO made $2300000 this year.\"', function () {
			expect(ceo('CEO', 2000000)).toBe('The CEO made $2300000 this year.');
		})
		it('should use the inner function', function () {
			var newCall = earnings('CEO', 2000000);
			expect(newCall()).toEqual(ceo());
		})
	})

	describe('family', function () {
		it('should exist', function () {
			expect(family).toBeDefined();
		})
		it('should be a function', function () {
			expect(family).toEqual(jasmine.any(Function));
		})
		it('should return \"Lisa Alvarez is a lovely name.\"', function () {
			expect(alvarez('Lisa')).toBe('Lisa Alvarez is a lovely name.');
		})
		it('should return \"Amy Ziegler is a lovely name.\"', function () {
			expect(ziegler('Amy')).toBe('Amy Ziegler is a lovely name.');
		})
		it('should use the inner function', function () {
			var newCall = family('Ziegler');
			expect(newCall('James')).toEqual(ziegler('James'));
		})
	})

	describe('stateSalesTax', function () {
		it('should exist', function () {
			expect(stateSalesTax).toBeDefined();
		})
		it('should be a function', function () {
			expect(stateSalesTax).toEqual(jasmine.any(Function));
		})
		it('should return 1047', function () {
			expect(utah(1000)).toBe(1047);
		})
		it('should use the inner function', function () {
			var newCall = stateSalesTax(0.047);
			expect(newCall(1234)).toEqual(utah(1234));
		})
	})

	describe('devMountain', function () {
		var janesSkills = ['JavaScript', 'React', 'Node', 'Express', 'SQL', 'HTML/CSS', 'RegEx', 'ping pong'].sort().map(item => item.toLowerCase());
		var resultsArray = jane.listSkills().sort().map(item => item.toLowerCase());

		it('should exist', function () {
			expect(devMountain).toBeDefined();
		})
		it('should be a function', function () {
			expect(devMountain).toEqual(jasmine.any(Function));
		})
		it('should add RegEx and ping pong to the original list of skills', function () {
			expect(resultsArray).toEqual(janesSkills);
		})
		it('be able to pass in an array of skills to learnSkills method', function () {
			jane.learnSkills(['foosball', 'debugging', 'pair programming']);
			var moreSkills = jane.listSkills().map(item => item.toLowerCase())	;
			// jane.learnSkills(moreSkills);
			// var janeLearnMoreSkills = jane.listSkills();
			expect(moreSkills).toContain('foosball');
			expect(moreSkills).toContain('debugging');
			expect(moreSkills).toContain('pair programming');
		})
	})

});
