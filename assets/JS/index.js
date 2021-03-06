/* ******* Variables for if mapping function ****** */
let selection_one = "";
let selection_two = "";
let start_time = "";
let end_time = "";
let start_seconds;
let end_seconds;
let time_seconds;
let score = "";
let first_id = "";
let second_id = "";
let old_score = "";
let array = ["front1.10", "front2.10", "front1.11", "front2.11", "front1.12", "front2.12", "front1.13", "front2.13", "front1.14", "front2.14", "front1.15", "front2.15", "front1.16", "front2.16", "front1.17", "front2.17", "front1.18", "front2.18", "front1.19", "front2.19", "front1.20", "front2.20", "front1.21", "front2.21"];
let selection_one_numbers_check = "";
let div_class_name = "";

/* ****** Pop up message for time out function. ******* */
var timeout_parent = document.querySelector(".timeout-parent"),
	timeout_section = document.querySelector("section");


function timeout_appear() {

	timeout_parent.style.display = "block";
	timeout_section.style.filter = "blur(10px)";
	document.getElementById("popup").className = "closed";

}


var number_parent = document.querySelector(".number-parent"),
	btn = document.querySelector("button"),
	X = document.querySelector(".X"),
	number_section = document.querySelector("section");


/* ****** Pop up message to allow user to reset numbers or not ******* */
function number_appear() {
	document.getElementById("popup").className = "open";
	number_parent.style.display = "block";
	number_section.style.filter = "blur(10px)";

	var timeleft = 10;
	var downloadTimer = setInterval(function() {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
			document.getElementById("countdown").innerHTML = "10 seconds left";
		} else {
			document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
		}
		timeleft -= 1;
	}, 1000);
}

function number_yes() {

	document.getElementById("popup").className = "user_input_confirmed_yes";
	document.getElementById("selection").innerText = "Number's will not show.";
	document.getElementById("number_yes").style = "visibility: hidden;";
	document.getElementById("number_no").style = "visibility: hidden;";
	number_close();

	let check_open = document.getElementById("popup");

	if (check_open.className == "open") {

		number_close();
		timeout_appear();

	} else {

		number_close();
		check_open = document.getElementById("popup");


		if (check_open.className == "user_input_confirmed_yes") {

			document.getElementById("numbers_true").innerHTML = "false";

			var divs = document.getElementsByTagName("div");

			for (var i = 0; i < divs.length; i++) {

				let div_class_name = divs[i].className.substr(0, 13);
				let div_class_name_hidden = divs[i].className.substr(0, 14);

				if (div_class_name === "front_number") {
					divs[i].className = "front";
				} else {
					if (div_class_name_hidden === "number_visible") {
						divs[i].className = "number_hidden";
					}
				}
			}

			var divs = document.getElementsByTagName("div");
			for (var i = 0; i < divs.length; i++) {

				let div_class_name = divs[i].className.substr(0, 4);
				let div_class_name_locked = divs[i].className.substr(0, 6);
				if (div_class_name === "back" || div_class_name_locked === "locked") {
					divs[i].className = "front";
					old_score = parseInt(document.getElementById("correct_score").innerText);
					document.getElementById("correct_score").innerText = 0;

					old_score = parseInt(document.getElementById("incorrect_score").innerText);
					document.getElementById("incorrect_score").innerText = 0;

				}
			}
			shuffleArray(array);
			var divs = document.getElementsByTagName("div");
			for (var j = 0; j < array.length; j++) {
				for (var i = 0; i < divs.length; i++) {


					let div_class_name = divs[i].className.substr(0, 5);
					if (div_class_name === "front") {

						divs[i].id = array[j];
						j++;
					}
				}

			}

		} else {

			numbers_only();

			var divs = document.getElementsByTagName("div");

			for (var i = 0; i < divs.length; i++) {
				let div_class_name = divs[i].className.substr(0, 4);
				let div_class_name_locked = divs[i].className.substr(0, 6);

				if (div_class_name === "back" || div_class_name_locked === "locked") {

					divs[i].className = "front_number";
					old_score = parseInt(document.getElementById("correct_score").innerText);
					document.getElementById("correct_score").innerText = 0;

					old_score = parseInt(document.getElementById("incorrect_score").innerText);
					document.getElementById("incorrect_score").innerText = 0;

				}
			}
			shuffleArray(array);
			var divs = document.getElementsByTagName("div");
			for (var j = 0; j < array.length; j++) {
				for (var i = 0; i < divs.length; i++) {


					let div_class_name = divs[i].className.substr(0, 5);
					if (div_class_name === "front") {

						divs[i].id = array[j];
						j++;
					}

				}

			}

		}
	}

}

