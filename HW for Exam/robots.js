var robots = [];
var interest_robot = [];
function setup() {
	createCanvas(1000, 1000);
	fillRobots();
	background(20);
	for (var i = 0; i < robots.length; i++) {
		drawRobot(robots[i].physical);
	}
	let clever_robot = {
		iq: 0,
		name: "",
		id: 0
	};
	for (let i = 0; i < robots.length; i++) {
		if (robots[i].secondName == "Katan") {
			console.log(i + 1, robots[i].firstName + " " + robots[i].secondName);
			highlight(robots[i], 0, 255, 0); // Highlight in green color
			break;
		} else {
			console.log(i + 1, robots[i].firstName + " " + robots[i].secondName);
		}

		if (robots[i].iq > clever_robot.iq) {
			clever_robot.iq = robots[i].iq;
			clever_robot.name = robots[i].firstName + " " + robots[i].secondName;
			clever_robot.id = i;
		}
	}
	highlight(robots[clever_robot.id],0,0,255);

	console.log("Clever robot is " + clever_robot.name + ". He has IQ = " + clever_robot.iq + ". His ID is " + (clever_robot.id + 1));
	let purpleSerialNumber = 100000; // Для хранения самого маленького серийного номера
	let destroyerRobot = null; // Для хранения робота, который хочет уничтожить человечество
	let narrowFaceRobot = null; // Для хранения робота с узким лицом
	for (let i = 0; i < robots.length; i++) {
		drawRobot(robots[i].physical, robots[i].firstName, robots[i].secondName);
		if (robots[i].serialNumber < purpleSerialNumber) {
			purpleSerialNumber = robots[i].serialNumber;
			interest_robot[3] = i;
		}
		if (robots[i].abilities.includes("destroy humanity")) {
			destroyerRobot = i;
		}
		if (robots[i].physical.headWidth < 70) {
			narrowFaceRobot = i;
		}
	}
	highlight(robots[interest_robot[3]], 128, 0, 128); // Подсветка в пурпурный цвет
	if (destroyerRobot !== null) {
		console.log("Robot who wants to destroy humanity: " + robots[destroyerRobot].firstName + " " + robots[destroyerRobot].secondName);
		highlight(robots[destroyerRobot], 255, 0, 0); // Подсветка в красный цвет
	}
	if (narrowFaceRobot !== null) {
		console.log("Robot with a narrow face: " + robots[narrowFaceRobot].firstName + " " + robots[narrowFaceRobot].secondName);
		highlight(robots[narrowFaceRobot], 255, 255, 0); // Подсветка в желтый цвет
	}
}
function highlight(robot, r, g, b) {
	push()
	stroke(r, g, b);
	strokeWeight(4);
	noFill();
	rect(robot.physical.x, robot.physical.y, 120, 120);
	pop();
}
function fillRobots() {
	var firstNames = ["Asad", "Agatha", "Benny", "Beau", "Carol", "Colin", "Data", "Delia", "Edward", "Ethal", "Freddy", "Fiona", "Georgina", "Greg", "Hal", "Holly", "Ishmail", "India", "Jamie", "Joanna", "Kym", "Kelly", "liam", "Leanne", "Marvin", "Michaela", "Nicholas", "Niamh", "Oscar", "Olivia", "Quentin", "Queenie", "Richard", "Rebecca", "Simon", "Simone", "Thomas", "Tilly", "Ulysses", "Ursula", "Vinny", "Violet", "William", "Winifred", "Xander", "Xanthe", "Yves", "Yvonne", "Zach", "Zara"];
	var secondNames = ["Anstead", "Brown", "Chan", "Depp", "English", "Forth", "Goodwin", "Holmes", "Iqbal", "Jameson", "Katan", "Lingard", "Munster", "Nicoles", "Oscar", "Quest", "Reagan", "Shiffman", "Tolworth", "Underwood", "Venn", "Walsh", "Xu", "Young", "Zerdin"]
	for (var i = 0; i < 64; i++) {
		var fn = firstNames[parseInt(random(0, firstNames.length - 1))];
		var sn = secondNames[parseInt(random(0, secondNames.length - 1))];
		var abilities = ["clean house", "make bed", "babysit", "cook", "school run", "laundry", "grow vegetables", "charity work", "darn socks", "do shopping", "take out rubbish", "feed the cat", "mow lawn", "paint fence"];
		while (abilities.length > 4) {
			abilities.splice(random(0, abilities.length), 1);
		}
		robots.push({
			firstName: fn,
			secondName: sn,
			iq: round(random(300, 3000)),
			serialNumber: round(random(10000, 100000)),
			abilities: abilities,
			physical: {
				r: round(random(0, 255)),
				g: round(random(0, 255)),
				b: round(random(0, 255)),
				headWidth: round(random(60, 100)),
				x: 20 + i % 8 * 120,
				y: 20 + floor(i / 8) * 120
			}
		})
	}
	robots[round(random(0, robots.length - 1))].abilities.splice(random(0, 4), 1, "destroy humanity");
}
function drawRobot(physical) {
	strokeWeight(2);
	stroke(0);
	var x = physical.x + 10 + (100 - physical.headWidth) / 2;
	var y = physical.y + 10;
	fill(physical.r, physical.g, physical.b);
	rect(x, y, physical.headWidth, 100);
	fill(physical.g, physical.r, physical.b);
	rect(x - 7, y + 30, 10, 33);
	rect(x + physical.headWidth - 3, y + 30, 10, 33);
	fill(250, 250, 0);
	ellipse(x + physical.headWidth * 0.5, y - 7, 10, 10);
	fill(255 - physical.r, 255 - physical.g, 255 - physical.b);
	rect(x + physical.headWidth * 0.5 - 10, y - 3, 20, 10);
	fill(255);
	ellipse(x + physical.headWidth * 0.25, y + 30, 26, 26);
	point(x + physical.headWidth * 0.25, y + 30);
	ellipse(x + physical.headWidth * 0.75, y + 30, 26, 26);
	point(x + physical.headWidth * 0.75, y + 30);
	fill(255, 0, 0);
	triangle(x + physical.headWidth * 0.5, y + 35, x + physical.headWidth * 0.35, y + 60, x + physical.headWidth * 0.65, y + 60);
	noFill();
	beginShape();
	vertex(x + physical.headWidth * 0.28, y + 75);
	vertex(x + physical.headWidth * 0.36, y + 85);
	vertex(x + physical.headWidth * 0.42, y + 75);
	vertex(x + physical.headWidth * 0.50, y + 85);
	vertex(x + physical.headWidth * 0.58, y + 75);
	vertex(x + physical.headWidth * 0.66, y + 85);
	vertex(x + physical.headWidth * 0.74, y + 75);
	endShape();
}
