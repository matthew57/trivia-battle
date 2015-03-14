A js file should be made to initilize a MongoDB with basic questions, so we can run it on any computer we pull the git hub to and then have a question database. :)

The schema with corresponding explanations of each collections:

/*
* Basic inform of user
*/
var user {
_id
name
password
email
}

/*
* Bidirectional relation between user and questions they got right in the past.
* For ensuring no duplicated questions be given to user in the future
*/
var user_question {
_id
user_id
question_id
}

/*
* Character information, exp: experience, and etc.
* user_id was put here so each user may have more than one character, maybe, haha.
*/
var char_inform{
_id
user_id
exp
gold
level
basic_value_id
weapon_id
}

/*
* Character's values in battle, hp: hit point, and etc.
*/
var basic_value{
_id
hp
attack
defence
}

/*
* Weapon, each gamer can have one and only one.
* Let's make the hp, attack and defence bonuses be integer will be added to the basic value, just keep it simple
* special mean special skill attach to each weapon, will be an integer
* 0. nothing, 1. healing, 2. critical, 3. reduce choices for the next round (subjected to changes)
*/
var weapon {
_id
hp_bonus
attack_bonus
defence_bonus
special
}

/*
* Category of quesitons
*/
var category {
_id
name
}

/*
* Sub-category of quesitons, each category may have more than one sub-categories
*/
var sub_category {
_id
name
category_id
}

/*
* Question, each qeustion will contain an answer_id which is its corresponding right answer
*/
var question {
_id
question
sub_category_id
answer_id // (correct)
}

/*
* Answer
*/
var answer {
_id
value
question_id
}