function number_no() {

	document.getElementById("popup").className = "user_input_confirmed_no";
	document.getElementById("selection").innerText = "Number's will show.";
	document.getElementById("number_yes").style = "visibility: hidden;";
	document.getElementById("number_no").style = "visibility: hidden;";
	number_close();
	let check_open = document.getElementById("popup");

	if (check_open.className == "open") {

		number_close();
		timeout_appear();

	} else {

		number_close();
		check_open = document.getElementById("popup");

		if (check_open.className == "user_input_confirmed_yes") {

			document.getElementById("numbers_true").innerHTML = "false";

			var divs = document.getElementsByTagName("div");

			for (var i = 0; i < divs.length; i++) {

				let div_class_name = divs[i].className.substr(0, 13);
				let div_class_name_hidden = divs[i].className.substr(0, 14);

				if (div_class_name === "front_number") {
					divs[i].className = "front";
				} else {
					if (div_class_name_hidden === "number_visible") {
						divs[i].className = "number_hidden";
					}
				}
			}

			var divs = document.getElementsByTagName("div");
			for (var i = 0; i < divs.length; i++) {

				let div_class_name = divs[i].className.substr(0, 4);
				let div_class_name_locked = divs[i].className.substr(0, 6);
				if (div_class_name === "back" || div_class_name_locked === "locked") {
					divs[i].className = "front";

					old_score = parseInt(document.getElementById("correct_score").innerText);
					document.getElementById("correct_score").innerText = 0;

					old_score = parseInt(document.getElementById("incorrect_score").innerText);
					document.getElementById("incorrect_score").innerText = 0;

				}
			}
			shuffleArray(array);
			var divs = document.getElementsByTagName("div");
			for (var j = 0; j < array.length; j++) {
				for (var i = 0; i < divs.length; i++) {


					let div_class_name = divs[i].className.substr(0, 5);
					if (div_class_name === "front") {

						divs[i].id = array[j];
						j++;
					}
				}

			}

		} else {

			numbers_only();

			var divs = document.getElementsByTagName("div");

			for (var i = 0; i < divs.length; i++) {
				let div_class_name = divs[i].className.substr(0, 4);
				let div_class_name_locked = divs[i].className.substr(0, 6);

				if (div_class_name === "back" || div_class_name_locked === "locked") {

					divs[i].className = "front_number";
					old_score = parseInt(document.getElementById("correct_score").innerText);
					document.getElementById("correct_score").innerText = 0;
					old_score = parseInt(document.getElementById("incorrect_score").innerText);
					document.getElementById("incorrect_score").innerText = 0;

				}
			}
			shuffleArray(array);
			var divs = document.getElementsByTagName("div");
			for (var j = 0; j < array.length; j++) {
				for (var i = 0; i < divs.length; i++) {


					let div_class_name = divs[i].className.substr(0, 5);
					if (div_class_name === "front") {

						divs[i].id = array[j];
						j++;
					}

				}

			}

		}
	}

}

function number_close() {
	number_parent.style.display = "none";
	number_section.style.filter = "blur(0px)";
	document.getElementById("selection").innerText = "";
	document.getElementById("number_yes").style = "visibility: visible;";
	document.getElementById("number_no").style = "visibility: visible;";
}

