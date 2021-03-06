﻿#pragma strict
static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;


function Start () {

}

function Update () 
{
	//calculating borders
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;	
	
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;	
	
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
}

//this function takes a transform as a parameter
static function EnableBorders(object:Transform)
{
	//exit stage left
	if(object.position.x < leftmost +1)
	{
		object.position.x = leftmost+1;
	}
	//exit stage right
	if(object.position.x > rightmost -1)
	{
		object.position.x = rightmost - 1;
		
	}
	//exit stage top
	if (object.position.y > topmost)
	{
		object.position.y = bottommost;
	}
	//exit stage bottom
	if(object.position.y < bottommost)
	{
		object.position.y = topmost;
	}
}