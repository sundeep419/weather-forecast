//first have to enter the input
// click button
// using ajax coz to send request and get info from main server
//put it in a table

//making jquery ready
$(document).ready(function(){
//now it has to get info and send request on  click using jquery and call the function

$("#current").on("click",function(){
	var cityName=$("#input1").val();
	console.log(cityName);
	//declare variable inorder to use
	var urlString="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=634e76291caedfc21fca4d07304bee4f";	
	$.ajax({
		url: urlString,
		success: function(info){
			console.log(info);
			var date=moment((info.dt)*1000).format("MMM Do YY");
			var temperature=info.main.temp - 273;
			var humidity=info.main.humidity;
			var descrip=info.weather[0].description;
			console.log(date,temperature,humidity,descrip);
			var htmlTable='<tr><td>' + date + '</td><td>' + temperature + '</td><td>' + humidity + '</td><td>' + descrip + '</td></tr>';
			$("tbody").append(htmlTable);
			
		},
		error:function(info){
			console.log("Err",info);
		}
		
	});
});$("#forecast").on("click",function(){
			var cityName=$("#input1").val();
			console.log(cityName);
		var urlString="http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid=634e76291caedfc21fca4d07304bee4f";	
	$.ajax({
		url: urlString,
		success: function(fore){
			console.log(fore.list.length);
				var startDate=[];
				var futTemp;
				var a = fore.list.length;
			for(var i=0; i < a; i++){
			console.log(i);
				startDate.push(moment((fore.list[i].dt )*1000).format("MMM Do YY"));
				futTemp=Math.floor(fore.list[i].main.temp - 273);
				var futHumid=fore.list[i].main.humidity || 0;
				var futDescrip=fore.list[i].weather[0].description;
				// console.log(startDate,futTemp,futHumid,futDescrip);
			var htmlTable='<tr><td>' + startDate + '</td><td>' + futTemp + '</td><td>' + futHumid + '</td><td>' + futDescrip + '</td></tr>';
				$("tbody").append(htmlTable);
				startDate.pop(moment((fore.list[i].dt )*1000).format("MMM Do YY"));
			}
		},
		error:function(fore){
			console.log("Err",fore);
		}
	});
	});	
	});
		// 		 Highcharts.chart('chart', {
        
		// 		// included charts from highcharts for graphical representation of weather forecast
		// 		//creating variable to save in an array to show charts
		// 			// var dateArr= info.list.map(item => item.dt_txt);
		// 			// var tempArr= info.list.map(item => itme.main.temp);
  //       chart: {
  //           type: 'spline'
  //       },
  //       title: {
  //           text: '5 Day Average Temperature'
  //       },
  //       subtitle: {
  //           text: 'Source: openweathermap.org'
  //       },
  //       xAxis: { 
  //           categories: startDate
  //       },
  //       yAxis: {
  //           title: {
  //               text: 'Temperature'
  //           },
  //           labels: {
  //               formatter: function () {
  //                   return this.value + '°';
  //               }
  //           }
  //       },
  //       tooltip: {
  //           crosshairs: true,
  //           shared: true
  //       },
  //       plotOptions: {
  //           spline: {
  //               marker: {
  //                   radius: 4,
  //                   lineColor: '#666666',
  //                   lineWidth: 1
  //               }
  //           }
  //       },
  //       series: [{
           
  //           name: cityName,
  //           marker: {
  //               symbol: 'diamond'
  //           },
  //           data: futTemp
  //       }]
  //   });
			