/* ****** Timeout function. Appears if user does not make a selection ******* */

function timeout_ok() {
	timeout_parent.style.display = "none";
	timeout_section.style.filter = "blur(0px)";
	document.getElementById("popup").className = "closed";
}



/* ****** Hides/unhides element not needed ******* */
function hide_unhide() {
	var x = document.getElementById("hide_unhide");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function show_hero() {
	var hero = document.getElementById("header_format");
	hero.style.display = "block";
	alert("Successfully submitted");
	var x = document.getElementById("hide_unhide");
	x.style.display = "none";
}



/* ****** When pages loads this will randomly assign id's to each of the tiles to ensure the game is never the same ******* */
window.onload = function random_array() {
	shuffleArray(array);
	shuffleArray(array);
	var divs = document.getElementsByTagName("div");
	for (var j = 0; j < array.length; j++) {
		for (var i = 0; i < divs.length; i++) {


			let div_class_name = divs[i].className.substr(0, 5);
			if (div_class_name === "front") {

				divs[i].id = array[j];
				j++;
			}
		}
	}
	// alert("On your last visit you scored " + sessionStorage.getItem('score') + " in " + sessionStorage.getItem('TimeTaken') + " seconds!");
	if (sessionStorage.getItem('score') > 0) {
		let myAlert = document.querySelectorAll('.toast')[0];
		if (myAlert) {
		  let bsAlert = new bootstrap.Toast(myAlert);
		  bsAlert.show();
		}
		
		document.getElementById('spanScore').innerText = sessionStorage.getItem('score');
		document.getElementById('spanTime').innerText = sessionStorage.getItem('TimeTaken');	
		document.getElementById('visitDate').innerText = sessionStorage.getItem('dateComplete');
		document.getElementById('visitTime').innerText = sessionStorage.getItem('timeComplete');
	} else {
		return;
	}
};

/* ****** Shuffle array function. Called by other functions. ******* */
const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;

	}

	return array;
};

/* ****** Reset tiles function called by reset Game function. Function will check if the tiles are "back" and reset them to "front x" ******* */
function reset_tiles() {
	let numbers_true_check = document.getElementById("numbers_true").innerHTML;
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++) {
		let div_class_name = divs[i].className.substr(0, 4);
		let div_class_name_locked = divs[i].className.substr(0, 6);
		if (div_class_name === "back") {

			if (numbers_true_check === "true") {
				divs[i].className = "front_number";
			} else {
				divs[i].className = "front";
			}
		}
	}
}

/* ****** Main Game function. The If statement below interacts with the tiles on the memory page. *******
    The general logic is as follows:
    If tile is locked do nothing else
    If score is equal to the max score show the game complete message else
    if selection one equals nothing then define selection one and turn over tile else
    if selection one equals selection two then the same tile has been selected so increase incorrect score and reset tiles else
    If the Id's from selection one and selection two do not match then turn over the tiles and update the score and do a score check
    If the score check is true then show game complete message else
    If selection one id and selection two id do not match then incorrect score plus 1 and reset tiles
*/
let isStarted = false;
let allowPlay = true;

