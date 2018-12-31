// Initialize app
var app = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});
   

$$(document).on('click', '#favorites', function (e) {
   
 });
    
 $$(document).on('click', '#about', function (e) {
   
 });

 $$(document).on('click', '#settings', function (e) {

 });
// Now we need to run the code that will be executed only for About page.

// app.onPageInit('loginscreen', function (page) {
// //     // Do something here for "about" page
	
// })

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
app.onPageInit('about', function (page) {
//     // Do something here for "about" page
// 	var tttoken = "v7nirxu0scv0eistepradr";
// 	$$.ajax({
// 				 url: "https://unofox.xyz/kishan/10eleven/system_pin_history/",
// 				cache: false,
// 				headers : {"Access-Control-Allow-Credentials":true,"Access-Control-Allow-Origin":"https://unofox.xyz"},
// 				type: "POST",
// 				dataType: "json",
// 				data: { 'varsete': tttoken ,memberid : '100088'},
// 				success: function(response){
					
// 					var htmlx = "";
// 					var htmly = "";
// 					$$.each(response["data"], function (key, value) {
// 							htmly += "<div class='list-group car'  > <div class='list-group-title'> Date : "+value.date +"</div> <div class='item-after'> memberid : " + value.memberid +"</div>  <div class='item-subtitle'> pin number"+ value.pinnumber +"</div></div>";

// 							// htmlx += " <tr>  <td style='color:black;' class='label-cell'>" + value.date +
// 							//  "</td><td style='color:black;' class='label-cell'>" + value.memberid + 
// 							//  "</td> <td style='color:black;' class='numeric-cell'>" + value.pinnumber + 
// 							//  "</td></tr> ";
// 						});
// 					$$("#mydynamic").html(htmly);

// 					$$("#coins_table").html(htmlx);

// 					// <div class="item-title-row">
// 					// 	            <div class="item-title">Facebook</div>
// 					// 	            <div class="item-after">17:14</div>
// 					// 	          </div>
// 					// 	          <div class="item-subtitle">ersetwetwtwtw</div>
// 					// 	          <div class="item-text"></div>
// 					//console.log(htmlx);	
// 					//app.alert(' got the response');
// 				},
// 				error: function(responsex){
// 					console.log(responsex);
// 					app.alert(responsex.status+' got an error');
					
// 				}
// 			});
})


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
    //     // Following code will be executed for page with data-page attribute equal to "about"
        
    }
})

// // Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
   // app.alert('Here comes About page');
})