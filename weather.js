var name = 'main';
var dataMungingKata = function (N) {
	var minPrecipitation = [];
	var f = open ('C:\Users\Marcin\Desktop\weather\weather.txt');
	try {
		f.enter ();
		pyNext (f);
		for (var line of f) {
			minPrecipitation.append (int (line.py_split () [4]));
		}
		f.exit ();
	}
	catch (except0) {
		if (! (f.exit (except0.name, except0, except0.stack))) {
			throw except0;
		}
	}
	var minPrecipitation = min (minPrecipitation);
	var f = open ('C:\Users\Marcin\Desktop\weather\weather.txt');
	try {
		f.enter ();
		pyNext (f);
		var dateDay = dict ({0: 'Tuesday', 1: 'Wednesday', 2: 'Thursday', 3: 'Friday', 4: 'Saturday', 5: 'Sunday', 6: 'Monday', 7: 'Tuesday'});
		var count = 0;
		for (var line of f) {
			var a = line.pySplit ();
			a [0] = int (a [0]);
			a [2] = int (int (a [2]) * 1.8 + 32);
			a [3] = int (int (a [3]) * 1.8 + 32);
			a [4] = int (a [4]);
			if (a [4] == minPrecipitation && (a [3] >= 70 && a [2] <= 85)) {
				if ((mod (a [0], 7), dateDay)) {
					if (count < N) {
						var suffix = '';
						if (Math.floor ((mod (a [0], 100)) / 10) != 1) {
							if (mod (a [0], 10) == 1) {
								var suffix = suffix + 'st';
							}
							else if (mod (a [0], 10) == 2) {
								var suffix = suffix + 'nd';
							}
							else if (mod (a [0], 10) == 3) {
								var suffix = suffix + 'rd';
							}
							else {
								var suffix = suffix + 'th';
							}
						}
						else {
							var suffix = suffix + 'th';
						}
						print ((((dateDay [mod (a [0], 7)] + ' the ') + str (a [0])) + suffix) + ' day of the month is the best day for a picnic.');
						var count = count + 1;
					}
				}
			}
		}
		f.exit ();
	}
	catch (except0) {
		if (! (f.exit (except0.name, except0, except0.stack))) {
			throw except0;
		}
	}
};
var N = int (input ('enter number of days = '));
dataMungingKata (N);