function if_mapping(e) {
	if (isStarted && allowPlay) {
		let selectedElement = e;
		let selection_two = selectedElement.id;
		let score = document.getElementById("correct_score");
		let score_check = score.innerHTML;
		let score_int = parseInt(score_check);
		let max_score = 12;
		let locked_check = e.className.substr(0, 6);
		let numbers_only_check = e.className;

		if (start_time == "") {
			start();
		}
		if (locked_check == "locked") {} else {

			if (score_int === max_score) {

				appear();

			} else {
				if (selection_one === "") {
					selection_one = e.id;
					first_id = e.id.slice(-2);
					/* console.log(selection_one + " " + first_id); */
					selectedElement.className = "back" + first_id;
					selection_one_numbers_check = numbers_only_check;
				} else {
					if (selection_one === selection_two) {

						old_score = parseInt(document.getElementById("incorrect_score").innerText);
						document.getElementById("incorrect_score").innerText = ++old_score;

						if (selection_one_numbers_check === "front") {
							selectedElement.className = "front";

						} else {
							selectedElement.className = "front_number";
						}

						selection_one = "";
						selection_two = "";
						first_id = "";
						second_id = "";
					} else {
						second_id = e.id.slice(-2);
						if (selection_one !== selection_two && first_id === second_id) {

							old_score = parseInt(document.getElementById("correct_score").innerText);
							document.getElementById("correct_score").innerText = ++old_score;

							selectedElement.className = "locked" + first_id;
							let first_selection = document.getElementById(selection_one);
							first_selection.className = "locked" + first_id;

							selection_one = "";
							selection_two = "";
							first_id = "";
							second_id = "";

							score = document.getElementById("correct_score");
							score_check = score.innerHTML;
							score_int = parseInt(score_check);
							if (score_int === max_score) {

								end_game_time();
								time_seconds = (end_seconds - start_seconds).toFixed(2);
								document.getElementById("time_taken_header").innerText = "Time Taken";
								document.getElementById("time_taken").innerText = time_seconds + " seconds.";
								document.getElementById("time_completion").innerText = time_seconds;
								appear();
								sessionStorage.setItem('score',score_int);
								sessionStorage.setItem('TimeTaken', time_seconds);
								var today = new Date();
								var date = today.toJSON().slice(0, 10);
								var nDate = date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
								let currentDate = new Date();
								let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
								sessionStorage.setItem('dateComplete', nDate);
								sessionStorage.setItem('timeComplete', time);
							}

							allowPlay = false;

							setTimeout(() => {
								allowPlay = true;
							}, 1000);

						} else {
							if (selection_one !== selection_two && first_id !== second_id)
								selectedElement.className = "back" + second_id;
							old_score = parseInt(document.getElementById("incorrect_score").innerText);
							document.getElementById("incorrect_score").innerText = ++old_score;
							setTimeout(function() {
								if (numbers_only_check === "front") {
									selectedElement.className = "front";

								} else {
									selectedElement.className = "front_number";
								}
								selection_one = "";
								selection_two = "";
								first_id = "";
								second_id = "";
								reset_tiles();
							}, 1000);

							allowPlay = false;

							setTimeout(() => {
								allowPlay = true;
							}, 1000);
						}
					}
				}
			}
		}
	}
}

/* ******* Start button for game ******* */
function start() {

	if (isStarted) {
		return;
	} else {
		isStarted = true;
		var currentDate = new Date();
		start_time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
		let start_element = document.getElementById("game_start_time");
		start_seconds = new Date() / 1000;
		start_element.innerText = start_time;
	}
}



/* ******* End button for game ******* */
function end_game_time() {
	var currentDate = new Date();
	end_time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
	let end_element = document.getElementById("game_end_time");
	end_seconds = new Date() / 1000;
	end_element.innerText = end_time;
}


/* ******* Pop up message for game complete ******* */
var parent = document.querySelector(".modal-parent"),
	btn = document.querySelector("button"),
	X = document.querySelector(".X"),
	section = document.querySelector("section");


function appear() {
	parent.style.display = "block";
	section.style.filter = "blur(10px)";
	let final_correct_score = document.getElementById("correct_score").innerHTML;
	let final_incorrect_score = document.getElementById("incorrect_score").innerHTML;
	document.getElementById("congrats_correct").innerHTML = final_correct_score;
	document.getElementById("congrats_incorrect").innerHTML = final_incorrect_score;
}

if (X != null) {
	X.addEventListener("click", disappearX);

}

function disappearX() {
	parent.style.display = "none";
	section.style.filter = "blur(0px)";
}
parent.addEventListener("click", disappearParent);

function disappearParent(e) {
	if (e.target.className == "modal-parent") {
		parent.style.display = "none";
		section.style.filter = "blur(0px)";
	}
}


/* ******* Change tiles to black tiles with white numbers ******* */
function numbers_only() {

	let numbers_true_check = document.getElementById("numbers_true").innerHTML;


	if (numbers_true_check == "true") {

		var divs = document.getElementsByTagName("div");


		for (var i = 0; i < divs.length; i++) {
			let div_class_name = divs[i].className.substr(0, 12);
			let div_class_name_locked = divs[i].className.substr(0, 6);
			let div_class_name_hidden = divs[i].className.substr(0, 14);

			if (div_class_name === "front_number") {
				divs[i].className = "front";
			} else {
				if (div_class_name_hidden === "number_visible") {
					divs[i].className = "number_hidden";
				}
			}
		}

		document.getElementById("numbers_true").innerHTML = "false";
	} else {

		var divs = document.getElementsByTagName("div");

		for (var i = 0; i < divs.length; i++) {

			let div_class_name = divs[i].className.substr(0, 6);
			let div_class_name_hidden = divs[i].className.substr(0, 13);
			let div_class_name_black = divs[i].className;

			if (div_class_name === "front") {
				divs[i].className = "front_number";
			} else {

				if (div_class_name_hidden === "number_hidden") {
					divs[i].className = "number_visible";
				} else {
					if (div_class_name_black === "number_visible_black") {
						divs[i].className = "number_visible";
					}
				}
			}
		}

		document.getElementById("numbers_true").innerHTML = "true";
	}
}

/* ******* Reset Game function. Allows the user to reset the game and decide whether to keep numbers or not. General Logic as follows:
If numbers check is not true then no need to ask about numbers else
If numbers check is true ask the user if they want to keep the numbers
If the popup message times out do nothing else check user selection and reset the format of the tiles to either keep the numbers or remove the numbers
*/

function reset_game() {

	if (isStarted === true) {

		isStarted = false;

		document.getElementById("game_start_time").innerText = "";
		document.getElementById("game_end_time").innerText = "";

		let numbers_true_check = document.getElementById("numbers_true").innerHTML;
		let user_check = document.getElementById("popup").className;


		document.getElementById("correct_score").innerText = 0;
		document.getElementById("incorrect_score").innerText = 0;

		if (numbers_true_check == "false") {
			var divs = document.getElementsByTagName("div");

			for (var i = 0; i < divs.length; i++) {


				let div_class_name_hidden = divs[i].className.substr(0, 14);

				if (div_class_name === "front_number") {
					divs[i].className = "front";
				} else {
					if (div_class_name_hidden === "number_visible") {
						divs[i].className = "number_hidden";
					}
				}
			}

			var divs = document.getElementsByTagName("div");
			for (var i = 0; i < divs.length; i++) {
				let div_class_name = divs[i].className.substr(0, 4);
				let div_class_name_locked = divs[i].className.substr(0, 6);
				if (div_class_name === "back" || div_class_name_locked === "locked") {
					divs[i].className = "front";
					old_score = parseInt(document.getElementById("correct_score").innerText);
					document.getElementById("correct_score").innerText = 0;

					old_score = parseInt(document.getElementById("incorrect_score").innerText);
					document.getElementById("incorrect_score").innerText = 0;
					document.getElementById("time_taken").innerText = "";
					document.getElementById("time_completion").innerText = "";
					document.getElementById("time_taken_header").innerText = "";

				}
			}
			shuffleArray(array);
			var divs = document.getElementsByTagName("div");
			for (var j = 0; j < array.length; j++) {
				for (var i = 0; i < divs.length; i++) {


					let div_class_name = divs[i].className.substr(0, 5);
					if (div_class_name === "front") {

						divs[i].id = array[j];
						j++;
					}
				}

			}
			return;

		} else {

			number_appear();

		}
		document.getElementById("time_taken").innerText = "";
		document.getElementById("time_completion").innerText = "";
		document.getElementById("time_taken_header").innerText = "";
	}

}

